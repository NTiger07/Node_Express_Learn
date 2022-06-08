const EventEmitter = require("events");

const customEmmiter = new EventEmitter();

customEmmiter.on("response", (name, id) => {
  console.log(`Data received from ${name} with userID: ${id}`);
});

customEmmiter.emit("response", "John", 0001);
