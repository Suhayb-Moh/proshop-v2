import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import products from "./data/products.js";
const port = process.env.PORT || 5000;

connectDB(); // connect to database

const app = express();

app.get("/", (req, res) => {
  res.send("API is Running...");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.send(product);
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});