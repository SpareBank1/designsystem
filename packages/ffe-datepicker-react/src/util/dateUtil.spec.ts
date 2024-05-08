import { isDateInputWithTwoDigitYear } from './dateUtil';

describe('dateUtil.isDateInputWithTwoDigitYear', () => {
    test.each([
        ['010100', true],
        ['101010', true],
        ['31 12 99', true],
        ['31 12 1999', false],
        ['22.11.33', true],
        ['22.11.2033', false],
        ['22119', false],
        ['2211333', false],
        ['ddmmyy', false],
    ])('test %s = %s', (string, expected) => {
        expect(isDateInputWithTwoDigitYear(string)).toBe(expected);
    });
});
