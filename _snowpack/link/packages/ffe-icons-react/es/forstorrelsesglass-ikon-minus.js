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
    React.createElement("path", { d: "M82.2 0C60.2 0 39.5 8.6 24 24.2C8.4 39.7 0 60.4 0 82.4C0 104.4 8.4 125.1 24 140.7C39.5 156.2 60.2 164.7 82.2 164.7C100.5 164.7 117.8 158.9 132 148L182 198C184.6 200.6 188.7 200.6 191.3 198L194.3 195C196.8 192.5 196.8 188.4 194.3 185.8L144.6 136.2C157.6 121.2 164.6 102.4 164.6 82.4C164.6 60.4 156 39.7 140.6 24.2C124.8 8.6 104.1 0.2 82.1 0.2L82.2 0ZM82.2 17.3C99.6 17.3 116 24.1 128.2 36.3C140.5 48.7 147.2 65 147.2 82.3C147.2 99.8 140.5 116.3 128.2 128.5C116 140.7 99.6 147.5 82.2 147.5C64.8 147.5 48.5 140.7 36.2 128.5C23.9 116.3 17.2 99.8 17.2 82.5C17.2 65 23.9 48.7 36.2 36.5C48.5 24.3 64.8 17.3 82.2 17.3Z" }),
    React.createElement("rect", { x: "42.8", y: "75", width: "79", height: "16", rx: "4" }));
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
Icon.displayName = 'ForstorrelsesglassIkonMinus';
export default Icon;
