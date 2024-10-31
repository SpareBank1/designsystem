import {
    isValidNorwegianAccountNumber,
    accountFormatter,
    formatIncompleteAccountNumber,
} from './format';

const validNorwegianAccountNumber = '42000231376';
const inValidNorwegianAccountNumber = '42000231377';

describe('accountFormatter', () => {
    it('should return empty string for empty string', () => {
        expect(accountFormatter('')).toBe('');
    });
    it('should return formatted norwegian account number', () => {
        expect(accountFormatter(validNorwegianAccountNumber)).toBe(
            '4200 02 31376',
        );
    });
});

describe('formatIncompleteAccountNumber', () => {
    it('should return empty string for empty string', () => {
        expect(formatIncompleteAccountNumber('')).toBe('');
    });
    it('should return formatted norwegian account number for complete account number', () => {
        expect(formatIncompleteAccountNumber(validNorwegianAccountNumber)).toBe(
            '4200 02 31376',
        );
    });
    it('should return formatted string for partial account number', () => {
        expect(formatIncompleteAccountNumber('1234')).toBe('1234');
        expect(formatIncompleteAccountNumber('12345')).toBe('1234 5');
        expect(formatIncompleteAccountNumber('123456')).toBe('1234 56');
        expect(formatIncompleteAccountNumber('1234567')).toBe('1234 56 7');
    });
    it('should return formatted string even if string is longer than an account number', () => {
        expect(formatIncompleteAccountNumber('123456789101112131415')).toBe(
            '1234 56 789101112131415',
        );
    });
});

describe('valid norwegian account number', () => {
    it('should return false for empty string', () => {
        expect(isValidNorwegianAccountNumber('')).toBe(false);
    });
    it('should return false for value with less than 11 chars', () => {
        expect(isValidNorwegianAccountNumber('123456789')).toBe(false);
    });
    it('should return formatted account number', () => {
        expect(accountFormatter(validNorwegianAccountNumber)).toBe(
            '4200 02 31376',
        );
    });
    it('should return false for invalid norwegian account number', () => {
        expect(
            isValidNorwegianAccountNumber(inValidNorwegianAccountNumber),
        ).toBe(false);
    });
});
