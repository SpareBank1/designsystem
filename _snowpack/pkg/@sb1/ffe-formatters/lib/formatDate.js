import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../../../common/_commonjsHelpers-4f955397.js';

var formatDate_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatDate;

var ensureTwoDigits = function ensureTwoDigits(d) {
  return "00".concat(d).slice(-2);
};

function formatDate(timestamp) {
  if (!(Number.isInteger(timestamp) || timestamp instanceof Date)) {
    return null;
  }

  var date = timestamp instanceof Date ? timestamp : new Date(timestamp);
  var dd = ensureTwoDigits(date.getDate());
  var mm = ensureTwoDigits(date.getMonth() + 1);
  var yyyy = date.getFullYear();
  return "".concat(dd, ".").concat(mm, ".").concat(yyyy);
}
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(formatDate_1);

export { __pika_web_default_export_for_treeshaking__ as default };
