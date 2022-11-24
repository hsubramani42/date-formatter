import getFormattedDate from "../src/index";
import { testcases } from "./testcases";

describe("Run sample testcases to validate function", () => {
    testcases.forEach((testcase) => {
        const { inputs, output, error } = testcase;

        if (output) {
            test(`Test: Input[ ${inputs.date},${inputs.format} ] & Output [${output}]`, () => {
                expect(
                    getFormattedDate(new Date(inputs.date), inputs.format)
                ).toBe(output);
            });
        } else {
            test(`Test: Input[ ${inputs.date},${inputs.format} ] & Error [${error}]`, () => {
                expect(() => {
                    getFormattedDate(new Date(inputs.date), inputs.format);
                }).toThrow(error);
            });
        }
    });
});
