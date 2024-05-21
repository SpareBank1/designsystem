import { formatFodselsnummer } from './formatFodselsnummer';
import { NON_BREAKING_SPACE } from './internal/unicode';

describe('formatFodselsnummer', () => {
    test('returns input when ssn is empty', () => {
        expect(formatFodselsnummer('')).toBe('');
    });

    test('returns input when ssn length is not 11', () => {
        expect(formatFodselsnummer('1234567890')).toBe('1234567890');
    });

    test('formats ssn correctly', () => {
        expect(formatFodselsnummer('12345678901')).toBe(
            `123456${NON_BREAKING_SPACE}78901`,
        );
    });
});
