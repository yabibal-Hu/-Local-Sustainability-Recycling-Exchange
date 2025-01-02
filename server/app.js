const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();
app.use(express.json());

// Import Routes
const userRoutes = require("./routes/userRoutes");
const itemRoutes = require("./routes/itemRoutes");

// Import Error Handling Middleware
const errorHandler = require("./middleware/errorHandler");

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the API. Use /api/users or /api/items for data.");
});

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
