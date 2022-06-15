const express = require("express");
const logger = require("./logger");
const authorize = require("./authorize");
const app = express();

// req => middleware => res
app.use("/", [logger, authorize]);
app.get("/", (req, res) => {
  res.send("<h1>Hello World, we're baaaaaaaaaaaaaack!!!</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1>We are the reason Santa is not real cos we exed him!!</h1>");
  res.end();
});
app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("<h1>We are the reason Santa is not real cos we exed him!!</h1>");
  res.end();
});
app.get("/api/products", (req, res) => {
  res.send("<h1>We are the reason Santa is not real cos we exed him!!</h1>");
  res.end();
});

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
