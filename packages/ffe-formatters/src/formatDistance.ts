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
    const toFormat = parseNumber(distance, 'nb');
    return toFormat === null
        ? ''
        : `${formatNumber(toFormat, { locale: 'nb' })}${NON_BREAKING_SPACE}${opts.unit}`;
};
