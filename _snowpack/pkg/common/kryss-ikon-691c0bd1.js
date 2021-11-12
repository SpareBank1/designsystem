import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-4f955397.js';
import { r as react } from './index-09a9c4ff.js';
import { p as propTypes } from './index-8de1816d.js';

var kryssIkon = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;


var PropTypes = propTypes;
var svg = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "M18.77,0c-3.562,0-7.125,1.347-9.834,4.044l-4.429,4.439c-5.381,5.394-5.381,14.25,0,19.68l71.19,71.83-71.66,71.83c-5.381,5.394-5.381,14.25,0,19.68l4.429,4.439c5.381,5.394,14.22,5.394,19.64,0l71.66-71.83,71.65,71.83c5.381,5.394,14.23,5.394,19.65,0l4.429-4.439c5.381-5.394,5.381-14.25,0-19.68l-71.19-71.83,71.66-71.83c5.381-4.914,5.381-13.78,0-19.21l-4.429-4.423c-5.381-5.394-14.22-5.394-19.64,0l-72.13,71.34-71.17-71.83c-2.691-2.697-6.257-4.044-9.819-4.044z" }));
var Icon = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign({}, svg.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg.props.children));
};
Icon.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon.displayName = 'KryssIkon';
exports["default"] = Icon;
});

var KryssIkon = /*@__PURE__*/getDefaultExportFromCjs(kryssIkon);

export { KryssIkon as K };
