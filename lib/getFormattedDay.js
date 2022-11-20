import { DATE_FORMAT_OPTION } from "./constants.js";

const getFormattedDay = (date, format) => {
    let output = format;

    const formatsOfDay = Array.from(output.matchAll(/d+/g));

    let typeOfDay = {
        1: { day: DATE_FORMAT_OPTION.TWO_DIGITS },
        2: { day: DATE_FORMAT_OPTION.STANDARD_TWO_DIGITS },
    };

    for (let i = 0; i < formatsOfDay.length; i++) {
        if (formatsOfDay[i] && [1, 2].includes(formatsOfDay[i][0]?.length)) {
            const options = typeOfDay[formatsOfDay[i][0]?.length];
            output = output.replace(
                formatsOfDay[i][0],
                `${date.toLocaleString("default", options)}`
            );
        } else {
            throw new TypeError("Invalid day format");
        }
    }
    return output;
};

export default getFormattedDay;
