const calculateTimeSince = require("./calculateTimeSince");
const acceptabletoUnitValues = [
    "year",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "decade",
    "combined"
];

/**
 * Calculate time since from command line arguments
 * 
 * @param {Array<string} cmdLineArgs 
 */
const processCmdLineArgs = (cmdLineArgs) => {
    const dateRegExp = new RegExp(/\d\d\d\d-\d\d-\d\d/, "g");

    const dateStr = cmdLineArgs.find(item => dateRegExp.exec(item));
    
    
    console.log(calculateTimeSince("1990-01-01T10:53:00.000Z", "combined"));
};

module.exports = processCmdLineArgs;
