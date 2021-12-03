import { NON_BREAKING_SPACE } from './internal/unicode.js';
var defaults = {
  minDecimals: 0,
  maxDecimals: 2
};
export default function formatPercentage(amount) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults;

  if (typeof amount !== 'number') {
    return '';
  }

  var percentage = amount.toLocaleString('nb-NO', {
    minimumFractionDigits: opts.minDecimals,
    maximumFractionDigits: opts.maxDecimals
  });
  return "".concat(percentage.replace('.', ',')).concat(NON_BREAKING_SPACE, "%");
}