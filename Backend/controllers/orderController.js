const pool = require("../config/db");

const createOrder = async (req, res) => {
  const client = await pool.connect();

  try {
    const {
      paintingId,
      full_name,
      email,
      phone,
      address,
      city,
      state,
      pincode,
    } = req.body;

    if (!paintingId || !full_name || !email || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await client.query("BEGIN");

    // 1️⃣ Check if painting exists and not sold
    const paintingCheck = await client.query(
      "SELECT price, sold FROM paintings WHERE id = $1 FOR UPDATE",
      [paintingId]
    );

    if (paintingCheck.rows.length === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ message: "Painting not found" });
    }

    if (paintingCheck.rows[0].sold === true) {
      await client.query("ROLLBACK");
      return res.status(400).json({ message: "Painting already sold" });
    }

    const price = paintingCheck.rows[0].price;

    // 2️⃣ Insert order
    const orderResult = await client.query(
      `INSERT INTO orders 
      (painting_id, total_amount, full_name, email, phone, address, city, state, pincode, payment_status) 
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,'paid')
      RETURNING *`,
      [
        paintingId,
        price,
        full_name,
        email,
        phone,
        address,
        city,
        state,
        pincode,
      ]
    );

    // 3️⃣ Mark painting as sold
    await client.query(
      "UPDATE paintings SET sold = true WHERE id = $1",
      [paintingId]
    );

    await client.query("COMMIT");

    res.status(201).json(orderResult.rows[0]);

  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Order creation error:", error);
    res.status(500).json({ message: "Error creating order" });
  } finally {
    client.release();
  }
};

module.exports = { createOrder };