const express = require("express");
const app = express();

app.use(express.static("../public"));

app.get("/about", (req, res) => {
  console.log("User hit the resource");
  res.send(`<h1>About Page</h1>`);
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send(
      `<h1>Resource not found</h1> \n <a href="/">Go back to home page</a>`
    );
});
app.listen(5000, () => {
  console.log(`Server is listening on port 5000...`);
});
