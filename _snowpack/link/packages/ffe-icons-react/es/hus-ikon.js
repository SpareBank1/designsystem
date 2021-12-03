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
var svg = React.createElement("svg", { viewBox: "0 0 200.00001 200.00001" },
    React.createElement("g", { transform: "matrix(1.9446 0 0 1.9446 -75.29 -69.572)" },
        React.createElement("path", { d: "m140.3 80.4-13.5-10.8v-22.9c0-3.1-2.5-5.7-5.7-5.7h-13.7c-3.1 0-5.7 2.5-5.7 5.7v2.4l-7.3-6c-2.1-1.7-5-1.7-7.1-0.1l-47.3 37.4c-1.2 1-1.4 2.8-0.5 4l0.8 1c1 1.2 2.8 1.4 4 0.5l9-7.1 7-5.5 30.5-24.1 18 14.7v-15.9h11v24.9l16.1 12.9c1.2 1 3 0.8 4-0.4l0.8-1c1-1.2 0.8-3-0.4-4z" }),
        React.createElement("path", { d: "m119.9 126.4h-59.5v-41.5l-7 5.5v37.3c0 3.1 2.5 5.7 5.7 5.7h62.2c3.1 0 5.7-2.5 5.7-5.7v-37.6l-7-5.7v42z" })));
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
Icon.displayName = 'HusIkon';
export default Icon;
