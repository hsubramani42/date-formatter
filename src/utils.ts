import DateFormat from "./@types/DateFormat";
import { INVALID_DATE_PATTERN } from "./constants";

export const formatUtil = (
    date: Date,
    formatText: String,
    formatSetting: DateFormat
) => {
    let output = formatText;

    const matchingPatterns = Array.from(output.matchAll(formatSetting.pattern));

    for (let i = 0; i < matchingPatterns.length; i++) {
        if (
            matchingPatterns[i] &&
            formatSetting.regexLengths.includes(matchingPatterns[i][0].length)
        ) {
            const options = formatSetting.types[matchingPatterns[i][0].length];
            output = output.replace(
                matchingPatterns[i][0],
                `${date.toLocaleString("default", {
                    [formatSetting.name.toLowerCase()]: options,
                })}`
            );
        } else {
            throw new TypeError(`Invalid ${formatSetting.name} format`);
        }
    }
    return output;
};

export const checkValidInput = (dateFormat: String) => {
    if (dateFormat.match(INVALID_DATE_PATTERN)) {
        throw TypeError("Invalid date format type");
    }
};

export default {};
