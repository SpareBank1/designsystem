import { formatNumber } from '@sb1/ffe-formatters';
import { Locale } from '../types';

export const nb = 'nb';
export const en = 'en';
export const nn = 'nn';

export const currencyAffixNOK = {
    [nb]: 'kr',
    [nn]: 'kr',
    [en]: 'NOK',
};

const getWeightedSumOfDigits = (accountNumber: string) => {
    const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2, 1];
    const accountNumbersWeighted = weights.map(
        (value, index) => parseInt(accountNumber.charAt(index), 10) * value,
    );
    return accountNumbersWeighted.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
    );
};

export function isValidNorwegianAccountNumber(accountNumber: string) {
    if (accountNumber.length !== 11) {
        return false;
    }
    const sum = getWeightedSumOfDigits(accountNumber);
    return sum % 11 === 0;
}

export function accountFormatter(accountNumber?: string) {
    if (accountNumber && isValidNorwegianAccountNumber(accountNumber)) {
        return accountNumber.replace(/(\d{4})(\d{2})(\d{5})/g, '$1 $2 $3');
    }
    return accountNumber;
}

export function balanceWithCurrency(
    balance: string | number = '',
    locale: Locale,
    currencyCode?: string,
) {
    const amount = formatNumber(balance, { decimals: 2, locale });
    const currencyAffix =
        currencyCode && currencyCode !== 'NOK'
            ? currencyCode
            : currencyAffixNOK[locale];
    return locale === 'en'
        ? `${currencyAffix} ${amount}`
        : `${amount} ${currencyAffix}`;
}

export const formatIncompleteAccountNumber = (accountNumber: string) => {
    const matchDigits = /^\d+$/;

    if (!accountNumber) {
        return accountNumber;
    }

    const accountNumberWithoutSpaces = accountNumber.replace(/\s/g, ''); // remove spaces

    if (matchDigits.test(accountNumberWithoutSpaces)) {
        return accountNumberWithoutSpaces
            .replace(/(\d{4})(\d{1})/, '$1 $2')
            .replace(/ (\d{2})(\d{1})/, ' $1 $2');
    }
    return accountNumber || '';
};
