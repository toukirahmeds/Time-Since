const calculateTimeSince = require("./calculateTimeSince");
const { printManualAndExit } = require("./helpers");
const { ACCEPTABLE_UNIT_ARG_VALUES } = require("./constants");

/**
 * Calculate time since from command line arguments
 * 
 * @param {Array<string} cmdLineArgs 
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

    if (!ACCEPTABLE_UNIT_ARG_VALUES.includes(toUnit)) {
        printManualAndExit();
    }
    
    return calculateTimeSince(dateValue, toUnit);
};

module.exports = processCmdLineArgs;
