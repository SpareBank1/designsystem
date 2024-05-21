import { NON_BREAKING_SPACE as nbsp } from './internal/unicode';
import { formatDistance } from './formatDistance';

describe('format distance', () => {
    test('formats distance with spaces between thousands', () => {
        expect(formatDistance(10)).toBe(`10${nbsp}km`);
        expect(formatDistance(1000)).toBe(`1${nbsp}000${nbsp}km`);
    });

    test('handles numeric strings where the result from formatNumber equals the input (<1000)', () => {
        expect(formatDistance('9')).toBe(`9${nbsp}km`);
        expect(formatDistance('99')).toBe(`99${nbsp}km`);
        expect(formatDistance('999')).toBe(`999${nbsp}km`);
    });

    test('formats distance with spaces between thousands using string as input', () => {
        expect(formatDistance('1000')).toBe(`1${nbsp}000${nbsp}km`);
        expect(formatDistance('1 000')).toBe(`1${nbsp}000${nbsp}km`);
    });

    test('formats distance without decimals even if input has them', () => {
        expect(formatDistance(10.5)).toBe(`11${nbsp}km`);
        expect(formatDistance('10.5')).toBe(`11${nbsp}km`);
    });

    test('formats distance for input 0', () => {
        expect(formatDistance(0)).toBe(`0${nbsp}km`);
    });

    test('returns an empty string for falsy inut values other than 0', () => {
        expect(formatDistance('')).toBe('');
        expect(formatDistance('hodor')).toBe('');
        expect(formatDistance(NaN)).toBe('');
    });

    test('returns the unit specified in options', () => {
        expect(formatDistance(100000, { unit: 'mi' })).toBe(
            `100${nbsp}000${nbsp}mi`,
        );
    });
});
