const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_WEEK = ONE_DAY * 7;
const ONE_MONTH = ONE_DAY * 30;
const ONE_YEAR = ONE_DAY * 365;

const getTimeValues = timeSince => {
    const timeNow = new Date();

    timeSince.setHours(timeNow.getHours());
    timeSince.setMinutes(timeNow.getMinutes());
    timeSince.setSeconds(timeNow.getSeconds());
    timeSince.setMilliseconds(timeNow.getMilliseconds());

    const timeDiff = timeNow.getTime() - timeSince.getTime();

    return { timeNow, timeDiff };
}

/**
 * Get the time difference in milliseconds.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns 
 */
const getTimeDiff = (timeNow, timeSince) => timeNow.getTime() - timeSince.getTime();

const outputUnits = {
    "year": {
        "title": "year",
        "calculate": (timeNow, timeSince) => {
            const prevTimeNow = new Date(timeNow);
            prevTimeNow.setFullYear(timeSince.getFullYear());

            let totalYears = timeNow.getFullYear() - timeSince.getFullYear();

            if (timeSince > prevTimeNow) {
                totalYears--;
            }

            return totalYears;
        }
    },
    "month": {
        "title": "month",
        "calculate": (timeNow, timeSince) => {
            const prevTimeNow = new Date(timeNow);
            prevTimeNow.setFullYear(timeSince.getFullYear());
            prevTimeNow.setMonth(timeSince.getMonth());

            let totalMonths = (timeNow.getMonth() - timeSince.getMonth())
                    + (timeNow.getFullYear() - timeSince.getFullYear()) * 12;
            
            if (timeSince > prevTimeNow) {
                totalMonths--;
            }

            return totalMonths;
        }
    },
    "week": {
        "title": "week",
        "calculate": (timeNow, timeSince) => {
            const prevTimeNow = new Date(timeNow);
            prevTimeNow.setFullYear(timeSince.getFullYear());
            prevTimeNow.setMonth(timeSince.getMonth());
            prevTimeNow.setDate(timeSince.getDate());

            const timeDiff = getTimeDiff(timeNow, timeSince);

            return parseInt(timeDiff / (ONE_DAY * 7));
        }
    },
    "day": {
        "title": "day",
        "calculate": (timeNow, timeSince) => {
            const timeDiff = getTimeDiff(timeNow, timeSince);

            return parseInt(timeDiff / ONE_DAY);
        }
    },
    "hour": {
        "title": "hour",
        "calculate": (timeNow, timeSince) => {
            const timeDiff = getTimeDiff(timeNow, timeSince);

            return parseInt(timeDiff / ONE_HOUR);
        }
    },
    "minute": {
        "title": "minute",
        "calculate": timeSince => {
            const { timeDiff } = getTimeValues(timeSince);

            return parseInt(timeDiff / ONE_MINUTE);
        }
    },
    "second": {
        "title": "second",
        "calculate": timeSince => {
            const { timeDiff } = getTimeValues(timeSince);

            return parseInt(timeDiff / ONE_SECOND);
        }
    }
};

/**
 * Calculate the time since a specific date.
 * 
 * @param {Date} timeSince
 * @param {string} outputUnit
 */
const calculateTimeSince = (timeSinceStr, outputUnit) => {
    const timeSince = new Date(timeSinceStr);
    const timeNow = new Date();

    if (timeSince > timeNow) {
        console.error("Time Since is more than Time Now.");
        process.exit();
    }

    const outputUnitProps = outputUnits[outputUnit];

    return outputUnitProps.calculate(timeNow, timeSince);
};

module.exports = calculateTimeSince;
