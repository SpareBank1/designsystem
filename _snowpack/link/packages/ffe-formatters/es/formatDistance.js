import formatNumber from './formatNumber.js';
import parseNumber from './internal/parseNumber.js';
import { NON_BREAKING_SPACE } from './internal/unicode.js';
var defaults = {
  unit: 'km'
};
export default function formatDistance(distance) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults;
  var toFormat = parseNumber(distance);

  if (toFormat !== 0 && !toFormat) {
    return '';
  }

  return "".concat(formatNumber(toFormat)).concat(NON_BREAKING_SPACE).concat(opts.unit);
}