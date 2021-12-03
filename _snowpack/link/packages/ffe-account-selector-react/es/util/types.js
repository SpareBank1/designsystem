var _currencyAffixNOK;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { shape, string, number, oneOf } from '../../../../../pkg/prop-types.js';
export var nb = 'nb';
export var en = 'en';
export var nn = 'nn';
export var currencyAffixNOK = (_currencyAffixNOK = {}, _defineProperty(_currencyAffixNOK, nb, 'kr'), _defineProperty(_currencyAffixNOK, nn, 'kr'), _defineProperty(_currencyAffixNOK, en, 'NOK'), _currencyAffixNOK);
export var KeyCodes = {
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
  DOWN: 40
};
export var Account = shape({
  accountNumber: string.isRequired,
  name: string.isRequired,
  currencyCode: string,
  balance: number
});
export var Locale = oneOf([nb, nn, en]);