const path = require("path");

const filePath = path.join("01-node-tutorial", "content", "test.txt");
const base = path.basename(filePath);
const resolve = path.resolve(
  __dirname,
  "01-node-tutorial",
  "content",
  "test.txt"
);

console.log(base);
console.log(__dirname);
console.log(resolve);
