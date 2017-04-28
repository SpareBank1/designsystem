import { NON_BREAKING_SPACE } from '../internal/unicode';
import formatAmount from '.';

describe('formatAmount', () => {
    test('does not show decimals for whole moneys', () => {
        expect(formatAmount('999.00'))
            .toBe(`kr${NON_BREAKING_SPACE}999,–`);
        expect(formatAmount('1234'))
            .toBe(`kr${NON_BREAKING_SPACE}1${NON_BREAKING_SPACE}234,–`);
    });

    test('show decimals for moneys which are not whole', () => {
        expect(formatAmount('999.99'))
            .toBe(`kr${NON_BREAKING_SPACE}999,99`);
        expect(formatAmount('1234.90'))
            .toBe(`kr${NON_BREAKING_SPACE}1${NON_BREAKING_SPACE}234,90`);
    });

    test('allows overrides of post and prefix', () => {
        expect(formatAmount('1234.10', { prefix: '' }))
            .toBe(`1${NON_BREAKING_SPACE}234,10`);
        expect(formatAmount('1234', { postfix: '' }))
            .toBe(`kr${NON_BREAKING_SPACE}1${NON_BREAKING_SPACE}234`);
        expect(formatAmount('1234', { prefix: '', postfix: '' }))
            .toBe(`1${NON_BREAKING_SPACE}234`);
    });
});
