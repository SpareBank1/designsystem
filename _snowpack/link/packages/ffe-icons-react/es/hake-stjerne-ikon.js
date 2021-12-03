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
    React.createElement("path", { d: "m99.9919,0.00570219c-1.02442,0-2.0467,0.31452-2.9375,0.9375l-23.6875,17.25h-29.2188c-2.13793,0-4.09986,1.42657-4.8125,3.5625l-9.09375,27.7812-23.6875,17.0938c-1.78161,1.24596-2.49389,3.55157-1.78125,5.6875l9.06255,27.7498-9.06245,27.781c-0.712643,2.13593-0.0003573,4.44154,1.78125,5.6875l23.5,16.9062,9.09375,27.7812c0.712643,2.13593,2.67457,3.5625,4.8125,3.5625h29.2188l23.6875,17.25c1.78161,1.24596,4.28089,1.25547,6.0625,0.1875l23.6875-17.25h29.2188c2.13793,0,4.09985-1.42657,4.8125-3.5625l9.09375-27.7812,23.6875-17.0938c1.7816-1.24596,2.4939-3.55157,1.78125-5.6875l-9.0625-27.7812,9.0625-27.75c0.71265-2.13593,0.00035-4.44154-1.78125-5.6875l-23.6875-17.0938-9.09375-27.7812c-0.71265-2.13593-2.67457-3.5625-4.8125-3.5625h-29.2188l-23.6875-17.25c-0.8908-0.62298-1.91308-0.9375-2.9375-0.9375zm-0.09375,14.2812,22.625,16.1875,27.9688,0,8.5625,26.5312,22.625,16.375-8.71875,26.5312,8.71875,26.5-22.625,16.375-8.5625,26.5312-27.9688,0-22.625,16.375-22.625-16.375-27.9688,0.1875-8.5625-26.5312-22.625-16.375,8.5625-26.5312-8.5625-26.5,22.625-16.375,8.5625-26.5312,27.9688,0,22.625-16.375zm31.5308,56.7813-44.7184,44.6878-18.5312-18.344l-8.71875,8.90625,27.25,27.0625,53.625-53.5937-8.90625-8.71875z" }));
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
Icon.displayName = 'HakeStjerneIkon';
export default Icon;
