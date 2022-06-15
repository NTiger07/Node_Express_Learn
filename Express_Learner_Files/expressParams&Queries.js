const express = require("express");
const app = express();
const { products } = require("../data");

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1> \n <a href="/api/products">Products</a>`);
  res.end();
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((item) => {
    const { id, name, image } = item;
    return { id, name, image };
  });
  res.json(newProducts);
  res.end();
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product doesn't exist");
  }
  res.end();
  return res.json(singleProduct);
});
pp.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ status: successful }, { data: [] });
  }
  res.status(200).json(sortedProducts);
  res.end();
});

app.all("*", (req, res) => {
  res.status(404).send("Error 404, Page not found on our server");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
