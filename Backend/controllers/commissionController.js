const pool = require("../config/db");

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
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createCommission };