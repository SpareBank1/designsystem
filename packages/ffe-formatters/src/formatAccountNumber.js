import { NON_BREAKING_SPACE } from './internal/unicode';

export default function formatAccountNumber(accountNumber) {
    if (!accountNumber) {
        return accountNumber;
    }
    let formattedAccountNumber = '';

    if (accountNumber.length > 0) {
        formattedAccountNumber += accountNumber.substring(0, 4);
    }

    if (accountNumber.length > 4) {
        formattedAccountNumber +=
            NON_BREAKING_SPACE + accountNumber.substring(4, 6);
    }

    if (accountNumber.length > 6) {
        formattedAccountNumber +=
            NON_BREAKING_SPACE + accountNumber.substring(6);
    }

    return formattedAccountNumber;
}
