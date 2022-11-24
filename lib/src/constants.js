const WEEK_DAY_FORMATS = {
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
/*
 * the order is important
 * there're few cases where the results could override during iteration
 * if week is processed first, then it creates an extra y (wednesday)
 * and this could lead to wrong results
 * So, weekday (w) is proccessed at the end as we all know months names don't have w
 * Only weekday and month generates string, so order is mandatory (month before weekday)
 */
export const FORMAT_OPTIONS = [
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
        name: "Year",
        pattern: /y+/gi,
        regexLengths: [2, 4],
        types: {
            2: YEAR_FORMATS.TWO_DIGIT,
            4: YEAR_FORMATS.NUMERIC,
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
        name: "Weekday",
        pattern: /w+/gi,
        regexLengths: [3, 4],
        types: {
            3: WEEK_DAY_FORMATS.SHORT,
            4: WEEK_DAY_FORMATS.LONG,
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
