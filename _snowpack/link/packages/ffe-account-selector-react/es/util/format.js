function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { formatNumber } from '../../../ffe-formatters/es/index.js';
import { currencyAffixNOK } from './types.js';

var getWeightedSumOfDigits = function getWeightedSumOfDigits(accountNumber) {
  var weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2, 1];
  var accountNumbersWeighted = weights.map(function (value, index) {
    return parseInt(accountNumber.charAt(index), 10) * value;
  });
  return accountNumbersWeighted.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
};

export function isValidNorwegianAccountNumber(accountNumber) {
  if (accountNumber.length !== 11) {
    return false;
  }

  var sum = getWeightedSumOfDigits(accountNumber);
  return sum % 11 === 0;
}
export function accountFormatter(accountNumber) {
  if (typeof accountNumber === 'string' && isValidNorwegianAccountNumber(accountNumber)) {
    return accountNumber.replace(/(\d{4})(\d{2})(\d{5})/g, '$1 $2 $3');
  }

  return accountNumber;
}
export function balanceWithCurrency() {
  var balance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var locale = arguments.length > 1 ? arguments[1] : undefined;
  var currencyCode = arguments.length > 2 ? arguments[2] : undefined;
  var formatOptions = locale === 'en' ? {
    thousandSeparator: ',',
    decimalMark: '.'
  } : {};
  var amount = formatNumber(balance, _objectSpread({
    decimals: 2
  }, formatOptions));
  var currencyAffix = currencyCode && currencyCode !== 'NOK' ? currencyCode : currencyAffixNOK[locale];
  return locale === 'en' ? "".concat(currencyAffix, " ").concat(amount) : "".concat(amount, " ").concat(currencyAffix);
}
export var formatIncompleteAccountNumber = function formatIncompleteAccountNumber(accountNumber) {
  var matchDigits = /^\d+$/;

  if (typeof accountNumber !== 'string' || !accountNumber) {
    return accountNumber;
  }

  var accountNumberWithoutSpaces = accountNumber.replace(/\s/g, ''); // remove spaces

  if (matchDigits.test(accountNumberWithoutSpaces)) {
    return accountNumberWithoutSpaces.replace(/(\d{4})(\d{1})/, '$1 $2').replace(/ (\d{2})(\d{1})/, ' $1 $2');
  }

  return accountNumber || '';
};