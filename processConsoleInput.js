const readline = require("readline").promises;

const calculateTimeSince = require("./calculateTimeSince");
const { validateToUnit } = require("./helpers");

const promptDateTime = `
Only Date Format: YYYY-MM-DD (Example: 2000-02-15)
Date and Time Format: YYYY-MM-DDTHH:MM:SS (Example: 2000-02-15T14:10:25)
\nProvide Date Time using one the above formats: `

const promptToUnit = `
1) decade\n2) year\n3) month\n4) week\n5) day\n6) hour\n7) minute
8) second\n9) combined (Format: 'years months days hours minutes seconds')
\nProvided one of the above units: `;

/**
 * Calculate time since from console input.
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

    const dateTimeInput = await rLInterface.question(promptDateTime); 
    const toUnit = await rLInterface.question(promptToUnit);

    rLInterface.close();

    validateToUnit(toUnit);

    return calculateTimeSince(dateTimeInput, toUnit);
};

module.exports = processConsoleInput;
