import { NON_BREAKING_SPACE } from '~/unicode';

export default function formatSsn(ssn) {
    if (!ssn || ssn.length !== 11) {
        return ssn;
    }
    return `${ssn.substring(0, 6)}${NON_BREAKING_SPACE}${ssn.substring(6, 11)}`;
}
