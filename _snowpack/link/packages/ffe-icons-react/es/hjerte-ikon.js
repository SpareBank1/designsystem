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
    React.createElement("path", { d: "M99.91,185c-5.33,0-10.54-1.6-15.1-4.6-20.87-14.1-58.28-45.5-72.16-67.6-14.54-23.36-16.76-50.36-5.548-70.91,9.328-17.11,26.87-26.89,48.18-26.89,14.32,0,29.65,6.56,44.72,18.89,11.3-9.33,27.2-18.89,44.8-18.89,21.32,0,38.74,9.778,48.18,26.89,11.1,20.33,8.992,47.56-5.551,70.67-13.88,22.11-51.29,53.56-72.16,67.67-4.5,3.1-9.7,4.7-15.1,4.7zm-44.74-154.9c-15.88,0-28.2,6.778-35.19,19.11-8.55,15.56-6.55,36.78,5.22,55.58,11.32,17.89,44.18,47.22,68.05,63.33,3.997,2.556,9.325,2.556,13.1,0,23.65-16.11,56.73-45.56,68.05-63.33,11.77-18.67,13.77-40,5.218-55.56-6.772-12.33-19.32-19.11-35.19-19.11-15.32,0-30.09,10.56-39.63,19.33l-5,4.54-4.99-4.56c-9.55-9-24.09-19.33-39.64-19.33z" }));
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
Icon.displayName = 'HjerteIkon';
export default Icon;
