const readline = require("readline").promises;

const calculateTimeSince = require("./calculateTimeSince");
const { validateToUnit } = require("./helpers");
const { PROMPT_DATE_TIME, PROMPT_TO_UNIT } = require("./constants");

/**
 * Calculate the time since from console input.
 * 
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
 */
const processConsoleInput = async () => {
    const rLInterface = readline.createInterface(
        process.stdin,
        process.stdout
    );

    const dateTimeInput = await rLInterface.question(PROMPT_DATE_TIME); 
    const toUnit = await rLInterface.question(PROMPT_TO_UNIT);

    rLInterface.close();

    validateToUnit(toUnit);

    return calculateTimeSince(dateTimeInput, toUnit);
};

module.exports = processConsoleInput;
