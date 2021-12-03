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
var svg = React.createElement("svg", { viewBox: "0 0 119 82" },
    React.createElement("path", { d: "M65.5 61.9C61.9 61.9 59 64.7 59 68.3 59 71.8 61.9 74.7 65.5 74.7 69 74.7 71.9 71.8 71.9 68.3 71.9 64.7 69 61.9 65.5 61.9M65.5 81.7C58.1 81.7 52 75.7 52 68.3 52 60.9 58.1 54.9 65.5 54.9 72.9 54.9 78.9 60.9 78.9 68.3 78.9 75.7 72.9 81.7 65.5 81.7M21.3 71.8L3.2 71.8C1.6 71.8 0.4 70.5 0.4 69L0.4 67.6C0.4 66.1 1.6 64.8 3.2 64.8L21.3 64.8 21.3 71.8ZM113.2 71.7L75.4 71.8 75.4 64.8 111.9 64.8 111.9 21.4C111.9 13.8 105.7 7.6 98.1 7.6L34.9 7.6C27.3 7.6 21.2 13.8 21.2 21.4L21.2 64.8 54.8 64.8 54.8 71.8 14.2 71.8 14.2 21.4C14.2 9.9 23.5 0.6 34.9 0.6L98.1 0.6C109.7 0.6 118.9 9.8 118.9 21.4L118.9 66.1C118.9 69.2 116.4 71.7 113.2 71.7M36.1 36.2L48.2 36.2 48.2 24.1 36.1 24.1 36.1 36.2ZM49.1 42.6L35.4 42.6C32.2 42.6 29.7 40.1 29.7 37L29.7 23.2C29.7 20.1 32.2 17.6 35.4 17.6L49.1 17.6C52.2 17.6 54.8 20.1 54.8 23.2L54.8 37C54.8 40.1 52.2 42.6 49.1 42.6L49.1 42.6ZM69.8 36.2L96.5 36.2 96.5 24.1 69.8 24.1 69.8 36.2ZM97.4 42.6L69 42.6C65.9 42.6 63.3 40.1 63.3 37L63.3 23.2C63.3 20.1 65.9 17.6 69 17.6L97.4 17.6C100.6 17.6 103.1 20.1 103.1 23.2L103.1 37C103.1 40.1 100.6 42.6 97.4 42.6L97.4 42.6Z" }));
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
Icon.displayName = 'CampingvognIkon';
export default Icon;
