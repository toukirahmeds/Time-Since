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

const PROMPT_DATE_TIME = `
Only Date Format: YYYY-MM-DD (Example: 2000-02-15)
Date and Time Format: YYYY-MM-DDTHH:MM:SS (Example: 2000-02-15T14:10:25)
\nProvide Date Time using one the above formats: `

const PROMPT_TO_UNIT = `
1) decade\n2) year\n3) month\n4) week\n5) day\n6) hour\n7) minute
8) second\n9) combined (Format: 'years months days hours minutes seconds')
\nProvided one of the above units: `;

module.exports = {
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
    ACCEPTABLE_UNIT_ARG_VALUES,
    PROMPT_DATE_TIME,
    PROMPT_TO_UNIT
};
