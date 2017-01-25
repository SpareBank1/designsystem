import amountFormatter from 'nfe-amount-formatter';
import {currencyPrefix} from './types';

export function balanceWithCurrency(balance, locale) {
  return `${amountFormatter(balance, locale)} ${currencyPrefix[locale]}`;
}
