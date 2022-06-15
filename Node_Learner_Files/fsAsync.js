const { readFile, writeFile } = require("fs");

console.log("Start first task");

readFile("./01-node-tutorial/content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  const first = result;
  readFile("./01-node-tutorial/content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    const second = result;
    writeFile(
      "../result-async.txt",
      `Here is a combination of ${first} and ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with first task");
      }
    );
  });
});

console.log("Starting next task");
