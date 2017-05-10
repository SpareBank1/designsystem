import { NON_BREAKING_SPACE } from './internal/unicode';

export default function formatAccountNumber(accountNumber) {
    if (!accountNumber || accountNumber.length !== 11) {
        return accountNumber;
    }
    return [
        accountNumber.substring(0, 4),
        accountNumber.substring(4, 6),
        accountNumber.substring(6, 11),
    ].join(NON_BREAKING_SPACE);
}
