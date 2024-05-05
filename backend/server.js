import express from "express";
import products from "./data/products.js";
const port = 8000;

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
  console.log(`Example app listening at http://localhost:${port}`);
});
