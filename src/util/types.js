import PropTypes from 'prop-types';

export const nb = 'nb';
export const en = 'en';
export const nn = 'nn';

export const currencyPostfix = {
  [nb]: 'kr',
  [nn]: 'kr',
  [en]: 'NOK'
};

export const KeyCodes = {
  TAB: 9,
  ENTER: 13,
  ALT: 18,
  ESC: 27,
  SPACE: 32,
  PGUP: 33,
  PGDWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
};

export const Account = PropTypes.shape({
  accountNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currencyCode: PropTypes.string,
  balance: PropTypes.number,
});

export const Locale = PropTypes.oneOf([nb, nn, en]);
