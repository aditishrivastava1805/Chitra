const Razorpay = require("razorpay");
const crypto = require("crypto");
const pool = require("../config/db");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


// Razorpay Order
const createOrder = async (req, res) => {
  try {
    const { paintingId } = req.body;

    const result = await pool.query(
      "SELECT * FROM paintings WHERE id = $1",
      [paintingId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Painting not found" });
    }

    const painting = result.rows[0];

    if (painting.is_sold) {
      return res.status(400).json({ message: "Painting already sold" });
    }

    const options = {
      amount: painting.price * 100,
      currency: "INR",
      receipt: `receipt_${paintingId}`,
    };

    const order = await razorpay.orders.create(options);

    res.json({
      orderId: order.id,
      key: process.env.RAZORPAY_KEY_ID,
      amount: order.amount,
    });

  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ message: "Error creating order" });
  }
};


// Verify Payment
const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      paintingId,
      full_name,
      email,
      phone,
      address,
      city,
      state,
      pincode,
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ message: "Invalid signature" });
    }

    // Double safety check
    const checkSold = await pool.query(
      "SELECT is_sold FROM paintings WHERE id = $1",
      [paintingId]
    );

    if (checkSold.rows[0].is_sold) {
      return res.status(400).json({ message: "Painting already sold" });
    }

    // Insert Order
    const orderResult = await pool.query(
      `INSERT INTO orders
       (painting_id, total_amount, full_name, email, phone, address, city, state, pincode, payment_status)
       VALUES ($1,
              (SELECT price FROM paintings WHERE id = $1),
              $2,$3,$4,$5,$6,$7,$8,'paid')
       RETURNING *`,
      [paintingId, full_name, email, phone, address, city, state, pincode]
    );

    // Mark Painting Sold
    await pool.query(
      "UPDATE paintings SET is_sold = true WHERE id = $1",
      [paintingId]
    );

    res.json({ success: true, order: orderResult.rows[0] });

  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ message: "Payment verification failed" });
  }
};

module.exports = { createOrder, verifyPayment };