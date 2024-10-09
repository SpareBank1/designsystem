import { NON_BREAKING_SPACE } from './internal/unicode';
import { parseNumber } from './internal/parseNumber';
import { numberFormat } from 'underscore.string';

export const formatNumber = (
    number: number | string | null | undefined,
    opts = {},
    language?: string,
) => {
    let decimals: number;
    let thousandSeparator: string;
    let decimalMark: string;

    if (language === 'en') {
        ({ decimals, thousandSeparator, decimalMark } = {
            decimals: 0,
            thousandSeparator: ',',
            decimalMark: '.',
            ...opts,
        });
    } else {
        ({ decimals, thousandSeparator, decimalMark } = {
            decimals: 0,
            thousandSeparator: NON_BREAKING_SPACE,
            decimalMark: ',',
            ...opts,
        });
    }

    const toFormat = parseNumber(number, language);
    if (typeof toFormat !== 'number') {
        return number;
    }
    return `${numberFormat(
        toFormat,
        decimals,
        decimalMark,
        thousandSeparator,
    )}`;
};
