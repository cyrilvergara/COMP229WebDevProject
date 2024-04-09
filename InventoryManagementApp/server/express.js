const express = require("express");
const path = require("path");
const userRoutes = require("./routes/UserRoute");
const authRoutes = require("./routes/AuthRouter");
const inventoryRoutes = require("./routes/InventoryRouter");
const cors = require("cors");

const app = express();
const CURRENT_WORKING_DIR = process.cwd();
const clientDistPath = path.join(CURRENT_WORKING_DIR, 'client', 'dist', 'app');

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Mount API routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);

// Serve static files from the React app build directory
app.use(express.static(clientDistPath));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.resolve(clientDistPath, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
