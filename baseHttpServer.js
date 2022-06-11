const http = require("http");
const { readFileSync } = require("fs");

const html = readFileSync("./testimonial/index.html");
const css = readFileSync("./testimonial/styles.css");
const javascript = readFileSync("./testimonial/browser-app.js");
const arrowLeft = readFileSync("./testimonial/arrow-left.svg");
const arrowRight = readFileSync("./testimonial/arrow-right.svg");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(html);
    res.end();
  } else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(css);
    res.end();
  } else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(javascript);
    res.end();
  } else if (url === "/arrow-left.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(arrowLeft);
    res.end();
  } else if (url === "/arrow-right.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(arrowRight);
    res.end();
  } else if (url === "/Layer 2.png") {
    res.writeHead(200, { "content-type": "image/png" });
    res.write(logo);
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>About Us</h1>`);
    res.end();
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(`<h1>Oops!! This page doesn't exist</h1>`);
    res.write(`<a href="/">Go back to home page</a>`);
    res.end();
  }
});

server.listen(3000);
