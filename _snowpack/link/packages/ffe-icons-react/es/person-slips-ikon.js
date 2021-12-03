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
    React.createElement("path", { d: "M99.812,0c-22,0-39.812,17.84-39.812,39.906v13.469c0,22.066,17.812,39.906,39.812,39.906h0.598c22,0,39.78-17.84,39.78-39.906v-13.469c0-22.066-17.78-39.906-39.78-39.906h-0.598zm0.598,14.031h0.59c14.2,0,25.81,11.632,25.81,25.875v13.469c0,14.243-11.61,25.875-25.81,25.875h-0.59c-14.204,0-25.816-11.632-25.816-25.875v-13.469c0-14.243,11.612-25.875,25.816-25.875zm-46.222,87.559c-1.163,0-2.326,0.38-3.376,1.13-14.2,10.63-22.812,27.49-22.812,45.34v40.5c0,6.41,5.206,11.44,11.406,11.44h121.4c6.2,0,11.19-5.22,11.19-11.44v-40.53c0-18.05-8.61-34.71-22.81-45.34-2.6-2.01-6.59-1.2-8.19,1.81l-1.41,2.41c-1.4,2.6-0.79,5.63,1.41,7.43,10.6,8.03,17,20.47,17,33.91v37.69h-116v-37.69c0-13.44,6.4-25.89,17-33.91,2.2-1.8,2.806-5,1.406-7.4l-1.406-2.41c-1-1.88-2.875-2.93-4.812-2.94zm46.622,1.72c-3.598,0-6.016,2.21-6.216,5.22l-4.594,46.53c-0.2,1.41,0.2,2.61,1,3.82l6,8.62c2.2,3.21,7.01,3.21,9.41,0l6-8.62c0.8-1.21,1.2-2.41,1-3.82l-4.6-46.53c-0.2-2.81-2.82-5.22-5.62-5.22h-2.38z" }));
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
Icon.displayName = 'PersonSlipsIkon';
export default Icon;
