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
    React.createElement("path", { d: "m97.521 0.30859c-24.701 0-44.724 20.025-44.724 44.724v1.002c0 3.179 2.577 5.756 5.754 5.756h1.082v7.926c0 21.197 17.246 38.443 38.445 38.443h0.635c21.197 0 38.447-17.244 38.447-38.443v-8.594h27.63c3.18 0 5.75-2.577 5.75-5.756v-0.672c0-3.175-2.57-5.752-5.75-5.752h-22.21c-2.98-21.79-21.7-38.634-44.295-38.634l-0.764-0.00041zm-0.003 14.211h0.765c14.737 0 27.067 10.508 29.897 24.423h-60.563c2.822-13.932 15.136-24.423 29.901-24.423zm-23.676 36.605h49.098v8.594h0.01c0 13.361-10.88 24.234-24.239 24.234h-0.635c-13.361 0-24.234-10.871-24.234-24.234v-8.594zm-19.311 54.425c-1.185-0.01-2.383 0.36-3.412 1.13-13.498 10.13-21.662 26.17-21.662 43.24v38.26c0 6.36 5.152 11.51 11.508 11.51h115.3c6.36 0 11.52-5.15 11.52-11.51v-38.26c-0.01-17.07-8.17-33.11-21.67-43.24-2.75-2.06-6.69-1.21-8.41 1.76l-1.36 2.35c-1.42 2.47-0.87 5.66 1.4 7.38 9.86 7.47 15.82 19.24 15.82 31.75v35.56h-109.9l0.004-35.56c0-12.51 5.959-24.28 15.818-31.75 2.272-1.72 2.83-4.91 1.401-7.38l-1.36-2.35c-1.074-1.86-3.016-2.88-4.992-2.89z" }));
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
Icon.displayName = 'UngCapsIkon';
export default Icon;
