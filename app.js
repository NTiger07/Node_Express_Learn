const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"))

app.use(express.urlencoded({ extended: false })) //to parse form data
app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});
app.post("/login", (req, res) => {
  const { name } = req.body
  if (name) {
    res.status(200).send(`Welcome ${name}`)
  }
  if (!name) {
    res.status(401).send("Please provide credentials")
  }
})
app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
