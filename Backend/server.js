require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./config/db");

// Middleware
app.use(cors());
app.use(express.json());

// Test DB Connection
pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Database connected at:", result.rows[0].now);
  }
});

// Routes
const paintingRoutes = require("./routes/paintingRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const commissionRoutes = require("./routes/commissionRoutes");


app.use("/api/paintings", paintingRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/commissions", commissionRoutes);


// Test Route
app.get("/", (req, res) => {
  res.send("Chitra Digital Art Museum Backend Running");
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
