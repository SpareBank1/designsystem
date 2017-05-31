import { NON_BREAKING_SPACE } from './internal/unicode';

const defaults = {
    maxDecimals: 2,
};

export default function formatPercentage(amount, opts = defaults) {
    if (typeof amount !== 'number') {
        return '';
    }

    let percentage = `${amount * 100}`;
    const periodIndex = percentage.indexOf('.');
    if (periodIndex > -1 && periodIndex < percentage.length - (opts.maxDecimals + 1)) {
        percentage = percentage.substring(0, periodIndex + (opts.maxDecimals + 1));
    }

    return `${percentage}${NON_BREAKING_SPACE}%`;
}
