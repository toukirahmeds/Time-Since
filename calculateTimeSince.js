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

const outputUnits = {
    "year": {
        "title": "year",
        "calculate": calculateYears
    },
    "month": {
        "title": "month",
        "calculate": calculateMonths
    },
    "week": {
        "title": "week",
        "calculate": calculateWeeks
    },
    "day": {
        "title": "day",
        "calculate": calculateDays
    },
    "hour": {
        "title": "hour",
        "calculate": calculateHours
    },
    "minute": {
        "title": "minute",
        "calculate": calculateMinutes
    },
    "second": {
        "title": "second",
        "calculate": calculateSeconds
    },
    "decade": {
        "title": "decade",
        "calculate": calculateDecades
    },
    "combined": {
        "title": "combined",
        "calculate": calculateCombined
    }
};

/**
 * Calculate the time since a specific date.
 * 
 * @param {string} dateTimeSinceStr
 * @param {string} outputUnit
 */
const calculateTimeSince = (dateTimeSinceStr, outputUnit) => {
    const timeSince = new Date(dateTimeSinceStr);

    if (isNaN(timeSince.getTime())) {
        printManualAndExit();
    }

    const timeNow = new Date();

    if (timeSince > timeNow) {
        console.error("Time Since is more than Time Now.");
        process.exit();
    }

    const outputUnitProps = outputUnits[outputUnit];

    return outputUnitProps.calculate(timeNow, timeSince);
};

module.exports = calculateTimeSince;
