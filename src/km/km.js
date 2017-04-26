import formatNumber from '~/number';
import { NON_BREAKING_SPACE } from '~/unicode';

export default function formatKm(km) {
    const distance = formatNumber(km);
    if (distance !== 0 && (km === distance || !distance)) {
        return '';
    }
    return `${distance}${NON_BREAKING_SPACE}km`;
}
