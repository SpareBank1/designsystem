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
var svg = React.createElement("svg", { viewBox: "0 0 38 38", version: "1.1" },
    React.createElement("path", { d: "M19 38C8.51 38 0 29.49 0 19 0 8.51 8.51 0 19 0 29.49 0 38 8.51 38 19 38 29.49 29.49 38 19 38ZM19 36C28.39 36 36 28.39 36 19 36 9.61 28.39 2 19 2 9.61 2 2 9.61 2 19 2 28.39 9.61 36 19 36Z" }),
    React.createElement("polygon", { points: "1 20 1 18 37 18 37 20" }),
    React.createElement("polygon", { points: "20 37 18 37 18 1 20 1" }),
    React.createElement("path", { d: "M21.78 36.63L21.15 37.41 19.6 36.15 20.23 35.37C24.76 29.79 27.01 24.25 27.01 18.75 27.01 13.25 24.76 7.71 20.23 2.13L19.6 1.35 21.15 0.09 21.78 0.87C26.59 6.79 29.01 12.75 29.01 18.75 29.01 24.75 26.59 30.71 21.78 36.63Z" }),
    React.createElement("path", { d: "M11.18 36.63L10.55 37.41 9 36.15 9.63 35.37C14.16 29.79 16.41 24.25 16.41 18.75 16.41 13.25 14.16 7.71 9.63 2.13L9 1.35 10.55 0.09 11.18 0.87C15.99 6.79 18.41 12.75 18.41 18.75 18.41 24.75 15.99 30.71 11.18 36.63Z", transform: "translate(13.703313, 18.750000) scale(-1, 1) translate(-13.703313, -18.750000) " }));
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
Icon.displayName = 'GlobeIkon';
export default Icon;
