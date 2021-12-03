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
    React.createElement("path", { d: "M60.28,0c-26.39,0-53.28,9.03-53.28,26.06v33.82,33.81,33.81c0,13.9,18.1,22.5,39.31,25v21.4c0,17.1,26.93,26.1,53.31,26.1s53.28-9,53.28-26.1v-12.6c21.5-2.6,40.1-11.1,40.1-25.3v-33.6-33.74c0-17.04-26.6-26.07-53.3-26.07-9,0-18.1,1.03-26.1,3.1v-19.63c0-17.03-26.93-26.06-53.32-26.06zm0,15.75c23.54,0,37.01,7.21,37.78,10.56-0.77,3.1-14.24,10.6-37.78,10.6s-37.23-7.5-37.75-10.6c0.78-3.35,14.21-10.56,37.75-10.56zm-37.75,29.16c10.09,4.64,24.04,7.21,37.75,7.21s27.69-2.31,37.78-7.21v6.71c-6.46,3.88-10.88,8.78-11.65,14.97-6.47,2.07-15.26,3.6-26.13,3.6-23.54,0-37.23-7.47-37.75-10.57v-14.71zm117.2,13.15c23.6,0,37.3,7.5,37.8,10.6-0.8,3.09-14.2,10.56-37.8,10.56-23.5,0-37.2-7.47-37.8-10.56,0.6-3.1,14.3-10.6,37.8-10.6zm-117.2,20.66c10.09,4.64,24.04,7.22,37.75,7.22,9.06,0,18.11-1.03,26.13-3.1v17.86c-6.47,2-15,3.5-26.13,3.5-23.54,0-37.23-7.42-37.75-10.51v-14.97zm79.37,8.75c10.1,4.64,24.1,7.25,37.8,7.25s27.7-2.35,37.8-7.25v14.93c-0.5,3.1-14.2,10.6-37.8,10.6-23.5,0-37.2-7.5-37.8-10.6v-14.93zm-79.37,25.03c10.09,4.7,24.04,7.3,37.75,7.3,2.07,0,4.15-0.1,6.22-0.3-10.61,3.8-18.1,9.5-19.91,17.5-15-2-23.54-7.2-24.06-9.5v-15zm155,8.5v15c-0.5,2.6-9.1,7.7-24.6,9.8v-5.7c0-4.6-2.1-8.7-5.4-12.1,11.1-0.8,21.7-3.1,30-7zm-77.88,8.8c23.58,0,36.98,7.2,37.78,10.6-0.8,3.1-14.2,10.6-37.78,10.6-23.54-0.3-37.26-7.5-37.78-10.6,0.52-3.1,14.24-10.6,37.78-10.6zm-37.78,29.2c10.09,4.6,24.07,7.2,37.78,7.2,13.68,0,27.68-2.3,37.78-7.2v14.9c-0.5,3.1-14.2,10.6-37.78,10.6-23.54,0-37.26-7.5-37.78-10.6v-14.9z" }));
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
Icon.displayName = 'MynterTreStablerIkon';
export default Icon;
