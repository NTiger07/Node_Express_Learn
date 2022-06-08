const { writeFileSync } = require("fs");

for (let i = 0; i < 200; i++) {
  writeFileSync("../big-file.txt", `Hello world ${i} \n`, { flag: "a" });
}
