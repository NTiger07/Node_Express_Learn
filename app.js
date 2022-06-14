const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"))
app.use(express.json())

app.use(express.urlencoded({ extended: false })) //to parse form data
app.get("/api/people", (req, res) => {
  res.status(200).json(people);
});
app.post("/login", (req, res) => {
  const { name } = req.body
  if (name) {
    res.status(200).send(person.name)
  }
  if (!name) {
    res.status(401).send("Please provide credentials")
  }
})
app.post("/api/people", (req, res) => {
  const { name } = req.body
  if (name) {
    res.status(201).send(name)
  }
  if (!name) {
    res.status(400).send("Please provide name value")
  }
  // res.status(201).send("Success")
})
app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
