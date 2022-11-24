import { FORMAT_OPTIONS } from "./constants";
import { formatUtil, checkValidInput } from "./utils";
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
