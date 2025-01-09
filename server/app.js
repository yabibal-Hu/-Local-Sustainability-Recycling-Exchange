const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger.json");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve Swagger Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Import Routes
const userRoutes = require("./routes/userRoutes");
const itemRoutes = require("./routes/itemRoutes");

// Import Error Handling Middleware
const errorHandler = require("./middleware/errorHandler");

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the API. Access Swagger docs at /api-docs.");
});

// Use Routes
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
);
