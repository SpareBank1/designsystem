import { parseNumber } from './internal/parseNumber';
import { Locale } from './types';

export const formatNumber = (
    number: number | string | null | undefined,
    opts: {
        locale: Locale;
        decimals?: number;
    },
) => {
    const { decimals = 0, locale } = opts;

    const toFormat = parseNumber(number, locale);

    if (typeof toFormat !== 'number') {
        return number;
    }

    return new Intl.NumberFormat(locale === 'en' ? 'en' : 'nb', {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
    }).format(toFormat);
};
