const {
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
    ACCEPTABLE_UNIT_ARG_VALUES,
    MANUAL_TEXT
} = require("./constants");

/**
 * Get 's' based on singular or plural.
 * 
 * @param {number} count 
 * @returns {string}
 */
const getPluralSingular = (count) => count > 1 ? "s":"";

/**
 * Get the statement for unit.
 * 
 * @param {number} count 
 * @param {string} unit 
 * @returns {string}
 */
const getUnitStatement = (count, unit) => 
    `${count} ${unit}${getPluralSingular(count)}`;

/**
 * Get the updated statement for combined unit statement.
 * 
 * @param {string} statement 
 * @param {number} count 
 * @param {string} unit 
 * @returns {string}
 */
const getUpdatedStatement = (statement, count, unit) => {
    if (count <= 0) {
        return statement;
    }

    let currentStatement = statement;
    currentStatement += currentStatement ? " " : "";
    currentStatement += getUnitStatement(count, unit);

    return currentStatement;
};

/**
 * Get the time difference in milliseconds.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {number}
 */
const getTimeDiff = (timeNow, timeSince) => timeNow.getTime() - timeSince.getTime();

/**
 * Calculate the number of years since a specific date time.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
 */
const calculateYears = (timeNow, timeSince) => {
    const prevTimeNow = new Date(timeNow);
    prevTimeNow.setFullYear(timeSince.getFullYear());

    let totalYears = timeNow.getFullYear() - timeSince.getFullYear();

    if (timeSince > prevTimeNow) {
        totalYears--;
    }

    return {
        count: totalYears,
        statement: getUnitStatement(totalYears, "year")
    };
};

/**
 * Calculate the number of months since a specific date time.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
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

    return {
        count: totalMonths,
        statement: getUnitStatement(totalMonths, "month")
    };
};

/**
 * Calculate the number of weeks since a specific date time.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
 */
const calculateWeeks = (timeNow, timeSince) => {
    const prevTimeNow = new Date(timeNow);
    prevTimeNow.setFullYear(timeSince.getFullYear());
    prevTimeNow.setMonth(timeSince.getMonth());
    prevTimeNow.setDate(timeSince.getDate());

    const timeDiff = getTimeDiff(timeNow, timeSince);

    const totalWeeks = parseInt(timeDiff / (ONE_DAY * 7));

    return {
        count: totalWeeks,
        statement: getUnitStatement(totalWeeks, "week")
    };
};

/**
 * Calculate the number of days since a specific date time.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
 */
const calculateDays = (timeNow, timeSince) => {
    const timeDiff = getTimeDiff(timeNow, timeSince);

    const totalDays = parseInt(timeDiff / ONE_DAY);

    return {
        count: totalDays,
        statement: getUnitStatement(totalDays, "day")
    };
};

/**
 * Calculate the number of hours since a specific date time.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
 */
const calculateHours = (timeNow, timeSince) => {
    const timeDiff = getTimeDiff(timeNow, timeSince);

    const totalHours = parseInt(timeDiff / ONE_HOUR);

    return {
        count: totalHours,
        statement: getUnitStatement(totalHours, "hour")
    }
};

/**
 * Calculate the number of minutes since a specific date time.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
 */
const calculateMinutes = (timeNow, timeSince) => {
    const timeDiff = getTimeDiff(timeNow, timeSince);

    const totalMinutes = parseInt(timeDiff / ONE_MINUTE);

    return {
        count: totalMinutes,
        statement: getUnitStatement(totalMinutes, "minute")
    };
};

/**
 * Calculate the number of seconds since a specific date time.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
 */
const calculateSeconds = (timeNow, timeSince) => {
    const timeDiff = getTimeDiff(timeNow, timeSince);

    const totalSeconds = parseInt(timeDiff / ONE_SECOND);

    return {
        count: totalSeconds,
        statement: getUnitStatement(totalSeconds, "second")
    };
};

/**
 * Calculate the number of decades since a specific date time.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince 
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
 */
const calculateDecades = (timeNow, timeSince) => {
    const { count: totalYears } = calculateYears(timeNow, timeSince);

    const totalDecades = parseInt(totalYears / 10);

    return {
        count: totalDecades,
        statement: getUnitStatement(totalDecades, "decade")
    };
};

/**
 * Calculate the time since in combined format since a
 * specific date time.
 * 
 * @param {Date} timeNow 
 * @param {Date} timeSince
 * @returns {{
 *      statement: string
 * }}
 */
const calculateCombined = (timeNow, timeSince) => {
    const currentTime = new Date(timeSince);
    let statement = "";
    
    const { count: totalYears } = calculateYears(timeNow, currentTime);
    statement = getUpdatedStatement(statement, totalYears, "year");

    currentTime.setFullYear(currentTime.getFullYear() + totalYears);

    const { count: totalMonths } = calculateMonths(timeNow, currentTime);
    statement = getUpdatedStatement(statement, totalMonths, "month");

    currentTime.setMonth(currentTime.getMonth() + totalMonths);

    const { count: totalDays } = calculateDays(timeNow, currentTime);
    statement = getUpdatedStatement(statement, totalDays, "day");

    currentTime.setDate(currentTime.getDate() + totalDays);

    const { count: totalHours } = calculateHours(timeNow, currentTime);
    statement = getUpdatedStatement(statement, totalHours, "hour");

    currentTime.setHours(currentTime.getHours() + totalHours);

    const { count: totalMinutes } = calculateMinutes(timeNow, currentTime);
    statement = getUpdatedStatement(statement, totalMinutes, "minute");

    currentTime.setMinutes(currentTime.getMinutes() + totalMinutes);

    const { count: totalSeconds } = calculateSeconds(timeNow, currentTime);
    statement = getUpdatedStatement(statement, totalSeconds, "second");

    return { statement };
};

/**
 * Prints manual and exit the program.
 */
const printManualAndExit = () => {
    console.log(MANUAL_TEXT);
    process.exit();
};

/**
 * Check whether the value of {toUnit} is valid.
 * 
 * @param {string} toUnit
 */
const validateToUnit = toUnit => {
    if (!ACCEPTABLE_UNIT_ARG_VALUES.includes(toUnit)) {
        printManualAndExit();
    }
};

module.exports = {
    getTimeDiff,
    calculateYears,
    calculateMonths,
    calculateWeeks,
    calculateDays,
    calculateHours,
    calculateMinutes,
    calculateSeconds,
    calculateDecades,
    calculateCombined,
    printManualAndExit,
    validateToUnit
};
