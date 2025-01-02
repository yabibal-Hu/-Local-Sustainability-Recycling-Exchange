const express = require("express");
const {
  getItems,
  createItem,
  getItemById,
  deleteItem,
} = require("../controllers/itemController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(getItems) // Fetch all items
  .post(protect, createItem); // Create a new item (protected)

router
  .route("/:id")
  .get(getItemById) // Fetch item by ID
  .delete(protect, deleteItem); // Delete item (protected)

module.exports = router;
