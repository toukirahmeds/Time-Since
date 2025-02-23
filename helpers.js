const {
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY
} = require("./constants");

/**
 * Get the time difference in milliseconds.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns 
 */
const getTimeDiff = (timeNow, timeSince) => timeNow.getTime() - timeSince.getTime();

/**
 * Calculate the number of years since a specific time.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {number}
 */
const calculateYears = (timeNow, timeSince) => {
    const prevTimeNow = new Date(timeNow);
    prevTimeNow.setFullYear(timeSince.getFullYear());

    let totalYears = timeNow.getFullYear() - timeSince.getFullYear();

    if (timeSince > prevTimeNow) {
        totalYears--;
    }

    return totalYears;
};

/**
 * Calculate the number of months since a specific date.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {number}
 */
const calculateMonths = (timeNow, timeSince) => {
    const prevTimeNow = new Date(timeNow);
    prevTimeNow.setFullYear(timeSince.getFullYear());
    prevTimeNow.setMonth(timeSince.getMonth());

    let totalMonths = (timeNow.getMonth() - timeSince.getMonth())
        + (timeNow.getFullYear() - timeSince.getFullYear()) * 12;

    if (timeSince > prevTimeNow) {
        totalMonths--;
    }

    return totalMonths;
};

/**
 * Calculate the number of weeks since a specific date.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {number}
 */
const calculateWeeks = (timeNow, timeSince) => {
    const prevTimeNow = new Date(timeNow);
    prevTimeNow.setFullYear(timeSince.getFullYear());
    prevTimeNow.setMonth(timeSince.getMonth());
    prevTimeNow.setDate(timeSince.getDate());

    const timeDiff = getTimeDiff(timeNow, timeSince);

    return parseInt(timeDiff / (ONE_DAY * 7));
};

/**
 * Calculate the number of days since a specific date.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {number}
 */
const calculateDays = (timeNow, timeSince) => {
    const timeDiff = getTimeDiff(timeNow, timeSince);

    return parseInt(timeDiff / ONE_DAY);
};

/**
 * Calculate the number of hours since a specific date.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {number}
 */
const calculateHours = (timeNow, timeSince) => {
    const timeDiff = getTimeDiff(timeNow, timeSince);

    return parseInt(timeDiff / ONE_HOUR);
};

/**
 * Calculate the number of months since a specific date.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {number}
 */
const calculateMinutes = (timeNow, timeSince) => {
    const timeDiff = getTimeDiff(timeNow, timeSince);

    return parseInt(timeDiff / ONE_MINUTE);
};

/**
 * Calculate the number of seconds since a specific date.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {number}
 */
const calculateSeconds = (timeNow, timeSince) => {
    const timeDiff = getTimeDiff(timeNow, timeSince);

    return parseInt(timeDiff / ONE_SECOND);
};

/**
 * Calculate the number of decades since a specific date.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {number}
 */
const calculateDecades = (timeNow, timeSince) => {
    const totalYears = calculateYears(timeNow, timeSince);

    return parseInt(totalYears / 10);
}

module.exports = {
    getTimeDiff,
    calculateYears,
    calculateMonths,
    calculateWeeks,
    calculateDays,
    calculateHours,
    calculateMinutes,
    calculateSeconds,
    calculateDecades
};
