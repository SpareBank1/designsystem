import amountFormatter from 'nfe-amount-formatter';
import {currencyPostfix} from './types';

const getWeightedSumOfDigits = (accountNumber) => {
  const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2, 1];
  const accountNumbersWeighted = weights.map((value, index) => parseInt(
    accountNumber.charAt(index), 10) * value
  );
  return accountNumbersWeighted.reduce((previousValue, currentValue) =>
    previousValue + currentValue
  );
};

export function isValidNorwegianAccountNumber(accountNumber) {
  if (accountNumber.length !== 11) {
    return false;
  }
  const sum = getWeightedSumOfDigits(accountNumber);
  return (sum % 11 === 0);
}

export function accountFormatter(accountNumber) {
  if (typeof accountNumber === 'string' && isValidNorwegianAccountNumber(accountNumber)) {
    return accountNumber.replace(/(\d{4})(\d{2})(\d{5})/g, '$1 $2 $3');
  }
  return accountNumber;
}

export function balanceWithCurrency(balance, locale) {
  return `${amountFormatter(balance, locale)} ${currencyPostfix[locale]}`;
}

