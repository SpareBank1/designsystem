import formatNumber from './formatNumber';
import { NON_BREAKING_SPACE } from './internal/unicode';

const defaults = {
    unit: 'km',
};

export default function formatDistance(distance, opts = defaults) {
    const formattedDistance = formatNumber(distance);
    if (formattedDistance !== 0 && (distance === formattedDistance || !formattedDistance)) {
        return '';
    }
    return `${formattedDistance}${NON_BREAKING_SPACE}${opts.unit}`;
}
