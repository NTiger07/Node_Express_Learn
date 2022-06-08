const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./01-node-tutorial/content/first.txt", "utf8");
const second = readFileSync("./01-node-tutorial/content/second.txt", "utf8");

console.log(first);
console.log(second);

writeFileSync(
  "./test.html",
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World!!!</h1>
</body>
</html>`,
  { flag: "a" }
);
