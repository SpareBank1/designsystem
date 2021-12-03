var __assign = (this && this.__assign) || function () {
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
var __rest = (this && this.__rest) || function (s, e) {
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
import * as React from '../../../../pkg/react.js';
import { string } from '../../../../pkg/prop-types.js';
import * as PropTypes from '../../../../pkg/prop-types.js';
var svg = React.createElement("svg", { viewBox: "0 0 200 200" },
    React.createElement("g", { transform: "matrix(2.3091 0 0 2.3091 -110.37 -113.7)" },
        React.createElement("path", { d: "m82.623 110.42v-2.76c0-18.359 20.999-20.639 20.999-36.479 0-7.68-6.479-13.799-15.72-13.799-5.279 0-9.72 2.039-12.119 3.479-1.561 0.84-3.12 0.84-4.08-0.72l-0.96-1.44c-1.2-1.56-1.08-3 0.601-4.08 2.879-1.92 8.999-5.039 16.919-5.039 13.68 0 23.999 8.76 23.999 21.239 0 19.559-20.999 21.599-21.479 37.198l-0.12 2.88c-0.119 1.68-0.96 2.52-2.76 2.52h-2.279c-1.921 0.001-3.001-1.079-3.001-2.999zm-0.601 18.6c0-1.92 0.96-3 2.88-3h3.601c1.92 0 2.88 1.08 2.88 3v3.48c0 1.92-0.96 3-2.88 3h-3.601c-1.92 0-2.88-1.08-2.88-3v-3.48z" })));
var Icon = function (_a) {
    var desc = _a.desc, title = _a.title, iconName = _a.iconName, rest = __rest(_a, ["desc", "title", "iconName"]);
    return (React.createElement("svg", __assign({}, svg.props, rest),
        title &&
            React.createElement("title", null, title),
        desc &&
            React.createElement("desc", null, desc),
        svg.props.children));
};
Icon.propTypes = {
    desc: string,
    title: string,
    focusable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: string
};
Icon.displayName = 'SporsmalstegnIkon';
export default Icon;
