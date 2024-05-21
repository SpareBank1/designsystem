import { NON_BREAKING_SPACE } from './internal/unicode';
import { formatPercentage } from './formatPercentage';

describe('format percentage', () => {
    test('formats numbers as percentages', () => {
        expect(formatPercentage(30)).toBe(`30${NON_BREAKING_SPACE}%`);
        expect(formatPercentage(125)).toBe(`125${NON_BREAKING_SPACE}%`);
    });

    test('returns a maximum of 2 decimals by default', () => {
        expect(formatPercentage(11)).toBe(`11${NON_BREAKING_SPACE}%`);
        expect(formatPercentage(11.1)).toBe(`11,1${NON_BREAKING_SPACE}%`);
        expect(formatPercentage(11.11111111)).toBe(
            `11,11${NON_BREAKING_SPACE}%`,
        );
    });

    test('lets you specify number of maximum decimals', () => {
        expect(formatPercentage(10.10101, { maxDecimals: 4 })).toBe(
            `10,101${NON_BREAKING_SPACE}%`,
        );
        expect(formatPercentage(12.3456, { maxDecimals: 1 })).toBe(
            `12,3${NON_BREAKING_SPACE}%`,
        );
    });

    test('rounds numbers correctly', () => {
        expect(formatPercentage(54.545)).toBe(`54,55${NON_BREAKING_SPACE}%`);
        expect(formatPercentage(54.544)).toBe(`54,54${NON_BREAKING_SPACE}%`);
    });

    test('formats negative numbers with prefix', () => {
        const HYPHEN_MINUS = String.fromCharCode(45);
        const MINUS_SIGN = String.fromCharCode(8722);
        const ANY_MINUS_SIGN = `(${HYPHEN_MINUS}|${MINUS_SIGN})`;

        expect(formatPercentage(-73.2)).toMatch(
            new RegExp(`^${ANY_MINUS_SIGN}73,2${NON_BREAKING_SPACE}%$`),
        );

        expect(
            formatPercentage(-98.7654321, {
                maxDecimals: 3,
            }),
        ).toMatch(
            new RegExp(`^${ANY_MINUS_SIGN}98,765${NON_BREAKING_SPACE}%$`),
        );
    });

    test('lets you specify minimum number of decimals', () => {
        expect(formatPercentage(1, { minDecimals: 2 })).toBe(
            `1,00${NON_BREAKING_SPACE}%`,
        );
        expect(formatPercentage(3.2, { minDecimals: 2 })).toBe(
            `3,20${NON_BREAKING_SPACE}%`,
        );
    });
});
