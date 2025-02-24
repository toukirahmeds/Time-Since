const calculateTimeSince = require("./calculateTimeSince");
const { printManualAndExit, validateToUnit } = require("./helpers");
const { ACCEPTABLE_UNIT_ARG_VALUES } = require("./constants");

/**
 * Calculate the time since from command line arguments.
 * 
 * @param {Array<string} cmdLineArgs
 * @returns {{
 *      count: number,
 *      statement: string
 * }}
 */
const processCmdLineArgs = (cmdLineArgs) => {
    const dateArg = cmdLineArgs.find(item => item.startsWith("--sinceDate="));

    if (!dateArg) {
        printManualAndExit();
    }

    const dateValue = dateArg.replace("--sinceDate=", "");

    const toUnitArg = cmdLineArgs.find(item => item.startsWith("--toUnit="));

    if (!toUnitArg) {
        printManualAndExit();
    }

    const toUnit = toUnitArg.replace("--toUnit=", "");
    validateToUnit(toUnit);
    
    return calculateTimeSince(dateValue, toUnit);
};

module.exports = processCmdLineArgs;
