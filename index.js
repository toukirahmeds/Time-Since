const calculateTimeSince = require("./calculateTimeSince");

const timeNow = new Date();
const timeSince = new Date("1990-10-01");
timeSince.setHours(timeNow.getHours());
timeSince.setMinutes(timeNow.getMinutes());

console.log(calculateTimeSince(timeSince, "minute"));
