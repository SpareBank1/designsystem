import { NON_BREAKING_SPACE } from './internal/unicode';

const defaults = {
    maxDecimals: 2,
};

export default function formatPercentage(amount, opts = defaults) {
    if (typeof amount !== 'number') {
        return '';
    }

    const percentage = amount.toLocaleString('nb-NO', {
        minimumFractionDigits: 0,
        maximumFractionDigits: opts.maxDecimals,
    });
    return `${percentage.replace('.', ',')}${NON_BREAKING_SPACE}%`;
}
