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

const outputUnits = {
    "year": {
        "title": "year",
        "calculate": (timeNow, timeSince) => {
            let totalYears = 0;
            let currentDate = timeSince;
            let prevYearDate;

            while (currentDate < timeNow) {
                if (currentDate.getFullYear() === timeNow.getFullYear()) {
                    break;
                }

                prevYearDate = new Date(timeNow)
                prevYearDate.setFullYear(timeNow.getFullYear() - 1);
                
                if (currentDate <= prevYearDate) {
                    totalYears++;
                }

                currentDate.setFullYear(currentDate.getFullYear() + 1);
            }

            return totalYears;
        }
    },
    "month": {
        "title": "month",
        "calculate": timeSince => {
            const { timeNow } = getTimeValues(timeSince);
            
            let totalMonths = 0;

            for (
                let currentYear = timeSince.getFullYear();
                currentYear <= timeNow.getFullYear();
                currentYear++
            ) {
                if (currentYear === timeNow.getFullYear()) {
                    totalMonths += timeNow.getMonth();
                } else if (currentYear === timeSince.getFullYear()) {
                    totalMonths += (12 - timeSince.getMonth());
                } else {
                    totalMonths += 12;
                }
            }

            return totalMonths;
        }
    },
    "week": {
        "title": "week",
        "calculate": timeSince => {
            const { timeDiff } = getTimeValues(timeSince);

            return parseInt(timeDiff / ONE_WEEK);
        }
    },
    "day": {
        "title": "day",
        "calculate": timeSince => {
            const { timeDiff } = getTimeValues(timeSince);

            return parseInt(timeDiff / ONE_DAY);
        }
    },
    "hour": {
        "title": "hour",
        "calculate": timeSince => {
            const { timeDiff } = getTimeValues(timeSince);

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

    const outputUnitProps = outputUnits[outputUnit];

    return outputUnitProps.calculate(timeNow, timeSince);
};

module.exports = calculateTimeSince;
