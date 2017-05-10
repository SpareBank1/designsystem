import { NON_BREAKING_SPACE } from './internal/unicode';
import formatPercentage from './formatPercentage';

describe('format percentage', () => {
    test('returns empty string non-number values', () => {
        expect(formatPercentage(null)).toBe('');
        expect(formatPercentage(undefined)).toBe('');
        expect(formatPercentage(false)).toBe('');
        expect(formatPercentage(true)).toBe('');
        expect(formatPercentage('invalid')).toBe('');
        expect(formatPercentage(['invalid'])).toBe('');
        expect(formatPercentage({ invalid: true })).toBe('');
    });

    test('formats numbers as percentages', () => {
        expect(formatPercentage(0.3)).toBe(`30${NON_BREAKING_SPACE}%`);
        expect(formatPercentage(-0.732)).toBe(`-73.2${NON_BREAKING_SPACE}%`);
        expect(formatPercentage(1.25)).toBe(`125${NON_BREAKING_SPACE}%`);
    });

    test('returns a maximum of 2 decimals by default', () => {
        // Note: 0.29 * 100 === 28.999999999999996
        // because JS math is random
        expect(formatPercentage(0.29)).toBe(`28.99${NON_BREAKING_SPACE}%`);
        expect(formatPercentage(0.111)).toBe(`11.1${NON_BREAKING_SPACE}%`);
        expect(formatPercentage(0.1111111111)).toBe(`11.11${NON_BREAKING_SPACE}%`);
    });

    test('lets you specify number of maximum decimals', () => {
        expect(formatPercentage(0.1010101, { maxDecimals: 4 })).toBe(`10.1010${NON_BREAKING_SPACE}%`);
        expect(formatPercentage(0.123456, { maxDecimals: 1 })).toBe(`12.3${NON_BREAKING_SPACE}%`);
        expect(formatPercentage(-0.987654321, { maxDecimals: 3 })).toBe(`-98.765${NON_BREAKING_SPACE}%`);
    });
});
