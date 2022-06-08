const EventEmitter = require("events");

const customEmmiter = new EventEmitter();

customEmmiter.on("response", () => {
  console.log("Response Sent");
});

customEmmiter.emit("response");
