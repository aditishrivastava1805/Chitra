const express = require("express");
const router = express.Router();

const {
  getAllPaintings,
  getPaintingById,
  createOrder,
  createCommission,
} = require("../controllers/paintingController");

router.get("/", getAllPaintings);
router.get("/:id", getPaintingById);

router.post("/order", createOrder);
router.post("/commission", createCommission);

module.exports = router;