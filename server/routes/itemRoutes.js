const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware"); // Middleware for image upload
const {
  getItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
  claimItem,
} = require("../controllers/itemController"); // Ensure these are correctly exported

const router = express.Router();

// Routes
router
  .route("/")
  .get(getItems) // Public: Fetch all items
  .post(protect, upload.single("image"), createItem); // Private: Create an item

router
  .route("/:id")
  .get(getItemById) // Public: Fetch item by ID
  .put(protect, upload.single("image"), updateItem) // Private: Update an item
  .delete(protect, deleteItem); // Private: Delete an item

router.put("/:id/claim", protect, claimItem); // Private: Mark item as claimed


module.exports = router;
