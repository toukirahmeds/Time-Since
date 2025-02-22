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
            const prevYearDate = new Date(timeNow);
            prevYearDate.setFullYear(timeNow.getFullYear() - 1);

            while (currentDate <= prevYearDate) {
                totalYears++;
                currentDate.setFullYear(currentDate.getFullYear() + 1);
            }

            return totalYears;
        }
    },
    "month": {
        "title": "month",
        "calculate": (timeNow, timeSince) => {
            let totalMonths = 0;
            let currentDate = timeSince;

            const prevMonthDate = new Date(timeNow);
            prevMonthDate.setMonth(timeNow.getMonth() - 1);

            while (currentDate <= prevMonthDate) {
                totalMonths++;
                currentDate.setMonth(currentDate.getMonth() + 1);
            }

            return totalMonths
        }
    },
    "week": {
        "title": "week",
        "calculate": (timeNow, timeSince) => {
            let totalWeeks = 0;
            let currentDate = timeSince;
            const prevWeekDate = new Date(timeNow);
            prevWeekDate.setDate(timeNow.getDate() - 7);

            while (currentDate <= prevWeekDate) {
                totalWeeks++;
                currentDate.setDate(currentDate.getDate() + 7);
            }
            
            return totalWeeks;
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
