interface DateFormat {
    name: string;
    pattern: RegExp;
    regexLengths: Array<Number>;
    types: Record<number, string>;
}

export default DateFormat;
