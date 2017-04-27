import { NON_BREAKING_SPACE } from '~/internal/unicode';

export default function formatPercentage(amount, maxDecimals = 2) {
    if (typeof amount !== 'number') {
        return '';
    }

    let percentage = `${amount * 100}`;
    const periodIndex = percentage.indexOf('.');
    if (periodIndex > -1 && periodIndex < percentage.length - (maxDecimals + 1)) {
        percentage = percentage.substring(0, periodIndex + (maxDecimals + 1));
    }

    return `${percentage}${NON_BREAKING_SPACE}%`;
}
