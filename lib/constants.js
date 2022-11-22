const DATE_FORMAT_OPTION = {
    SINGLE_CHAR: "narrow",
    NUMERIC: "numeric",
    TWO_DIGIT: "2-digit",
    SHORT: "short",
    LONG: "long",
};

export const FORMAT_OPTIONS = [
    {
        name: "Weekday",
        pattern: /w+/gi,
        regexLengths: [1, 3, 4],
        types: {
            1: DATE_FORMAT_OPTION.SINGLE_CHAR,
            3: DATE_FORMAT_OPTION.SHORT,
            4: DATE_FORMAT_OPTION.LONG,
        },
    },
    {
        name: "Day",
        pattern: /d+/gi,
        regexLengths: [1, 2],
        types: {
            1: DATE_FORMAT_OPTION.NUMERIC,
            2: DATE_FORMAT_OPTION.TWO_DIGIT,
        },
    },
    {
        name: "Month",
        pattern: /m+/gi,
        regexLengths: [1, 2, 3, 4],
        types: {
            1: DATE_FORMAT_OPTION.NUMERIC,
            2: DATE_FORMAT_OPTION.TWO_DIGIT,
            3: DATE_FORMAT_OPTION.SHORT,
            4: DATE_FORMAT_OPTION.LONG,
        },
    },
    {
        name: "Year",
        pattern: /y+/gi,
        regexLengths: [2, 4],
        types: {
            2: DATE_FORMAT_OPTION.TWO_DIGIT,
            4: DATE_FORMAT_OPTION.NUMERIC,
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
