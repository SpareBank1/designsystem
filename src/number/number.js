import numberFormat from 'underscore.string/numberFormat';
import { NON_BREAKING_SPACE } from '~/internal/unicode';
import parseNumber from '~/internal/parse-number';

export default function formatNumber(number, decimals = 0) {
    const toFormat = parseNumber(number);
    if (!toFormat) {
        return number;
    }
    return `${numberFormat(toFormat, decimals, ',', NON_BREAKING_SPACE)}`;
}
