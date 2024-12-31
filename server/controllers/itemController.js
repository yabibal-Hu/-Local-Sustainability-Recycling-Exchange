const Item = require("../models/Item");

// Get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find().populate("owner", "name email"); // Fetch all items with owner details
    res.status(200).json(items);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to retrieve items", error: error.message });
  }
};

// Create a new item
const createItem = async (req, res) => {
  const { title, description, category, location, condition } = req.body;

  if (!title || !description || !category || !location || !condition) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const item = await Item.create({
      title,
      description,
      category,
      location,
      condition,
      owner: req.user._id, // Authenticated user from `authMiddleware`
    });

    res.status(201).json(item); // Respond with the created item
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create item", error: error.message });
  }
};

// Get item by ID
const getItemById = async (req, res) => {
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
};
//delete an item by id
const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Check if the authenticated user is the owner of the item
    if (item.owner.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this item" });
    }

    // Use findByIdAndDelete to delete the item
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete item", error: error.message });
  }
};

module.exports = { getItems, createItem, getItemById, deleteItem };
