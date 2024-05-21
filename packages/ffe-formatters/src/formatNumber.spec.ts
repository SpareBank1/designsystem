import { formatNumber } from './formatNumber';

describe('formatNumber with default options', () => {
    test('noops on falsy values', () => {
        expect(formatNumber(null)).toBe(null);
        expect(formatNumber(undefined)).toBe(undefined);
    });

    test('noops on non-numeric strings', () => {
        expect(formatNumber('invalid')).toBe('invalid');
    });

    test('formats regular numbers', () => {
        expect(formatNumber(123)).toBe('123');
        expect(formatNumber(123456)).toBe('123 456');
    });

    test('formats negative numbers', () => {
        expect(formatNumber(-123)).toBe('-123');
        expect(formatNumber(-123456)).toBe('-123 456');
    });

    test('ignores decimal numbers by default', () => {
        expect(formatNumber(1234.5)).toBe('1 235');
    });

    test('format 0 without decimal numbers', () => {
        expect(formatNumber(0)).toBe('0');
    });

    test('format numeric strings', () => {
        expect(formatNumber('1234')).toBe('1 234');
        expect(formatNumber('-1234567')).toBe('-1 234 567');
    });
});

describe('formatNumber with options', () => {
    const opts = { thousandSeparator: ',', decimalMark: '.' };

    test('include decimal numbers if specified', () => {
        expect(formatNumber(1234.4, { decimals: 1 })).toBe('1 234,4');
        expect(formatNumber(1234.4, { decimals: 2 })).toBe('1 234,40');
    });

    test('format 0 with decimal numbers if specified', () => {
        expect(formatNumber(0, { decimals: 1 })).toBe('0,0');
        expect(formatNumber(0, { decimals: 2 })).toBe('0,00');
    });

    test('noops on falsy values', () => {
        expect(formatNumber(null, opts)).toBe(null);
        expect(formatNumber(undefined, opts)).toBe(undefined);
    });

    test('noops on non-numeric strings', () => {
        expect(formatNumber('invalid', opts)).toBe('invalid');
    });

    test('formats regular numbers', () => {
        expect(formatNumber(123, opts)).toBe('123');
        expect(formatNumber(123456, opts)).toBe('123,456');
    });

    test('formats negative numbers', () => {
        expect(formatNumber(-123, opts)).toBe('-123');
        expect(formatNumber(-123456, opts)).toBe('-123,456');
    });

    test('ignores decimal numbers by default', () => {
        expect(formatNumber(1234.5, opts)).toBe('1,235');
    });

    test('include decimal numbers if specified', () => {
        expect(formatNumber(1234.4, { decimals: 1, ...opts })).toBe('1,234.4');
        expect(formatNumber(1234.4, { decimals: 2, ...opts })).toBe('1,234.40');
    });

    test('format 0 without decimal numbers', () => {
        expect(formatNumber(0, opts)).toBe('0');
    });

    test('format 0 with decimal numbers if specified', () => {
        expect(formatNumber(0, { decimals: 1, ...opts })).toBe('0.0');
        expect(formatNumber(0, { decimals: 2, ...opts })).toBe('0.00');
    });

    test('format numeric strings', () => {
        expect(formatNumber('1234', opts)).toBe('1,234');
        expect(formatNumber('-1234567', opts)).toBe('-1,234,567');
    });
});
