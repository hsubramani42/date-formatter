import { DATE_FORMAT_OPTION } from "./constants.js";

const getFormattedMonth = (date, format) => {
    let output = format;

    const formatsOfMonth = Array.from(output.matchAll(/m+/g));

    let typeOfMonth = {
        1: { month: DATE_FORMAT_OPTION.TWO_DIGITS },
        2: { month: DATE_FORMAT_OPTION.STANDARD_TWO_DIGITS },
        3: { month: DATE_FORMAT_OPTION.SHORT },
        4: { month: DATE_FORMAT_OPTION.FULL },
    };

    for (let i = 0; i < formatsOfMonth.length; i++) {
        if (
            formatsOfMonth[i] &&
            [1, 2, 3, 4].includes(formatsOfMonth[i][0]?.length)
        ) {
            const options = typeOfMonth[formatsOfMonth[i][0]?.length];
            output = output.replace(
                formatsOfMonth[i][0],
                `${date.toLocaleString("default", options)}`
            );
        } else {
            throw new TypeError("Invalid month format");
        }
    }
    return output;
};

export default getFormattedMonth;
