import { NON_BREAKING_SPACE as nbsp } from './internal/unicode';
import { formatCurrency } from './formatCurrency';

describe('format currency', () => {
    test('does not show decimals for whole moneys', () => {
        expect(formatCurrency('999.00', { locale: 'nb' })).toBe(
            `kr${nbsp}999,–`,
        );
        expect(formatCurrency(1234, { locale: 'nb' })).toBe(
            `kr${nbsp}1${nbsp}234,–`,
        );
    });

    test('show decimals for moneys which are not whole', () => {
        expect(formatCurrency('999.99', { locale: 'nb' })).toBe(
            `kr${nbsp}999,99`,
        );
        expect(formatCurrency(1234.9, { locale: 'nb' })).toBe(
            `kr${nbsp}1${nbsp}234,90`,
        );
    });

    test('allows overrides of post and prefix', () => {
        expect(formatCurrency('1234.10', { prefix: '', locale: 'nb' })).toBe(
            `1${nbsp}234,10`,
        );
        expect(formatCurrency('1234', { postfix: '', locale: 'nb' })).toBe(
            `kr${nbsp}1${nbsp}234`,
        );
        expect(
            formatCurrency(1234, { prefix: '', postfix: '', locale: 'nb' }),
        ).toBe(`1${nbsp}234`);
    });

    test.each([',–', `,-`])(
        'does not allow %s postfix for decimals',
        postfix => {
            expect(formatCurrency('999.99', { postfix, locale: 'nb' })).toBe(
                `kr${nbsp}999,99`,
            );
        },
    );

    test('does allow postfix not equal ,– for decimals', () => {
        expect(
            formatCurrency('999.99', {
                prefix: '',
                postfix: 'kr',
                locale: 'nb',
            }),
        ).toBe(`999,99kr`);
    });
});
