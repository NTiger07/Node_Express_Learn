const express = require("express");
const app = express();

app.post("/login", (req, res) => {
    const { name } = req.body
    if (name) {
        res.status(200).send(person.name)
    }
    if (!name) {
        res.status(401).send("Please provide credentials")
    }
})

app.listen(5000, () => {
    console.log("Server listening on port 5000...");
});