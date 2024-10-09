import { NON_BREAKING_SPACE } from './internal/unicode';
import { parseNumber } from './internal/parseNumber';
import { numberFormat } from 'underscore.string';

function customNumberFormat(
    number: number,
    decimals: number,
    decimalMark: string,
    thousandSeparator: string,
) {
    const parts = number.toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
    return parts.join(decimalMark);
}

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
    return customNumberFormat(
        toFormat,
        decimals,
        decimalMark,
        thousandSeparator,
    );
};
