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
})
app.put("/api/people/:id", (req, res) => {
  const { id } = req.params
  const { name } = req.body
  const singlePerson = people.find((person) => person.id === Number(id))
  if (!singlePerson) {
    return res.status(404).json("Person doesn't exist");
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json(newPeople)
})

app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
