const os = require("os");

const systemInfo = {
  "System OS": os.type(),
  "System release": os.release(),
  "System Total Memory": os.totalmem(),
  "System Available Memory": os.freemem(),
  "System CPUS": os.cpus(),
  "System User Info": os.userInfo(),
};

console.log(systemInfo);
