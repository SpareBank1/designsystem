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
    React.createElement("path", { fill: "none", d: "M-1-1h582v402H-1z" }),
    React.createElement("g", null,
        React.createElement("path", { d: "M141.56 20.853c-5.325 0-9.79 4.296-9.79 9.792v4.123l-12.54-10.305c-3.606-2.92-8.586-2.923-12.193-.175L82.65 43.698l-1.204-3.777c-.344-1.03-1.372-1.717-2.402-1.717H63.928L51.734 29.27c-.86-.687-2.063-.687-2.922 0L36.62 38.203H21.505c-1.03 0-2.06.687-2.405 1.718l-4.638 14.254-12.194 8.76c-.86.686-1.202 1.72-.86 2.75l.518 1.888 4.122 12.536-.174.517-4.465 13.74c-.344 1.03 0 2.232.858 2.748l12.194 8.758 4.64 14.258c.343 1.03 1.374 1.718 2.404 1.718H36.62l12.192 8.93v38.82c0 5.323 4.296 9.787 9.792 9.787h106.83c5.324 0 9.792-4.292 9.792-9.788v-64.408l-12.023-9.792v72.136H60.835v-43.108l3.093-2.234H78.87c1.03 0 2.06-.687 2.404-1.718l4.64-14.253 12.194-8.76c.858-.686 1.202-1.72.858-2.75l-4.465-14.6 4.638-14.252c.343-1.03 0-2.232-.86-2.748l-10.82-7.903L113.22 34.94l30.916 25.245v-27.31h18.892v42.768L190.683 97.8c2.062 1.718 5.153 1.374 6.87-.687l1.373-1.718c1.545-2.06 1.202-5.153-.86-6.87L174.88 69.977V30.645c0-5.324-4.292-9.792-9.788-9.792H141.56zm-91.2 19.752l10.475 7.558h12.882l.687 2.063 3.264 10.13 1.718 1.205 8.588 6.354-3.952 12.194 3.952 12.197-10.477 7.555-3.95 12.197H60.664l-5.667 4.294-4.64 3.436-1.546-1.033-8.93-6.525h-12.88L23.048 99.86l-10.477-7.555 3.78-11.68.172-.517-3.952-12.194.346-.17 10.13-7.387L27 48.163h12.883l10.476-7.558zm14.168 25.162c-.73 0-1.46.26-1.975.775L43.833 85.09l-5.668-5.666c-1.03-1.03-2.92-1.03-3.952 0l-3.09 3.09c-1.03 1.03-1.03 2.92 0 3.95l10.82 10.82c1.03 1.03 2.92 1.03 3.95 0l23.704-23.7c1.03-1.03 1.03-2.922 0-3.952l-3.093-3.09c-.515-.515-1.246-.775-1.976-.775z" })));
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
Icon.displayName = 'HusStjerneIkon';
export default Icon;
