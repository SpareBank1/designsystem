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
    React.createElement("path", { d: "M 162.62496,0.45951689 C 156.75569,0.561918 150.97848,2.9628501 146.78146,7.1598718 L 21.010218,132.05862 1.2930373,181.753 c -4.0291488,10.29662 6.2796901,20.60552 16.5763957,16.57631 L 67.563725,178.64702 193.36985,53.713378 c 4.70062,-4.47683 6.92419,-10.50377 6.70031,-16.995173 -0.22375,-6.043723 -2.90101,-11.416065 -7.15407,-15.669059 L 179.48053,7.6135417 c -4.2529,-4.2529821 -9.84917,-6.9301835 -15.66897,-7.15402481 -0.39177,-0.0125112 -0.79525,-0.006251 -1.1866,0 z m 0.5235,14.44763611 c 2.12642,0 4.22605,0.771259 5.793,2.338153 l 14.34291,14.308048 c 1.56691,1.566882 2.44286,3.589493 2.44286,5.8279 0,2.238425 -0.87595,4.261035 -2.44286,5.827921 l -8.02646,7.956666 -25.96383,-25.963864 8.0265,-7.956671 c 1.56681,-1.566894 3.70133,-2.338153 5.82788,-2.338153 z m -24.18409,20.554741 25.9638,25.963865 -92.897536,92.234571 0,-2.12874 c 0,-3.3576 -2.700129,-6.24674 -6.2816,-6.24674 l -11.865204,0 0,-11.86518 c 0,-3.35763 -2.665216,-6.28163 -6.246682,-6.28163 l -1.256317,0 92.583539,-91.676146 z M 32.666045,141.69041 l 6.909747,0 0,11.86521 c 0,3.35754 2.700113,6.2816 6.281571,6.2816 l 11.865208,0 0,6.94463 -35.456037,14.02892 -3.489768,-3.48987 13.889279,-35.63049 z" }));
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
Icon.displayName = 'BlyantIkon';
export default Icon;
