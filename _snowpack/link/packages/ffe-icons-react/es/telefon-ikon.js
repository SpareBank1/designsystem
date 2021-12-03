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
    React.createElement("path", { d: "m162.49-0.0004448c-2.8954,0-5.8118,1.113-8.039,3.3391l-39.534,39.513c-4.4545,4.4522-4.4545,11.548,0,16l11.798,11.826c2.7841,2.7826,2.7841,7.4435,0,10.226l-45.773,45.736c-2.7841,2.6713-7.4474,2.7826-10.231,0l-11.798-11.79c-4.4545-4.4522-11.589-4.4522-16.043,0l-39.534,39.52c-4.4545,4.4522-4.4545,11.583,0,16.035l19.141,19.13c6.6818,6.6783,15.591,10.365,25.057,10.365v0.10435c7.35,0,14.484-2.233,20.498-6.5739,18.598-13.245,39.541-29.259,67.827-57.531,28.286-28.271,44.42-49.315,57.561-67.791,10.023-14.136,8.4566-33.391-3.7933-45.635l-19.14-19.135c-2.2272-2.2261-5.1088-3.3391-8.0042-3.3391zm-0.1392,15.13,17.261,17.252c7.4613,7.4574,8.4914,19.012,2.3665,27.583-12.807,18.031-28.523,38.525-56.03,66.018-27.618,27.492-48.011,43.2-66.052,56-3.675,2.6713-8.0042,4-12.459,4-5.6795,0-11.129-2.3583-15.138-6.3652l-17.261-17.252v-0.10435l35.741-35.722,9.9183,9.9131c4.0091,4.007,9.3545,6.2261,15.034,6.2261s11.025-2.2191,15.034-6.2261l45.753-45.737c8.2409-8.2365,8.2409-21.711,0-29.948l-9.9183-9.9131,35.741-35.722z" }));
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
Icon.displayName = 'TelefonIkon';
export default Icon;
