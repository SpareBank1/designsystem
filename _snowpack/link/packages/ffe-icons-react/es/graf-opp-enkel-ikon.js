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
    React.createElement("path", { d: "M113.786408 129.873786L187.184466 61.5242718 189.320388 63.8543689C192.815534 67.3495146 198.640777 64.8252427 198.640777 59.9708738L198.640777 45.7961165C198.640777 42.6893204 196.116505 40.3592233 193.203883 40.3592233L179.029126 40.3592233C174.174757 40.3592233 171.650485 46.3786408 175.145631 49.6796117L177.475728 52.0097087 109.902913 114.92233 87.5728155 94.1456311C85.4368932 92.2038835 82.1359223 92.2038835 80.1941748 94.1456311L23.6893204 146.378641 5.82524272 146.378641C2.7184466 146.378641 0.388349515 148.902913 0.388349515 151.815534L0.388349515 154.339806C0.388349515 157.446602 2.91262136 159.776699 5.82524272 159.776699L194.174757 159.776699C197.281553 159.776699 199.61165 157.252427 199.61165 154.339806L199.61165 151.815534C199.61165 148.708738 197.087379 146.378641 194.174757 146.378641L43.6893204 146.378641 83.8834951 109.291262 106.407767 130.067961C108.543689 131.815534 111.650485 131.815534 113.786408 129.873786L113.786408 129.873786Z" }));
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
Icon.displayName = 'GrafOppEnkelIkon';
export default Icon;
