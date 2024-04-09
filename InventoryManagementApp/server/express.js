const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/UserRoute");
const authRoutes = require("./routes/AuthRouter");
const inventoryRoutes = require("./routes/InventoryRouter");
const multer = require("multer");
const path = require("path");

const app = express();
const CURRENT_WORKING_DIR = process.cwd();

app.get("/", (req, res) => {
  res.status(200).send("Welcome ");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to handle file uploads
//app.use(upload.single('csv')); // 'csv' should match the name attribute in the file input of your form

app.use(bodyParser.json());

app.use(cors());

// Mount user routes
app.use("/api/users", userRoutes);

// Mount Auth routes
app.use("/api/auth", authRoutes);

// Mount inventory routes
app.use("/api/inventory", inventoryRoutes);

app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist/app")));

module.exports = app;
