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

module.exports = {
    ONE_SECOND,
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
    ACCEPTABLE_UNIT_ARG_VALUES
};
