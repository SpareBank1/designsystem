import { NON_BREAKING_SPACE } from './internal/unicode';
import { formatCurrency } from './formatCurrency';

describe('format currency', () => {
    test('does not show decimals for whole moneys', () => {
        expect(formatCurrency('999.00')).toBe(`kr${NON_BREAKING_SPACE}999,–`);
        expect(formatCurrency(1234)).toBe(
            `kr${NON_BREAKING_SPACE}1${NON_BREAKING_SPACE}234,–`,
        );
    });

    test('show decimals for moneys which are not whole', () => {
        expect(formatCurrency('999.99')).toBe(`kr${NON_BREAKING_SPACE}999,99`);
        expect(formatCurrency(1234.9)).toBe(
            `kr${NON_BREAKING_SPACE}1${NON_BREAKING_SPACE}234,90`,
        );
    });

    test('allows overrides of post and prefix', () => {
        expect(formatCurrency('1234.10', { prefix: '' })).toBe(
            `1${NON_BREAKING_SPACE}234,10`,
        );
        expect(formatCurrency('1234', { postfix: '' })).toBe(
            `kr${NON_BREAKING_SPACE}1${NON_BREAKING_SPACE}234`,
        );
        expect(formatCurrency(1234, { prefix: '', postfix: '' })).toBe(
            `1${NON_BREAKING_SPACE}234`,
        );
    });

    test.each([',–', `,-`])(
        'does not allow %s postfix for decimals',
        postfix => {
            expect(formatCurrency('999.99', { postfix })).toBe(
                `kr${NON_BREAKING_SPACE}999,99`,
            );
        },
    );

    test('does allow postfix not equal ,– for decimals', () => {
        expect(formatCurrency('999.99', { prefix: '', postfix: 'kr' })).toBe(
            `999,99kr`,
        );
    });
});
