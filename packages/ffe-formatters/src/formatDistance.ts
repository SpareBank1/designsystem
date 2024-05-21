import { formatNumber } from './formatNumber';
import { parseNumber } from './internal/parseNumber';
import { NON_BREAKING_SPACE } from './internal/unicode';

interface Opts {
    unit?: string;
}

export const formatDistance = (
    distance: string | number,
    opts: Opts = { unit: 'km' },
) => {
    const toFormat = parseNumber(distance);
    if (toFormat !== 0 && !toFormat) {
        return '';
    }

    return `${formatNumber(toFormat)}${NON_BREAKING_SPACE}${opts.unit}`;
};
