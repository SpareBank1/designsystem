import { NON_BREAKING_SPACE } from './internal/unicode';

const defaults = {
    minDecimals: 0,
    maxDecimals: 2,
};

export default function formatPercentage(amount, opts = defaults) {
    if (typeof amount !== 'number') {
        return '';
    }

    const percentage = amount.toLocaleString('nb-NO', {
        minimumFractionDigits: opts.minDecimals,
        maximumFractionDigits: opts.maxDecimals,
    });
    return `${percentage.replace('.', ',')}${NON_BREAKING_SPACE}%`;
}
