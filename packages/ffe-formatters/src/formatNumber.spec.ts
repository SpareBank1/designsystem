import { formatNumber } from './formatNumber';
import { NON_BREAKING_SPACE as nbsp } from './internal/unicode';

describe('formatNumber with default options', () => {
    test('noops on falsy values', () => {
        expect(formatNumber(null, { locale: 'nb' })).toBe(null);
        expect(formatNumber(undefined, { locale: 'nb' })).toBe(undefined);
    });

    test('noops on non-numeric strings', () => {
        expect(formatNumber('invalid', { locale: 'nb' })).toBe('invalid');
    });

    test('formats regular numbers', () => {
        expect(formatNumber(123, { locale: 'nb' })).toBe('123');
        expect(formatNumber(123456, { locale: 'nb' })).toBe(`123${nbsp}456`);
    });

    test('formats negative numbers', () => {
        expect(formatNumber(-123, { locale: 'nb' })).toBe('−123');
        expect(formatNumber(-123456, { locale: 'nb' })).toBe(`−123${nbsp}456`);
    });

    test('ignores decimal numbers by default', () => {
        expect(formatNumber(1234.5, { locale: 'nb' })).toBe(`1${nbsp}235`);
    });

    test('format 0 without decimal numbers', () => {
        expect(formatNumber(0, { locale: 'nb' })).toBe('0');
    });

    test('format numeric strings', () => {
        expect(formatNumber('1234', { locale: 'nb' })).toBe(`1${nbsp}234`);
        expect(formatNumber('-1234567', { locale: 'nb' })).toBe(
            `−1${nbsp}234${nbsp}567`,
        );
    });
});

describe('formatNumber with options', () => {
    const opts = { locale: 'nb' } as const;

    test('include decimal numbers if specified', () => {
        expect(formatNumber(1234.4, { decimals: 1, locale: 'nb' })).toBe(
            `1${nbsp}234,4`,
        );
        expect(formatNumber(1234.4, { decimals: 2, locale: 'nb' })).toBe(
            `1${nbsp}234,40`,
        );
    });

    test('format 0 with decimal numbers if specified', () => {
        expect(formatNumber(0, { decimals: 1, locale: 'nb' })).toBe('0,0');
        expect(formatNumber(0, { decimals: 2, locale: 'nb' })).toBe('0,00');
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
        expect(formatNumber(123456, opts)).toBe(`123${nbsp}456`);
    });

    test('formats negative numbers', () => {
        expect(formatNumber(-123, opts)).toBe('−123');
        expect(formatNumber(-123456, opts)).toBe(`−123${nbsp}456`);
    });

    test('ignores decimal numbers by default', () => {
        expect(formatNumber(1234.5, opts)).toBe(`1${nbsp}235`);
    });

    test('include decimal numbers if specified', () => {
        expect(formatNumber(1234.4, { decimals: 1, ...opts })).toBe(
            `1${nbsp}234,4`,
        );
        expect(formatNumber(1234.4, { decimals: 2, ...opts })).toBe(
            `1${nbsp}234,40`,
        );
    });

    test('format 0 without decimal numbers', () => {
        expect(formatNumber(0, opts)).toBe('0');
    });

    test('format 0 with decimal numbers if specified', () => {
        expect(formatNumber(0, { decimals: 1, ...opts })).toBe('0,0');
        expect(formatNumber(0, { decimals: 2, ...opts })).toBe('0,00');
    });

    test('format numeric strings', () => {
        expect(formatNumber('1234', opts)).toBe(`1${nbsp}234`);
        expect(formatNumber('-1234567', opts)).toBe(`−1${nbsp}234${nbsp}567`);
    });
});

describe('locales', () => {
    describe('en', () => {
        test.each([
            [1, '1.00'],
            [12, '12.00'],
            [123, '123.00'],
            [1234, '1,234.00'],
            [12345, '12,345.00'],
            [123456, '123,456.00'],
            [1234567, '1,234,567.00'],
            [12345678, '12,345,678.00'],
            [123456789, '123,456,789.00'],
        ])('.formatNumber(%i)', (number, expected) => {
            expect(formatNumber(number, { locale: 'en', decimals: 2 })).toBe(
                expected,
            );
            expect(
                formatNumber(number * -1, { locale: 'en', decimals: 2 }),
            ).toBe(`-${expected}`);
        });
    });

    describe('nb', () => {
        test.each([
            [1, '1,00'],
            [12, '12,00'],
            [123, '123,00'],
            [1234, `1${nbsp}234,00`],
            [12345, `12${nbsp}345,00`],
            [123456, `123${nbsp}456,00`],
            [1234567, `1${nbsp}234${nbsp}567,00`],
            [12345678, `12${nbsp}345${nbsp}678,00`],
            [123456789, `123${nbsp}456${nbsp}789,00`],
        ])('.formatNumber(%i)', (number, expected) => {
            expect(formatNumber(number, { locale: 'nb', decimals: 2 })).toBe(
                expected,
            );
            expect(
                formatNumber(number * -1, { locale: 'nb', decimals: 2 }),
            ).toBe(`−${expected}`);
        });
    });

    describe('nn', () => {
        test.each([
            [1, '1,00'],
            [12, '12,00'],
            [123, '123,00'],
            [1234, `1${nbsp}234,00`],
            [12345, `12${nbsp}345,00`],
            [123456, `123${nbsp}456,00`],
            [1234567, `1${nbsp}234${nbsp}567,00`],
            [12345678, `12${nbsp}345${nbsp}678,00`],
            [123456789, `123${nbsp}456${nbsp}789,00`],
        ])('.formatNumber(%i)', (number, expected) => {
            expect(formatNumber(number, { locale: 'nn', decimals: 2 })).toBe(
                expected,
            );
            expect(
                formatNumber(number * -1, { locale: 'nn', decimals: 2 }),
            ).toBe(`−${expected}`);
        });
    });
});

describe('decimals', () => {
    describe('nb', () => {
        test.each([
            [1.49, 0, '1'],
            [1.49, 1, '1,5'],
            [1.49, 2, '1,49'],
            [1.49, 3, '1,490'],
            [1.49, 4, '1,4900'],
            [1.49, 5, '1,49000'],
        ])('.formatNumber(%i)', (number, decimals, expected) => {
            expect(formatNumber(number, { locale: 'nb', decimals })).toBe(
                expected,
            );
        });
    });

    describe('en', () => {
        test.each([
            [1.49, 0, '1'],
            [1.49, 1, '1.5'],
            [1.49, 2, '1.49'],
            [1.49, 3, '1.490'],
            [1.49, 4, '1.4900'],
            [1.49, 5, '1.49000'],
        ])('.formatNumber(%i)', (number, decimals, expected) => {
            expect(formatNumber(number, { locale: 'en', decimals })).toBe(
                expected,
            );
        });
    });
});
