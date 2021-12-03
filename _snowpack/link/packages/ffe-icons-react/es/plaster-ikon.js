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
    React.createElement("path", { d: "M51.676,0c-10.006,0-19.182,3.2526-26.738,9.375-9.393,7.755-14.727,19.209-14.932,32.27-0.2038,12.653,4.48,25.472,13.465,36.289l83.149,100.83c11.23,13.47,26.49,21.24,41.6,21.24,10.006,0,19.246-3.2526,26.801-9.375,19.399-15.918,19.973-45.918,1.5953-68.367l-83.275-101.01c-11.435-13.469-26.559-21.237-41.669-21.237zm0,13.903c11.027,0,22.232,5.8673,31.013,16.071l83.151,101.28c13.477,16.327,13.669,37.959,0.19143,48.98-4.9008,4.0816-11.065,6.3138-17.804,6.3138-11.231,0-22.424-5.9184-31.204-16.327l-83.158-100.82c-6.738-8.368-10.414-17.972-10.21-27.36,0.204-8.98,3.689-16.709,10.019-21.811,5.105-4.082,11.256-6.314,17.995-6.314zm45.944,50.191-33.118,27.36,36.568,44.066,33.11-27.36-36.56-44.066zm-1.659,16.518,21.629,26.148-15.06,12.44-21.437-26.152,14.868-12.436z" }));
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
Icon.displayName = 'PlasterIkon';
export default Icon;
