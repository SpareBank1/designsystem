import formatSsn from './formatSsn';
import { NON_BREAKING_SPACE } from './internal/unicode';

describe('formatSsn', () => {
    test('returns input when ssn is undefined', () => {
        expect(formatSsn(undefined)).toBe(undefined);
    });

    test('returns input when ssn is null', () => {
        expect(formatSsn(null)).toBe(null);
    });

    test('returns input when ssn is empty', () => {
        expect(formatSsn('')).toBe('');
    });

    test('returns input when ssn length is not 11', () => {
        expect(formatSsn('1234567890')).toBe('1234567890');
    });

    test('formats ssn correctly', () => {
        expect(formatSsn('12345678901')).toBe(`123456${NON_BREAKING_SPACE}78901`);
    });
});
