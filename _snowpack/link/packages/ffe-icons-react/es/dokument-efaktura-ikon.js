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
    " ",
    React.createElement("path", { d: "M141.84,143.15h-83.064c-3.2815,0-5.7426-2.6585-5.7426-5.726v-1.636c0-3.272,2.6662-5.726,5.7426-5.726h83.063c3.2815,0,5.7426,2.6585,5.7426,5.726v1.636c0.20509,3.272-2.4611,5.726-5.7426,5.726z" }),
    React.createElement("path", { d: "M141.84,170.14h-83.064c-3.2815,0-5.7426-2.6585-5.7426-5.726v-1.636c0-3.272,2.6662-5.726,5.7426-5.726h83.063c3.2815,0,5.7426,2.6585,5.7426,5.726v1.636c0.20509,3.0675-2.4611,5.726-5.7426,5.726z" }),
    React.createElement("path", { d: "m102.67,36.196c18.458,0,28.713,13.088,28.713,30.879,0,2.863-2.4611,5.5215-5.5375,5.5215h-39.581c1.0255,11.452,9.6394,17.587,19.484,17.587,5.9477,0,10.87-2.2495,13.946-4.09,3.0764-1.4315,5.5375-1.227,7.1783,1.8405l1.4357,2.454c1.4357,2.863,1.0255,5.5215-1.8458,7.1575-4.1019,2.6585-11.895,6.544-21.945,6.544-21.535,0-34.866-15.542-34.866-33.947,0-20.041,13.536-33.947,33.02-33.947zm12.716,26.585c-0.2051-8.998-5.7426-14.315-13.126-14.315-8.2038,0-14.151,5.726-15.587,14.315h28.713z" }),
    " ",
    React.createElement("path", { d: "M164.81,0h-129.62c-6.3583,0-11.69,5.1125-11.69,11.656v176.69c0,6.3364,5.127,11.656,11.69,11.656h129.62c6.3604,0,11.69-5.11,11.69-11.66v-176.68c-0.21-6.3394-5.33-11.656-11.69-11.656zm-1.8458,186.5h-126.13v-173.21h126.13v173.21z" }));
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
Icon.displayName = 'DokumentEfakturaIkon';
export default Icon;
