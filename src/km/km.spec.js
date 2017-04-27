import { NON_BREAKING_SPACE } from '~/internal/unicode';
import formatKm from '.';

describe('format km', () => {
    test('formats distance with spaces between thousands', () => {
        expect(formatKm(10)).toBe(`10${NON_BREAKING_SPACE}km`);
        expect(formatKm(1000)).toBe(`1${NON_BREAKING_SPACE}000${NON_BREAKING_SPACE}km`);
    });

    test('formats distance with spaces between thousands using string as input', () => {
        expect(formatKm('1000')).toBe(`1${NON_BREAKING_SPACE}000${NON_BREAKING_SPACE}km`);
        expect(formatKm('1 000')).toBe(`1${NON_BREAKING_SPACE}000${NON_BREAKING_SPACE}km`);
    });

    test('formats distance without decimals even if input has them', () => {
        expect(formatKm(10.5)).toBe(`11${NON_BREAKING_SPACE}km`);
        expect(formatKm('10.5')).toBe(`11${NON_BREAKING_SPACE}km`);
    });

    test('formats distance for input 0', () => {
        expect(formatKm(0)).toBe(`0${NON_BREAKING_SPACE}km`);
    });

    test('returns an empty string for falsy inut values other than 0', () => {
        expect(formatKm('')).toBe('');
        expect(formatKm('hodor')).toBe('');
        expect(formatKm(false)).toBe('');
        expect(formatKm(NaN)).toBe('');
        expect(formatKm(undefined)).toBe('');
        expect(formatKm(null)).toBe('');
    });

    test('returns an empty string for non-numeric non-parseable inputs (objects, arrays)', () => {
        expect(formatKm({ hurr: 4 })).toBe('');
        expect(formatKm([4, 5])).toBe('');
    });
});
