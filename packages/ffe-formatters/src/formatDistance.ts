import { formatNumber } from './formatNumber.js';
import { parseNumber } from './internal/parseNumber.js';
import { NON_BREAKING_SPACE } from './internal/unicode.js';

interface Opts {
    unit?: string;
}

export const formatDistance = (distance: string | number, opts: Opts = {}) => {
    const { unit = 'km' } = opts;
    const toFormat = parseNumber(distance, 'nb');
    return toFormat === null
        ? ''
        : `${formatNumber(toFormat, { locale: 'nb' })}${NON_BREAKING_SPACE}${unit}`;
};
