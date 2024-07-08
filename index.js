const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple route for the home page
app.get("/", (req, res) => {
  res.send("Welcome to My E-commerce App!");
});

// Sample product route
app.get("/products", (req, res) => {
  // Normally you would fetch products from a database
  const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
    { id: 3, name: "Product C", price: 300 },
  ];
  res.json(products);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
