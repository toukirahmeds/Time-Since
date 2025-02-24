const {
    calculateYears,
    calculateMonths,
    calculateWeeks,
    calculateDays,
    calculateHours,
    calculateMinutes,
    calculateSeconds,
    calculateDecades,
    calculateCombined,
    printManualAndExit
} = require("./helpers");

const calculateFuncs = {
    "decade": calculateDecades,
    "year": calculateYears,
    "month": calculateMonths,
    "week": calculateWeeks,
    "day": calculateDays,
    "hour": calculateHours,
    "minute": calculateMinutes,
    "second": calculateSeconds,
    "combined": calculateCombined
};

/**
 * Calculate the time since a specific date time.
 * 
 * @param {string} dateTimeSinceStr
 * @param {string} outputUnit
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
 */
const calculateTimeSince = (dateTimeSinceStr, outputUnit) => {
    const timeSince = new Date(dateTimeSinceStr);

    if (isNaN(timeSince.getTime())) {
        printManualAndExit();
    }

    const timeNow = new Date();

    if (timeSince > timeNow) {
        console.error("Time since is more than time now.");
        process.exit();
    }

    const calculateFunc = calculateFuncs[outputUnit];

    return calculateFunc(timeNow, timeSince);
};

module.exports = calculateTimeSince;
