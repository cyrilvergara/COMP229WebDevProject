const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

var CONNECTION_STRING =
  "mongodb+srv://vergaraxy:fx76jzAzN43wz58i@cluster0.wwang1a.mongodb.net/inventoryapp?retryWrites=true&w=majority&appName=Cluster0";
var DATABASE_NAME = "inventoryapp";
var database;

app.get("/api/products", (req, res) => {
  const nameQuery = req.query.name;
  if (nameQuery) {
    database.collection("products")
      .find({ "name": { $regex: nameQuery, $options: 'i' } })
      .toArray((err, result) => {
        if (err) {
          console.error("Error fetching products:", err);
          res.status(500).send("Internal Server Error");
          return;
        }
        res.send(result);
      });
  } else {
    database.collection("products")
      .find({})
      .toArray((err, result) => {
        if (err) {
          console.error("Error fetching products:", err);
          res.status(500).send("Internal Server Error");
          return;
        }
        res.send(result);
      });
  }
});

app.get("/api/products/:id", (req, res) => {
  const userId = req.params.id;
  database.collection("products")
    .findOne({ "_id": ObjectId(userId) }, (err, result) => {
      if (err) {
        console.error("Error fetching user:", err);
        res.status(500).send("Internal Server Error");
        return;
      }
      res.send(result);
    });
});

app.post("/api/products", (req, res) => {
  const newUser = req.body;
  database.collection("products").insertOne(newUser, (err, result) => {
    if (err) {
      console.error("Error adding new user:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.status(201).json({ message: "User added successfully", userId: result.insertedId });
  });
});

app.put("/api/products/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  database.collection("products").updateOne({ "_id": ObjectId(userId) }, { $set: updatedUser }, (err, result) => {
    if (err) {
      console.error("Error updating user:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json({ message: "User updated successfully", userId: userId });
  });
});

app.delete("/api/products/:id", (req, res) => {
  const userId = req.params.id;
  database.collection("products").deleteOne({ "_id": ObjectId(userId) }, (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.json({ message: "User deleted successfully", userId: userId });
  });
});

// app.delete("/api/products", (req, res) => {
//   database.collection("products").deleteMany({}, (err, result) => {
//     if (err) {
//       console.error("Error deleting all products:", err);
//       res.status(500).send("Internal Server Error");
//       return;
//     }
//     res.json({ message: "All products deleted successfully" });
//   });
// });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Inventory Management App." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  MongoClient.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }

    database = client.db(DATABASE_NAME);
    console.log("Connected to the database");

    console.log(`Server is listening on port ${PORT}`);
  });
});