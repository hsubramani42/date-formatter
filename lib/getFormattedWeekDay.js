import { DATE_FORMAT_OPTION } from "./constants.js";

const getFormattedWeekDay = (date, format) => {
    let output = format;

    const formatsOfWeekDay = Array.from(output.matchAll(/w+/g));

    let typeOfWeekDay = {
        1: { weekday: DATE_FORMAT_OPTION.SINGLE_CHAR },
        3: { weekday: DATE_FORMAT_OPTION.SHORT },
        4: { weekday: DATE_FORMAT_OPTION.FULL },
    };

    for (let i = 0; i < formatsOfWeekDay.length; i++) {
        if (
            formatsOfWeekDay[i] &&
            [1, 3, 4].includes(formatsOfWeekDay[i][0]?.length)
        ) {
            const options = typeOfWeekDay[formatsOfWeekDay[i][0]?.length];
            output = output.replace(
                formatsOfWeekDay[i][0],
                `${date.toLocaleString("default", options)}`
            );
        } else {
            throw new TypeError("Invalid week day format");
        }
    }
    return output;
};

export default getFormattedWeekDay;
