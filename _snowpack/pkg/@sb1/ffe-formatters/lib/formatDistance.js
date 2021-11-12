import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../../../common/_commonjsHelpers-4f955397.js';
import { r as require$$1, f as formatNumber_1 } from '../../../common/formatNumber-df901333.js';
import { _ as _unicode } from '../../../common/unicode-f17d7dd3.js';
import '../../../common/numberFormat-e9d2ffa9.js';

var formatDistance_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDistance;

var _formatNumber = _interopRequireDefault(formatNumber_1);

var _parseNumber = _interopRequireDefault(require$$1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  unit: 'km'
};

function formatDistance(distance) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults;
  var toFormat = (0, _parseNumber.default)(distance);

  if (toFormat !== 0 && !toFormat) {
    return '';
  }

  return "".concat((0, _formatNumber.default)(toFormat)).concat(_unicode.NON_BREAKING_SPACE).concat(opts.unit);
}
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(formatDistance_1);

export { __pika_web_default_export_for_treeshaking__ as default };
