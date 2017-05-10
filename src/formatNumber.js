import numberFormat from 'underscore.string/numberFormat';
import { NON_BREAKING_SPACE } from './internal/unicode';
import parseNumber from './internal/parseNumber';

const defaults = {
    decimals: 0,
};

export default function formatNumber(number, opts = defaults) {
    const toFormat = parseNumber(number);
    if (!toFormat) {
        return number;
    }
    return `${numberFormat(toFormat, opts.decimals, ',', NON_BREAKING_SPACE)}`;
}
