const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile(
      "./01-node-tutorial/content/first.txt",
      "utf-8"
    );
    const second = await readFile(
      "./01-node-tutorial/content/second.txt",
      "utf-8"
    );
    await writeFile(
      "./test.js",
      `This is a combination of ${first} and ${second}`,
      { flag: "a" }
    );
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
};

start();
