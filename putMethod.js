const express = require("express");
const app = express();
let { people } = require("./data");

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