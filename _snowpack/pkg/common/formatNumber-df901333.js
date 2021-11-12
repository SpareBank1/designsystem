import { c as createCommonjsModule, g as getDefaultExportFromCjs } from './_commonjsHelpers-4f955397.js';
import { n as numberFormat } from './numberFormat-e9d2ffa9.js';
import { _ as _unicode } from './unicode-f17d7dd3.js';

var parseNumber_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseNumber;

function parseNumber(number) {
  if (!number || typeof number === 'number') {
    return number;
  }

  var parsed = number;

  if (typeof number === 'string') {
    parsed = parseFloat(number.replace(/[^\d,.-]/g, '').replace(/,/g, '.'));
  }

  if (Number.isNaN(parsed) || typeof parsed !== 'number') {
    return null;
  }

  return parsed;
}
});

var require$$1 = parseNumber_1;

var formatNumber_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatNumber;

var _numberFormat = _interopRequireDefault(numberFormat);



var _parseNumber = _interopRequireDefault(require$$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function formatNumber(number) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _decimals$thousandSep = _objectSpread({
    decimals: 0,
    thousandSeparator: _unicode.NON_BREAKING_SPACE,
    decimalMark: ','
  }, opts),
      decimals = _decimals$thousandSep.decimals,
      thousandSeparator = _decimals$thousandSep.thousandSeparator,
      decimalMark = _decimals$thousandSep.decimalMark;

  var toFormat = (0, _parseNumber.default)(number);

  if (typeof toFormat !== 'number') {
    return number;
  }

  return "".concat((0, _numberFormat.default)(toFormat, decimals, decimalMark, thousandSeparator));
}
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(formatNumber_1);

export { __pika_web_default_export_for_treeshaking__ as _, formatNumber_1 as f, require$$1 as r };
