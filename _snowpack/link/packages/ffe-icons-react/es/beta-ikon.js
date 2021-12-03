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
    React.createElement("path", { d: "m 79.169028,64.35338 c -3.703687,0 -5.556435,2.084218 -5.556435,5.556429 l -0.230576,0 0,59.949821 c 0,3.70369 2.079708,5.55643 5.551913,5.55643 l 20.602669,0 c 14.120311,0 27.085921,-5.78521 27.085921,-21.29439 0,-6.24997 -3.01105,-13.42678 -11.11287,-15.973048 l 0,-0.23058 c 5.55553,-3.009243 8.3324,-9.027745 8.3324,-15.046231 0,-12.036991 -9.95457,-18.518431 -24.074872,-18.518431 l -20.59815,0 z m 12.035175,15.046218 8.562975,0 c 4.629602,0 6.483252,2.776871 6.483252,6.017591 0,3.240735 -1.85003,6.483262 -6.24816,6.483262 l 0,0.230581 -8.798067,0 0,-12.731434 z m -0.230576,26.620262 10.647193,0 c 5.09257,0 7.40558,3.23981 7.40558,7.17497 0,3.93518 -2.54359,7.40558 -7.63615,7.40558 l 0,0.23509 -10.416623,0 0,-14.81564 z" }),
    React.createElement("path", { d: "M100,200c-55.08,0-100-44.9-100-100,0-55.08,44.92-100,100-100,55.1,0,100,44.92,100,100s-44.92,100-100,100zm0-186.3c-47.6,0-86.26,38.66-86.26,86.26s38.66,86.26,86.26,86.26,86.26-38.66,86.26-86.26-38.66-86.26-86.26-86.26z" }));
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
Icon.displayName = 'BetaIkon';
export default Icon;
