// const pool = require("../config/db");


// // ==============================
// // GET ALL UNSOLD PAINTINGS
// // ==============================
// const getAllPaintings = async (req, res) => {
//   try {
//     const result = await pool.query(
//       "SELECT * FROM paintings WHERE sold = false ORDER BY created_at DESC"
//     );

//     res.json(result.rows);
//   } catch (error) {
//     console.error("Error fetching paintings:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// // ==============================
// // GET SINGLE PAINTING BY ID
// // ==============================
// const getPaintingById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await pool.query(
//       "SELECT * FROM paintings WHERE id = $1",
//       [id]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Painting not found" });
//     }

//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error("Error fetching painting:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// // ==============================
// // CREATE ORDER + MARK SOLD
// // ==============================
// const createOrder = async (req, res) => {
//   const client = await pool.connect();

//   try {
//     const { painting_id, name, email, amount } = req.body;

//     await client.query("BEGIN");

//     // 1️⃣ Check if painting already sold
//     const check = await client.query(
//       "SELECT sold FROM paintings WHERE id = $1",
//       [painting_id]
//     );

//     if (check.rows.length === 0) {
//       await client.query("ROLLBACK");
//       return res.status(404).json({ message: "Painting not found" });
//     }

//     if (check.rows[0].sold === true) {
//       await client.query("ROLLBACK");
//       return res.status(400).json({ message: "Painting already sold" });
//     }

//     // 2️⃣ Insert order
//     await client.query(
//       `INSERT INTO orders (painting_id, customer_name, customer_email, amount)
//        VALUES ($1, $2, $3, $4)`,
//       [painting_id, name, email, amount]
//     );

//     // 3️⃣ Mark painting as sold
//     await client.query(
//       "UPDATE paintings SET sold = true WHERE id = $1",
//       [painting_id]
//     );

//     await client.query("COMMIT");

//     res.json({ message: "Order created successfully" });

//   } catch (error) {
//     await client.query("ROLLBACK");
//     console.error("Order error:", error);
//     res.status(500).json({ message: "Server error" });
//   } finally {
//     client.release();
//   }
// };


// // ==============================
// // SAVE COMMISSION REQUEST
// // ==============================
// const createCommission = async (req, res) => {
//   try {
//     const { name, email, phone, description, budget } = req.body;

//     await pool.query(
//       `INSERT INTO commissions (name, email, phone, description, budget)
//        VALUES ($1, $2, $3, $4, $5)`,
//       [name, email, phone, description, budget]
//     );

//     res.json({ message: "Commission submitted successfully" });

//   } catch (error) {
//     console.error("Commission error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// module.exports = {
//   getAllPaintings,
//   getPaintingById,
//   createOrder,
//   createCommission,
// };
const pool = require("../config/db");

// ==============================
// GET ALL UNSOLD PAINTINGS
// ==============================
// const getAllPaintings = async (req, res) => {
//   try {
//     const result = await pool.query(
//       `SELECT 
//         id,
//         title,
//         description,
//         price,
//         medium,
//         image_url,
//         sold AS is_sold,
//         created_at
//        FROM paintings
//        WHERE sold = false
//        ORDER BY created_at DESC`
//     );

//     res.json(result.rows);
//   } catch (error) {
//     console.error("Error fetching paintings:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
const getAllPaintings = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT 
        id,
        title,
        description,
        price,
        medium,
        dimensions,
        image_url,
        is_sold,
        primary_color,
        secondary_color,
        accent_color,
        background_color,
        text_color,
        year,
        created_at
       FROM paintings
       WHERE is_sold = false
       ORDER BY created_at DESC`
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching paintings:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// ==============================
// GET SINGLE PAINTING BY ID
// ==============================
// const getPaintingById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await pool.query(
//   `SELECT 
//     id,
//     title,
//     description,
//     price,
//     medium,
//     is_sold
//    FROM paintings
//    WHERE sold = false`
// );

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Painting not found" });
//     }

//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error("Error fetching painting:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
const getPaintingById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `SELECT *
       FROM paintings
       WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Painting not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching painting:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// ==============================
// CREATE ORDER + MARK SOLD
// ==============================
const createOrder = async (req, res) => {
  const client = await pool.connect();

  try {
    const { painting_id, name, email, amount } = req.body;

    await client.query("BEGIN");

    const check = await client.query(
      "SELECT sold FROM paintings WHERE id = $1",
      [painting_id]
    );

    if (check.rows.length === 0) {
      await client.query("ROLLBACK");
      return res.status(404).json({ message: "Painting not found" });
    }

    if (check.rows[0].sold === true) {
      await client.query("ROLLBACK");
      return res.status(400).json({ message: "Painting already sold" });
    }

    await client.query(
      `INSERT INTO orders (painting_id, customer_name, customer_email, amount)
       VALUES ($1, $2, $3, $4)`,
      [painting_id, name, email, amount]
    );

    await client.query(
      "UPDATE paintings SET sold = true WHERE id = $1",
      [painting_id]
    );

    await client.query("COMMIT");

    res.json({ message: "Order created successfully" });
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Order error:", error);
    res.status(500).json({ message: "Server error" });
  } finally {
    client.release();
  }
};

// ==============================
// SAVE COMMISSION REQUEST
// ==============================
const createCommission = async (req, res) => {
  try {
    const { name, email, phone, description, budget } = req.body;

    await pool.query(
      `INSERT INTO commissions (name, email, phone, description, budget)
       VALUES ($1, $2, $3, $4, $5)`,
      [name, email, phone, description, budget]
    );

    res.json({ message: "Commission submitted successfully" });
  } catch (error) {
    console.error("Commission error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllPaintings,
  getPaintingById,
  createOrder,
  createCommission,
};