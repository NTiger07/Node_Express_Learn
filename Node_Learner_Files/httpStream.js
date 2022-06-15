const http = require("http");
const { createReadStream } = require("fs");
const server = http.createServer((req, res) => {
  const text = createReadStream("./big-file.txt", "utf8");
  text.on("open", () => {
    text.pipe(res);
  });
  text.on("error", (err) => {
    res.end(err);
  });
});

server.listen(5000);
