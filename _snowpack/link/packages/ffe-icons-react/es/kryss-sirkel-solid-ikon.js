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
    React.createElement("path", { d: "M99.98,4.99999999e-06 C155.08,4.99999997e-06 199.98,44.890005 199.98,100.000005 C199.98,155.100005 155.1,200.000005 99.98,200.000005 C44.86,200.000005 0,155.100005 0,100.000005 C0,44.890005 44.86,4.99999999e-06 99.98,4.99999999e-06 Z M65.84,60.070005 C64.351,60.070005 62.868,60.640705 61.699,61.810005 L59.785,63.689005 C57.446,65.916005 57.446,69.598005 59.785,71.937005 L89.855,102.007005 L59.785,132.077005 C57.446,134.304005 57.446,137.986005 59.785,140.325005 L61.699,142.204005 C63.926,144.543005 67.573,144.543005 69.912,142.204005 L99.982,112.134005 L130.052,142.204005 C132.279,144.543005 135.961,144.543005 138.3,142.204005 L140.214,140.325005 C142.553,138.098005 142.553,134.416005 140.214,132.077005 L110.144,102.007005 L140.214,71.937005 C142.553,69.710005 142.553,66.028005 140.214,63.689005 L138.3,61.810005 C136.073,59.471005 132.391,59.471005 130.052,61.810005 L100.032,91.880005 L69.962,61.820005 C68.848,60.651005 67.38,60.080005 65.89,60.080005 L65.84,60.070005 Z" }));
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
Icon.displayName = 'KryssSirkelSolidIkon';
export default Icon;
