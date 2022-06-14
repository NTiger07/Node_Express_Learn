const express = require("express");
const app = express();
let { people } = require("./data");

app.delete("/api/people/:id", (req, res) => {
    const singlePerson = people.find((person) => person.id === Number(req.params.id))
    if (!singlePerson) {
        return res.status(404).json("Person doesn't exist");
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json(newPeople)
})

app.listen(5000, () => {
    console.log("Server listening on port 5000...");
});
