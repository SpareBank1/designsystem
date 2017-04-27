import formatNumber from '.';
import { parse } from './number';

describe('formatNumber', () => {
    test('noops on falsy values', () => {
        expect(formatNumber(null)).toBe(null);
        expect(formatNumber(undefined)).toBe(undefined);
        expect(formatNumber(false)).toBe(false);
    });

    test('noops on non-numeric strings', () => {
        expect(formatNumber('invalid')).toBe('invalid');
    });

    test('noops on arrays and objects', () => {
        expect(formatNumber(['invalid'])).toEqual(['invalid']);
        expect(formatNumber({ invalid: true })).toEqual({ invalid: true });
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

    test('include decimal numbers if specified', () => {
        expect(formatNumber(1234.4, 1)).toBe('1 234,4');
        expect(formatNumber(1234.4, 2)).toBe('1 234,40');
    });

    test('format numeric strings', () => {
        expect(formatNumber('1234')).toBe('1 234');
        expect(formatNumber('-1234567')).toBe('-1 234 567');
    });
});
