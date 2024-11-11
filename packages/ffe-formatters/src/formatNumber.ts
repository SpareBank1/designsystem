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
    const supportedLocale = locale === 'en' ? 'en' : 'nb';

    const toFormat = parseNumber(number, supportedLocale);

    if (typeof toFormat !== 'number') {
        return number;
    }

    return new Intl.NumberFormat(supportedLocale, {
        maximumFractionDigits: decimals,
        minimumFractionDigits: decimals,
    }).format(toFormat);
};
