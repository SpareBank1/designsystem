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
    React.createElement("path", { d: "m143.95769,56.024456c-0.85856,0.06579 -1.71712,0.272574 -2.54737,0.610941l-89.441019,36.04554l-44.29595,4.69955c-5.585346,0.45116 -9.085622,6.156413 -7.123204,11.419903l13.444458,35.19962l138.595845,0l45.28659,-51.883019c5.13248,-5.865042 0.29247,-14.89757 -7.40625,-14.145642l-20.04875,2.114797l-19.48267,-21.335952c-1.81146,-1.917416 -4.40601,-2.923119 -6.98168,-2.725738zm0.33021,10.386003l13.7275,14.991561l-12.31229,1.315873l-10.56687,-12.641786l9.15166,-3.665648zm-19.01093,7.613269l8.34971,9.963043l-45.286584,4.840536l36.936874,-14.803579zm62.64645,14.333624l-39.86163,45.726608l-126.943981,0l-10.283831,-26.92841l177.089442,-18.798198z" }));
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
Icon.displayName = 'BatStorIkon';
export default Icon;
