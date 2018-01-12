import numberFormat from 'underscore.string/numberFormat';
import { NON_BREAKING_SPACE } from './internal/unicode';
import parseNumber from './internal/parseNumber';

export default function formatNumber(number, opts = {}) {
    const {
        decimals,
        thousandSeparator,
        decimalMark,
    } = {
        decimals: 0,
        thousandSeparator: NON_BREAKING_SPACE,
        decimalMark: ',',
        ...opts,
    };

    const toFormat = parseNumber(number);
    if (typeof toFormat !== 'number') {
        return number;
    }
    return `${numberFormat(toFormat, decimals, decimalMark, thousandSeparator)}`;
}
