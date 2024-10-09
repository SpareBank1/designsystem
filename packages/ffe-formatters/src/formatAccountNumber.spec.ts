import { formatAccountNumber } from './formatAccountNumber';
import { NON_BREAKING_SPACE as nbsp } from './internal/unicode';

describe('format account number', () => {
    test('returns input when account number is undefined', () => {
        expect(formatAccountNumber(undefined as unknown as string)).toBe(
            undefined,
        );
    });

    test('returns input when account number is null', () => {
        expect(formatAccountNumber(null as unknown as string)).toBe(null);
    });

    test('returns input when account number is empty', () => {
        expect(formatAccountNumber('')).toBe('');
    });

    test('Formats account number even when less than 11 digits', () => {
        expect(formatAccountNumber('12345678')).toBe(`1234${nbsp}56${nbsp}78`);
    });

    test('formats account number correctly', () => {
        expect(formatAccountNumber('12345678901')).toBe(
            `1234${nbsp}56${nbsp}78901`,
        );
    });

    test('formats foreign account number correctly', () => {
        expect(formatAccountNumber('AB12345678901234')).toBe(
            `AB12${nbsp}3456${nbsp}7890${nbsp}1234`,
        );
    });
});
