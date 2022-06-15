const express = require("express");
const app = express();
const people = require(".Express_Learner_Files/routes/people")
const auth = require(".Express_Learner_Files/routes/auth")
app.use(express.static(".Express_Learner_Files/methods-public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false })) //to parse form data
app.use("/api/people", people)
app.use("/login", auth)




app.listen(5000, () => {
  console.log("Server listening on port 5000...");
});
