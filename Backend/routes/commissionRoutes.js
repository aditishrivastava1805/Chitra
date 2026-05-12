const express = require("express");
const router = express.Router();
const pool = require("../config/db");

/* TEST GET ROUTE */
router.get("/", async (req, res) => {
try {
const result = await pool.query("SELECT * FROM commissions ORDER BY created_at DESC");
res.json(result.rows);
} catch (err) {
console.error("Error fetching commissions:", err);
res.status(500).json({ error: "Database error" });
}
});

/* CREATE COMMISSION (POST) */
router.post("/", async (req, res) => {
try {
const { name, email, phone, description, budget } = req.body;

```
const result = await pool.query(
  "INSERT INTO commissions (name,email,phone,description,budget,status) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
  [name, email, phone, description, budget || null, "pending"]
);

res.json(result.rows[0]);
```

} catch (err) {
console.error("Error creating commission:", err);
res.status(500).json({ error: "Insert error" });
}
});

module.exports = router;
