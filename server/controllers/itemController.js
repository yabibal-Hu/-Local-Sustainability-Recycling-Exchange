const asyncHandler = require("express-async-handler");
const Item = require("../models/Item");

// @desc Get all items
// @route GET /api/items
// @access Public
const getItems = asyncHandler(async (req, res) => {
  try {
    const { category, distance, condition, featured } = req.query;

    const query = {};
    if (category) query.category = category.trim(); // Sanitize category input
    if (distance) query.distance = { $lte: Number(distance) }; // Filter by max distance
    if (condition) query.condition = condition.trim(); // Sanitize condition input
    if (featured) query.featured = featured === "true";
    const items = await Item.find(query).populate("owner", "name email");
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve items", error: error.message });
  }
});

// @desc Create a new item
// @route POST /api/items
// @access Private
const createItem = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      price,
      condition,
      distance,
      featured,
    } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    // Sanitize and validate inputs
    const sanitizedCategory = category.trim();
    const sanitizedCondition = condition.trim();

    const allowedCategories = [
      "Electronics",
      "Furniture",
      "Clothing",
      "Books",
      "Other",
    ];
    const allowedConditions = ["New", "Used", "Good", "Fair", "Poor"];

    if (!allowedCategories.includes(sanitizedCategory)) {
      return res
        .status(400)
        .json({ message: `Invalid category: ${sanitizedCategory}` });
    }

    if (!allowedConditions.includes(sanitizedCondition)) {
      return res
        .status(400)
        .json({ message: `Invalid condition: ${sanitizedCondition}` });
    }

    const newItem = await Item.create({
      name,
      description,
      image: `/uploads/${req.file.filename}`, // File path from multer
      category: sanitizedCategory,
      price,
      condition: sanitizedCondition,
      distance,
      featured: featured === "true", // Convert string to Boolean
      owner: req.user._id, // Authenticated user as owner
    });

    res.status(201).json(newItem);

  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create item", error: error.message });
  }
});

// @desc Get item by ID
// @route GET /api/items/:id
// @access Public
const getItemById = asyncHandler(async (req, res) => {

// Get item by ID
  try {
    const item = await Item.findById(req.params.id).populate(
      "owner",
      "name email"
    );

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve item", error: error.message });
  }
});

// @desc Update an item
// @route PUT /api/items/:id
// @access Private
const updateItem = asyncHandler(async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (item.owner.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this item" });
    }

    // Sanitize inputs
    const sanitizedCategory = req.body.category?.trim() || item.category;
    const sanitizedCondition = req.body.condition?.trim() || item.condition;

    const allowedCategories = [
      "Electronics",
      "Furniture",
      "Clothing",
      "Books",
      "Other",
    ];
    const allowedConditions = ["New", "Used", "Good", "Fair", "Poor"];

    if (req.body.category && !allowedCategories.includes(sanitizedCategory)) {
      return res
        .status(400)
        .json({ message: `Invalid category: ${sanitizedCategory}` });
    }

    if (req.body.condition && !allowedConditions.includes(sanitizedCondition)) {
      return res
        .status(400)
        .json({ message: `Invalid condition: ${sanitizedCondition}` });
    }

    // Update fields
    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    item.category = sanitizedCategory;
    item.price = req.body.price || item.price;
    item.condition = sanitizedCondition;
    item.distance = req.body.distance || item.distance;
    item.featured = req.body.featured || item.featured;

    if (req.file) {
      item.image = `/uploads/${req.file.filename}`;
    }

    const updatedItem = await item.save();

    res.status(200).json(updatedItem);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update item", error: error.message });
  }
});

// @desc Delete an item
// @route DELETE /api/items/:id
// @access Private
const deleteItem = asyncHandler(async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }


    if (item.owner.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this item" });
    }

    await item.remove();
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete item", error: error.message });
  }
});

// @desc Mark an item as claimed
// @route PUT /api/items/:id/claim
// @access Private
const claimItem = asyncHandler(async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (item.isClaimed) {
      return res.status(400).json({ message: "Item already claimed" });
    }

    item.isClaimed = true;
    await item.save();

    res.status(200).json({ message: "Item marked as claimed", item });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to claim item", error: error.message });
  }
});

module.exports = {
  getItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
  claimItem,
};

