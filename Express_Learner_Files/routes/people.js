const express = require('express')
const router = express.Router()
let { people } = require(".../data");


router.get("/", (req, res) => {
    res.status(200).json(people);
});
router.post("/", (req, res) => {
    const { name } = req.body
    if (name) {
        res.status(201).send(name)
    }
    if (!name) {
        res.status(400).send("Please provide name value")
    }
})
router.put("/:id", (req, res) => {
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
router.delete("/:id", (req, res) => {
    const singlePerson = people.find((person) => person.id === Number(req.params.id))
    if (!singlePerson) {
        return res.status(404).json("Person doesn't exist");
    }
    const newPeople = people.filter(
        (person) => person.id !== Number(req.params.id)
    )
    return res.status(200).json(newPeople)
})

module.exports = router