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
    React.createElement("path", { d: "M136.2 53.5c2.9-0.1 6.1 1.5 5.2 4.6 -15 26.4-30.5 52.6-45.8 78.9 -2.4 5.3-7.4 12.6-13.9 7.6 -9-11.5-17-23.8-25.6-35.6 -5.5-4.7 0.6-10.4 6.2-7.8 8.4 10.6 16 21.9 24 32.8l45.8-78.5C132.8 54.3 134.4 53.6 136.2 53.5L136.2 53.5z" }),
    React.createElement("path", { d: "M100 12c48.5 0 88 39.5 88 88s-39.5 88-88 88 -88-39.5-88-88S51.5 12 100 12M100 0C44.8 0 0 44.8 0 100c0 55.2 44.8 100 100 100 55.2 0 100-44.8 100-100C200 44.8 155.2 0 100 0L100 0z" }));
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
Icon.displayName = 'HakeSirkelIkon';
export default Icon;
