import { parseNumber } from './parseNumber';

describe('parseNumber', () => {
    test('noops on non-string arguments', () => {
        expect(parseNumber(null, 'nb')).toBe(null);
        expect(parseNumber(undefined, 'nb')).toBe(null);
        expect(parseNumber('', 'nb')).toBe(null);
    });

    test('parses regular numeric strings', () => {
        expect(parseNumber('123', 'nb')).toBe(123);
        expect(parseNumber('0', 'nb')).toBe(0);
        expect(parseNumber('000123456', 'nb')).toBe(123456);
    });

    test('parses leading-zeroes strings as numbers', () => {
        expect(parseNumber('000123456', 'nb')).toBe(123456);
    });

    describe('locale nb', () => {
        test.each([
            ['1,00', 1],
            ['12,00', 12],
            ['123,00', 123],
            ['1 234,00', 1234],
            ['12 345,00', 12345],
            ['123 456,00', 123456],
            ['1 234 567,00', 1234567],
            ['12 345 678,00', 12345678],
            ['123 456 789,00', 123456789],
        ])('.formatNumber(%i)', (number, expected) => {
            expect(parseNumber(number, 'nb')).toBe(expected);
            expect(parseNumber(`-${number}`, 'nb')).toBe(expected * -1);
        });
    });

    describe('locale nn', () => {
        test.each([
            ['1,00', 1],
            ['12,00', 12],
            ['123,00', 123],
            ['1 234,00', 1234],
            ['12 345,00', 12345],
            ['123 456,00', 123456],
            ['1 234 567,00', 1234567],
            ['12 345 678,00', 12345678],
            ['123 456 789,00', 123456789],
        ])('.formatNumber(%i)', (number, expected) => {
            expect(parseNumber(number, 'nn')).toBe(expected);
            expect(parseNumber(`-${number}`, 'nn')).toBe(expected * -1);
        });
    });

    describe('locale en', () => {
        test.each([
            ['1.00', 1],
            ['12.00', 12],
            ['123.00', 123],
            ['1,234.00', 1234],
            ['12,345.00', 12345],
            ['123,456.00', 123456],
            ['1,234,567.00', 1234567],
            ['12,345,678.00', 12345678],
            ['123,456,789.00', 123456789],
        ])('.formatNumber(%i)', (number, expected) => {
            expect(parseNumber(number, 'en')).toBe(expected);
            expect(parseNumber(`-${number}`, 'en')).toBe(expected * -1);
        });
    });
});
