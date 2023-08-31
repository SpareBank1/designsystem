import { NON_BREAKING_SPACE } from './internal/unicode';

function foreignAccountNumber(accountNumber) {
    let formattedAccountNumber = '';

    for (let i = 0; i < accountNumber.length; i++) {
        const isFourthIteration = (i + 1) % 4 === 0;
        formattedAccountNumber += accountNumber[i].valueOf();

        if (isFourthIteration && i + 1 < accountNumber.length) {
            formattedAccountNumber += NON_BREAKING_SPACE;
        }
    }
    return formattedAccountNumber;
}

function domesticAccountNumber(accountNumber) {
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

export default function formatAccountNumber(accountNumber) {
    if (!accountNumber) {
        return accountNumber;
    }
    if (accountNumber.length <= 11) {
        return domesticAccountNumber(accountNumber);
    }
    return foreignAccountNumber(accountNumber);
}
