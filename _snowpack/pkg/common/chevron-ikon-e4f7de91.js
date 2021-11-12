import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-4f955397.js';
import { r as react } from './index-09a9c4ff.js';
import { p as propTypes } from './index-8de1816d.js';

var chevronIkon = createCommonjsModule(function (module, exports) {
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
    react.createElement("path", { d: "m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z" }));
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
Icon.displayName = 'ChevronIkon';
exports["default"] = Icon;
});

var ChevronIkon = /*@__PURE__*/getDefaultExportFromCjs(chevronIkon);

export { ChevronIkon as C };
