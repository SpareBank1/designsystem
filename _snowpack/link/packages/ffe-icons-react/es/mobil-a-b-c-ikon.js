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
    React.createElement("path", { d: "M45.31,0c-6.9,0-12.31,5.61-12.31,12.31v175.4c0,6.7,5.41,12.3,12.31,12.3h109.4c6.7,0,12.3-5.4,12.3-12.3v-175.4c0-6.7-5.4-12.31-12.3-12.31h-109.4zm1.72,14.06h105.8v146.1h-105.8v-146.1zm47.03,63.78c-1.51,0-2.37,0.87-2.37,2.38h0.22v26.18c0,1.5,0.86,2.4,2.37,2.4h2.16c1.51,0,2.37-0.9,2.37-2v-0.2-0.4s1.49,3,6.29,3c5.6,0,10.1-4.6,10.1-11.7,0-6.7-4.1-11.44-9.9-11.44-4.1,0-6.05,2.82-6.05,2.82v-1.97-6.69c0-1.51-0.86-2.38-2.37-2.38h-2.82zm-18.56,8c-3.24,0-5.81,0.86-7.53,1.72-1.3,0.65-1.52,1.96-0.88,3.25l0.22,1.28c0.65,1.52,1.71,1.75,3.22,1.1,1.3-0.65,2.62-1.1,4.13-1.1,1.72,0,3.22,0.46,3.22,2.41v0.41h-0.63c-5.39,0-12.53,1.54-12.53,7.59,0,3.7,3.03,6.7,7.34,6.7,4.32,0,6.47-3.5,6.47-3.5v0.5,0.2c0,1.5,0.87,2.4,2.38,2.4h2.15c1.51,0,2.38-0.9,2.38-2.4v-11.49c0-5.63-3.9-9.07-9.94-9.07zm56.1,0c-8,0-12.3,5.82-12.3,11.66,0,6.1,4.3,11.7,12.3,11.7,3.7,0,6.5-1.3,8-2.4,1.1-0.9,1.3-1.9,0.6-3.2l-0.6-1.1c-0.7-1.5-1.7-1.7-3.3-0.9-1,0.7-2.5,1.3-4.1,1.3-3.8,0-5.5-2.99-5.5-5.59,0-2.81,1.9-5.4,5.3-5.4,1.3,0,2.4,0.41,3.3,0.84,1.5,0.65,2.4,0.64,3.2-0.66l0.7-1.06c0.8-1.3,0.8-2.38-0.5-3.25-1.3-0.86-3.6-1.94-7.1-1.94zm-28.3,6.47c2.6,0,4.4,2.17,4.4,5.41,0,3.48-2.2,5.38-4.6,5.38-2.8,0-4.28-2.6-4.07-5.6,0-3.46,1.97-5.19,4.27-5.19zm-25.86,6.72h0.65v0.66c0,1.71-1.71,3.91-3.87,3.91-1.51,0-2.15-0.9-1.94-2,0-1.92,2.78-2.57,5.16-2.57zm14.68,72.17h15.28v15.2h-15.28v-15.2z" }));
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
Icon.displayName = 'MobilABCIkon';
export default Icon;
