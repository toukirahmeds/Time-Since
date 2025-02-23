const processCmdLineArgs = require("./processCmdLineArgs");

// const calculateTimeSince = require("./calculateTimeSince");

const timeNow = new Date();
const timeSince = new Date("1990-01-01");
timeSince.setHours(timeNow.getHours());
timeSince.setMinutes(timeNow.getMinutes());

console.log(timeSince);

const cmdLineArgs = process.argv.slice(2, 4);

const main = async () => {
    if (cmdLineArgs.length > 0) {
        processCmdLineArgs(cmdLineArgs);
    }
};

main();
