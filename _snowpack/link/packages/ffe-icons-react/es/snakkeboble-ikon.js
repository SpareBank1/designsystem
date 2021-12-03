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
    React.createElement("path", { d: "m54.8 2.1c-29.3 0-52.6 22.8-52.6 51.3l0 46.7c0 28.5 23.3 51.3 52.2 51.3l0 37c0 5.3 6.3 10.4 12.9 10.4 2.9 0 6.2-1.1 8.7-3.2l53.8-44.2 16.4 0c29.3 0 52.6-22.8 52.6-51.3l0-47C198.5 25.3 175.1 2.1 146.2 2.1l-91.4 0zm-0.5 17.4 91.9 0c19 0 34.7 15.3 34.7 33.8l0 46.7c0 18.5-15.7 33.8-34.7 33.8l-22.7 0-5.1 4.2-46.5 37.8 0-42-17.9 0c-19 0-34.4-15.3-34.4-33.8l0-46.7c0-18.5 15.7-33.8 34.7-33.8z" }));
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
Icon.displayName = 'SnakkebobleIkon';
export default Icon;
