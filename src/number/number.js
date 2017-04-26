import numberFormat from 'underscore.string/numberFormat';
import { NON_BREAKING_SPACE } from '~/unicode';

export const parse = (number) => {
    if (!number || typeof number === 'number') {
        return number;
    }

    let parsed = number;
    if (typeof number === 'string') {
        parsed = parseFloat(number.replace(/[^\d,.-]/g, '').replace(/,/g, '.'));
    }
    if (Number.isNaN(parsed) || typeof parsed !== 'number') {
        return null;
    }

    return parsed;
}

export default function formatNumber(number, decimals = 0) {
    const toFormat = parse(number);
    if (!toFormat) {
        return number;
    }
    return `${numberFormat(toFormat, decimals, ',', NON_BREAKING_SPACE)}`;
}
