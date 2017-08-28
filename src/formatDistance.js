import formatNumber from './formatNumber';
import parseNumber from './internal/parseNumber';
import { NON_BREAKING_SPACE } from './internal/unicode';

const defaults = {
    unit: 'km',
};

export default function formatDistance(distance, opts = defaults) {
    const toFormat = parseNumber(distance);
    if (toFormat !== 0 && !toFormat) {
        return '';
    }

    return `${formatNumber(toFormat)}${NON_BREAKING_SPACE}${opts.unit}`;
}
