import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../../../common/_commonjsHelpers-4f955397.js';
import { _ as _unicode } from '../../../common/unicode-f17d7dd3.js';

var formatPercentage_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatPercentage;



var defaults = {
  minDecimals: 0,
  maxDecimals: 2
};

function formatPercentage(amount) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults;

  if (typeof amount !== 'number') {
    return '';
  }

  var percentage = amount.toLocaleString('nb-NO', {
    minimumFractionDigits: opts.minDecimals,
    maximumFractionDigits: opts.maxDecimals
  });
  return "".concat(percentage.replace('.', ',')).concat(_unicode.NON_BREAKING_SPACE, "%");
}
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(formatPercentage_1);

export { __pika_web_default_export_for_treeshaking__ as default };
