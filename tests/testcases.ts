export const testcases = [
    // testcase for year
    {
        inputs: { date: "2022-12-31", format: "yyyy" },
        output: "2022",
        error: null,
    },
    {
        inputs: { date: "2022-12-31", format: "yy" },
        output: "22",
        error: null,
    },
    // testcase for month
    {
        inputs: { date: "2022-01-01", format: "m" },
        output: "1",
        error: null,
    },
    {
        inputs: { date: "2022-11-01", format: "m" },
        output: "11",
        error: null,
    },
    {
        inputs: { date: "2022-01-01", format: "mm" },
        output: "01",
        error: null,
    },
    {
        inputs: { date: "2022-01-01", format: "mmm" },
        output: "Jan",
        error: null,
    },
    {
        inputs: { date: "2022-01-01", format: "mmmm" },
        output: "January",
        error: null,
    },
    // testcase for day
    {
        inputs: { date: "2022-01-01", format: "d" },
        output: "1",
        error: null,
    },
    {
        inputs: { date: "2022-01-11", format: "d" },
        output: "11",
        error: null,
    },
    {
        inputs: { date: "2022-01-01", format: "dd" },
        output: "01",
        error: null,
    },
    // testcase for weekday
    {
        inputs: { date: "2022-01-01", format: "www" },
        output: "Sat",
        error: null,
    },
    {
        inputs: { date: "2022-01-01", format: "wwww" },
        output: "Saturday",
        error: null,
    },
    // testcase with combinations and non alphabets
    {
        inputs: {
            date: "2022-11-30",
            format: "dd-mm-yy (www) && mmm dd, yyyy (wwww)",
        },
        output: "30-11-22 (Wed) && Nov 30, 2022 (Wednesday)",
        error: null,
    },
    // testcase for invalid date format (format with alphabet other than w,d,m,y)
    {
        inputs: {
            date: "2022-11-30",
            format: "dd-mm-a",
        },
        output: null,
        error: /date/gi,
    },
    // testcase for invalid weekday
    {
        inputs: {
            date: "2022-11-30",
            format: "w",
        },
        output: null,
        error: /weekday/gi,
    },
    // testcase for invalid day
    {
        inputs: {
            date: "2022-11-30",
            format: "dddd",
        },
        output: null,
        error: /day/gi,
    },
    // testcase for invalid month
    {
        inputs: {
            date: "2022-11-30",
            format: "mmmmmm",
        },
        output: null,
        error: /month/gi,
    },
    // testcase for invalid year
    {
        inputs: {
            date: "2022-11-30",
            format: "yyy",
        },
        output: null,
        error: /year/gi,
    },
];
