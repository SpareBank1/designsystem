import { isValidNorwegianAccountNumber, accountFormatter } from './format';

const validNorwegianAccountNumber = '42000231376';
const inValidNorwegianAccountNumber = '42000231377';

describe('accountFormatter', () => {
    it('should return unformatted int for int value', () => {
        expect(accountFormatter(12345678912)).toBe(12345678912);
    });
    it('should return empty string for empty string', () => {
        expect(accountFormatter('')).toBe('');
    });
    it('should return formatted norwegian account number', () => {
        expect(accountFormatter(validNorwegianAccountNumber)).toBe(
            '4200 02 31376',
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
