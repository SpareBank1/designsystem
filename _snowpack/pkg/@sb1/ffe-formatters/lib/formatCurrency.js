import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../../../common/_commonjsHelpers-4f955397.js';
import { r as require$$1, f as formatNumber_1 } from '../../../common/formatNumber-df901333.js';
import { _ as _unicode } from '../../../common/unicode-f17d7dd3.js';
import '../../../common/numberFormat-e9d2ffa9.js';

var formatCurrency_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatCurrency;

var _formatNumber = _interopRequireDefault(formatNumber_1);

var _parseNumber = _interopRequireDefault(require$$1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function formatCurrency(amount) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _prefix$postfix$opts = _objectSpread({
    prefix: "kr".concat(_unicode.NON_BREAKING_SPACE),
    postfix: ',–'
  }, opts),
      prefix = _prefix$postfix$opts.prefix,
      postfix = _prefix$postfix$opts.postfix; // A ',-' postfix is not allowed for amounts with øre, see:
  // http://www.sprakradet.no/svardatabase/sporsmal-og-svar/kronebelop-rekkjefolgje-komma-og-strek/


  if ((0, _parseNumber.default)(amount) % 1 !== 0) {
    return "".concat(prefix).concat((0, _formatNumber.default)(amount, {
      decimals: 2
    }));
  }

  return "".concat(prefix).concat((0, _formatNumber.default)(amount)).concat(postfix);
}
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(formatCurrency_1);

export { __pika_web_default_export_for_treeshaking__ as default };
