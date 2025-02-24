const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

const ACCEPTABLE_UNIT_ARG_VALUES = [
    "year",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "decade",
    "combined"
];

const ACCEPTED_DATE_TIME_FORMATS = `Accepted date time formats are:
1) YYYY-MM-DD (Example: 2000-02-15)
2) YYYY-MM-DDTHH:MM:SS (Example: 2000-02-15T14:10:25)`;

const PROMPT_DATE_TIME = `${ACCEPTED_DATE_TIME_FORMATS}
\nProvide Date Time using one the above formats: `;

const UNIT_LIST = `List of accepted units for input:
1) decade\n2) year\n3) month\n4) week\n5) day\n6) hour
7) minute\n8) second
9) combined (Output Format: 'years months days hours minutes seconds')`;

const PROMPT_TO_UNIT = `\n${UNIT_LIST}\n\nProvided one of the above units: `;

const MANUAL_TEXT = `
Description:
    Calculates the time since a specific date time.

${ACCEPTED_DATE_TIME_FORMATS}

${UNIT_LIST}

For command-line:
    - Run 'npm start -- --toUnit=[one of the accepted units] --sinceDate=[one of the accepted formats of date time]'.
    - Example: 'npm start -- --toUnit=week --sinceDate=2000-04-15T14:10:25'.

For console input:
    - Run 'npm start'

For help manual:
    - Run 'npm start -- --help'
`;

module.exports = {
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
    ACCEPTABLE_UNIT_ARG_VALUES,
    PROMPT_DATE_TIME,
    PROMPT_TO_UNIT,
    MANUAL_TEXT
};
