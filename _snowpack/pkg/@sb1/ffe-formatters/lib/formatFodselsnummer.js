import { g as getDefaultExportFromCjs, c as createCommonjsModule } from '../../../common/_commonjsHelpers-4f955397.js';
import { _ as _unicode } from '../../../common/unicode-f17d7dd3.js';

var formatFodselsnummer_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatFodselsnummer;



function formatFodselsnummer(ssn) {
  if (!ssn || ssn.length !== 11) {
    return ssn;
  }

  return "".concat(ssn.substring(0, 6)).concat(_unicode.NON_BREAKING_SPACE).concat(ssn.substring(6, 11));
}
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(formatFodselsnummer_1);

export { __pika_web_default_export_for_treeshaking__ as default };
