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
    React.createElement("g", { transform: "matrix(2.3301 0 0 2.3301 -102.95 -108.32)" },
        React.createElement("path", { d: "m77.8 64.2 32.2-6.4c1.7-0.3 3.3 0.3 4.2 1.6 0.7 0.9 1.8 1.4 2.9 1.1l0.4-0.1c1.9-0.4 2.9-2.7 1.7-4.3-2.3-3.3-6.3-5-10.4-4.2l-59.8 11.4c-2.7 0.5-4.6 2.8-4.6 5.6v52.5c0 3.1 2.5 5.7 5.7 5.7h74c3.1 0 5.7-2.5 5.7-5.7v-51.6c0-3.1-2.5-5.7-5.7-5.7h-46.3zm45.9 36.1h-19.6c-2.1 0-3.8-1.7-3.8-3.8v-6c0-2.1 1.7-3.8 3.8-3.8h19.6v13.6zm-19.5-19.6c-5.4 0-9.8 4.4-9.8 9.8v6c0 5.4 4.4 9.8 9.8 9.8h19.6v14.7h-73.4v-50.8h73.4v10.5h-19.6z" }),
        React.createElement("circle", { cy: "93.5", cx: "108.6", r: "3.5" })));
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
Icon.displayName = 'LommebokIkon';
export default Icon;
