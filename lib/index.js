import getFormattedYear from "./getFormattedYear.js";
import getFormattedMonth from "./getFormattedMonth.js";
import getFormattedDay from "./getFormattedDay.js";
import getFormattedWeekDay from "./getFormattedWeekDay.js";

const getFormattedDate = (date, format) => {
    if (!(date instanceof Date)) {
        throw new TypeError("Invalid Date Object");
    }

    let formattedDate = format.toLowerCase();

    // year formatter
    formattedDate = getFormattedYear(date, formattedDate);

    // month formatter
    formattedDate = getFormattedMonth(date, formattedDate);

    // day formatter
    formattedDate = getFormattedDay(date, formattedDate);

    // day of week formatter
    formattedDate = getFormattedWeekDay(date, formattedDate);

    return formattedDate;
};

export default getFormattedDate;
