function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import formatNumber from './formatNumber.js';
import parseNumber from './internal/parseNumber.js';
import { NON_BREAKING_SPACE } from './internal/unicode.js';
export default function formatCurrency(amount) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _prefix$postfix$opts = _objectSpread({
    prefix: "kr".concat(NON_BREAKING_SPACE),
    postfix: ',–'
  }, opts),
      prefix = _prefix$postfix$opts.prefix,
      postfix = _prefix$postfix$opts.postfix; // A ',-' postfix is not allowed for amounts with øre, see:
  // http://www.sprakradet.no/svardatabase/sporsmal-og-svar/kronebelop-rekkjefolgje-komma-og-strek/


  if (parseNumber(amount) % 1 !== 0) {
    return "".concat(prefix).concat(formatNumber(amount, {
      decimals: 2
    }));
  }

  return "".concat(prefix).concat(formatNumber(amount)).concat(postfix);
}