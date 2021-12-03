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
    React.createElement("path", { d: "M84.4 0c-22 0-42.7 8.6-58.2 24.2-15.6 15.5-24 36.2-24 58.2s8.4 42.7 24 58.3c15.5 15.5 36.2 24 58.2 24 18.3 0 35.6-5.8 49.8-16.7l50 50c2.6 2.6 6.7 2.6 9.3 0l3-3c2.5-2.5 2.5-6.6 0-9.2l-49.7-49.6c13-15 20-33.8 20-53.8 0-22-8.6-42.7-24-58.2C127 8.6 106.3.2 84.3.2zm0 17.3c17.4 0 33.8 6.8 46 19 12.3 12.4 19 28.7 19 46 0 17.5-6.7 34-19 46.2-12.2 12.2-28.6 19-46 19s-33.7-6.8-46-19-19-28.7-19-46c0-17.5 6.7-33.8 19-46s28.6-19.2 46-19.2z" }));
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
Icon.displayName = 'ForstorrelsesglassIkon';
export default Icon;
