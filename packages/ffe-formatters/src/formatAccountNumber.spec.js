import formatAccountNumber from './formatAccountNumber';
import { NON_BREAKING_SPACE } from './internal/unicode';

describe('format account number', () => {
    test('returns input when account number is undefined', () => {
        expect(formatAccountNumber(undefined)).toBe(undefined);
    });

    test('returns input when account number is null', () => {
        expect(formatAccountNumber(null)).toBe(null);
    });

    test('returns input when account number is empty', () => {
        expect(formatAccountNumber('')).toBe('');
    });

    test('Formats account number even when less than 11 digits', () => {
        expect(formatAccountNumber('12345678')).toBe(
            `1234${NON_BREAKING_SPACE}56${NON_BREAKING_SPACE}78`,
        );
    });

    test('formats account number correctly', () => {
        expect(formatAccountNumber('12345678901')).toBe(
            `1234${NON_BREAKING_SPACE}56${NON_BREAKING_SPACE}78901`,
        );
    });

    test('formats foreign account number correctly', () => {
        expect(formatAccountNumber('AB12345678901234')).toBe(
            `AB12${NON_BREAKING_SPACE}3456${NON_BREAKING_SPACE}7890${NON_BREAKING_SPACE}1234`,
        );
    });
});
