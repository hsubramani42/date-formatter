const WEEK_DAY_FORMATS = {
    SINGLE_CHAR: "narrow",
    SHORT: "short",
    LONG: "long",
};
const DAY_FORMATS = {
    NUMERIC: "numeric",
    TWO_DIGIT: "2-digit",
};
const MONTH_FORMATS = {
    NUMERIC: "numeric",
    TWO_DIGIT: "2-digit",
    SHORT: "short",
    LONG: "long",
};
const YEAR_FORMATS = {
    NUMERIC: "numeric",
    TWO_DIGIT: "2-digit",
};
export const FORMAT_OPTIONS = [
    {
        name: "Weekday",
        pattern: /w+/gi,
        regexLengths: [1, 3, 4],
        types: {
            1: WEEK_DAY_FORMATS.SINGLE_CHAR,
            3: WEEK_DAY_FORMATS.SHORT,
            4: WEEK_DAY_FORMATS.LONG,
        },
    },
    {
        name: "Day",
        pattern: /d+/gi,
        regexLengths: [1, 2],
        types: {
            1: DAY_FORMATS.NUMERIC,
            2: DAY_FORMATS.TWO_DIGIT,
        },
    },
    {
        name: "Month",
        pattern: /m+/gi,
        regexLengths: [1, 2, 3, 4],
        types: {
            1: MONTH_FORMATS.NUMERIC,
            2: MONTH_FORMATS.TWO_DIGIT,
            3: MONTH_FORMATS.SHORT,
            4: MONTH_FORMATS.LONG,
        },
    },
    {
        name: "Year",
        pattern: /y+/gi,
        regexLengths: [2, 4],
        types: {
            2: YEAR_FORMATS.TWO_DIGIT,
            4: YEAR_FORMATS.NUMERIC,
        },
    },
];
/*
    Note:
    Currently, all english alphabets other than d, m, w, y are ignored.
    Also, all non alphabets are supported in date format string.

 */
export const INVALID_DATE_PATTERN = /[a-ce-ln-vxz]/i;
export default {};
