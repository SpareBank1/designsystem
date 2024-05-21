import { parseNumber } from './parseNumber';

describe('parseNumber', () => {
    test('noops on non-string arguments', () => {
        expect(parseNumber(null)).toBe(null);
        expect(parseNumber(undefined)).toBe(undefined);
        expect(parseNumber('')).toBe('');
    });

    test('parses regular numeric strings', () => {
        expect(parseNumber('123')).toBe(123);
        expect(parseNumber('0')).toBe(0);
        expect(parseNumber('000123456')).toBe(123456);
    });

    test('parses negative numbers', () => {
        expect(parseNumber('-1')).toBe(-1);
        expect(parseNumber('-123456')).toBe(-123456);
    });

    test('parses leading-zeroes strings as numbers', () => {
        expect(parseNumber('000123456')).toBe(123456);
    });

    test('parses formatted numeric strings', () => {
        expect(parseNumber('1 234 567')).toBe(1234567);
        expect(parseNumber('-1 234 567')).toBe(-1234567);
        expect(parseNumber('0,235')).toBe(0.235);
    });

    test('parses numeric strings with prefixes etc', () => {
        expect(parseNumber('kr 1 234')).toBe(1234);
        expect(parseNumber('1 tusenlapp og 234 kroner')).toBe(1234);
    });
});
