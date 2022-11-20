const getFormattedYear = (date, format) => {
    let output = format;

    const formatsOfYear = Array.from(output.matchAll(/y+/g));

    for (let i = 0; i < formatsOfYear?.length; i++) {
        if (
            formatsOfYear[i] &&
            [2, 3, 4].includes(formatsOfYear[i][0].length)
        ) {
            output = output.replace(
                formatsOfYear[i][0],
                `${date
                    .getFullYear()
                    .toPrecision()
                    .slice(-formatsOfYear[i][0].length)}`
            );
        } else {
            throw new TypeError("Invalid year format");
        }
    }
    return output;
};

export default getFormattedYear;
