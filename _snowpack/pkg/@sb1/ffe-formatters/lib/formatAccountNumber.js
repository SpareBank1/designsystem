import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../../../common/_commonjsHelpers-4f955397.js';
import { _ as _unicode } from '../../../common/unicode-f17d7dd3.js';

var formatAccountNumber_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatAccountNumber;



function formatAccountNumber(accountNumber) {
  if (!accountNumber || accountNumber.length !== 11) {
    return accountNumber;
  }

  return [accountNumber.substring(0, 4), accountNumber.substring(4, 6), accountNumber.substring(6, 11)].join(_unicode.NON_BREAKING_SPACE);
}
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(formatAccountNumber_1);

export { __pika_web_default_export_for_treeshaking__ as default };
