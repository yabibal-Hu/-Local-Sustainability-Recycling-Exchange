const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String, // URL or file path of the image
      required: true,
    },
    category: {
      type: String,
      enum: ["Electronics", "Furniture", "Clothing", "Books", "Other"],
      required: true,
    },

    price: {
      type: Number,
      default: 0,
    },
    condition: {
      type: String,
      enum: ["New", "Used", "Good", "Fair", "Poor"],
      required: true,
    },
    distance: {
      type: Number, // in miles or kilometers
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isClaimed: {
      type: Boolean,
      default: false, // Tracks whether the item is claimed
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
