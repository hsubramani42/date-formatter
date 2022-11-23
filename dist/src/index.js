import { FORMAT_OPTIONS } from "./constants.js";
import { formatUtil, checkValidInput } from "./utils.js";
const getFormattedDate = (date, format) => {
    try {
        checkValidInput(format);
    }
    catch (error) {
        throw error;
    }
    let formattedDate = format;
    FORMAT_OPTIONS.forEach((formatSetting) => {
        formattedDate = formatUtil(date, formattedDate, formatSetting);
    });
    return formattedDate;
};
export default getFormattedDate;
