import { NON_BREAKING_SPACE } from './internal/unicode.js';

export const formatFodselsnummer = (ssn: string) => {
    if (!ssn || ssn.length !== 11) {
        return ssn;
    }
    return `${ssn.substring(0, 6)}${NON_BREAKING_SPACE}${ssn.substring(6, 11)}`;
};
