import { NON_BREAKING_SPACE } from './internal/unicode';
import formatDistance from './formatDistance';

describe('format distance', () => {
    test('formats distance with spaces between thousands', () => {
        expect(formatDistance(10)).toBe(`10${NON_BREAKING_SPACE}km`);
        expect(formatDistance(1000)).toBe(`1${NON_BREAKING_SPACE}000${NON_BREAKING_SPACE}km`);
    });

    test('formats distance with spaces between thousands using string as input', () => {
        expect(formatDistance('1000')).toBe(`1${NON_BREAKING_SPACE}000${NON_BREAKING_SPACE}km`);
        expect(formatDistance('1 000')).toBe(`1${NON_BREAKING_SPACE}000${NON_BREAKING_SPACE}km`);
    });

    test('formats distance without decimals even if input has them', () => {
        expect(formatDistance(10.5)).toBe(`11${NON_BREAKING_SPACE}km`);
        expect(formatDistance('10.5')).toBe(`11${NON_BREAKING_SPACE}km`);
    });

    test('formats distance for input 0', () => {
        expect(formatDistance(0)).toBe(`0${NON_BREAKING_SPACE}km`);
    });

    test('returns an empty string for falsy inut values other than 0', () => {
        expect(formatDistance('')).toBe('');
        expect(formatDistance('hodor')).toBe('');
        expect(formatDistance(false)).toBe('');
        expect(formatDistance(NaN)).toBe('');
        expect(formatDistance(undefined)).toBe('');
        expect(formatDistance(null)).toBe('');
    });

    test('returns an empty string for non-numeric non-parseable inputs (objects, arrays)', () => {
        expect(formatDistance({ hurr: 4 })).toBe('');
        expect(formatDistance([4, 5])).toBe('');
    });

    test('returns the unit specified in options', () => {
        expect(formatDistance(100000, { unit: 'mi' }))
            .toBe(`100${NON_BREAKING_SPACE}000${NON_BREAKING_SPACE}mi`);
    });
});
