import { PropTypes } from 'react';

export const nb = 'nb';
export const en = 'en';
export const nn = 'nn';

export const currencyPrefix = {
  [nb] : 'kr',
  [nn] : 'kr',
  [en] : 'NOK'
};

export const Account = PropTypes.shape({
  accountNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currencyCode: PropTypes.string,
  balance: PropTypes.number,
});

export const Locale = PropTypes.oneOf([nb, nn, en]);
