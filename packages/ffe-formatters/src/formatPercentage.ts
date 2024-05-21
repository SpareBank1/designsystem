import { NON_BREAKING_SPACE } from './internal/unicode';

interface Opts {
    minDecimals?: number;
    maxDecimals?: number;
}

export const formatPercentage = (
    amount: number | string,
    opts: Opts = {
        minDecimals: 0,
        maxDecimals: 2,
    },
) => {
    if (typeof amount !== 'number') {
        return '';
    }

    const percentage = amount.toLocaleString('nb-NO', {
        minimumFractionDigits: opts.minDecimals,
        maximumFractionDigits: opts.maxDecimals,
    });
    return `${percentage.replace('.', ',')}${NON_BREAKING_SPACE}%`;
};
