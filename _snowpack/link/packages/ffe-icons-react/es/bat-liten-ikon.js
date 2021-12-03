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
    React.createElement("path", { d: "m14.505431,57.499993c-8.010411,0 -14.505431,6.50272 -14.505431,14.52261l0,16.92525c0,5.34945 4.362722,9.66395 9.70584,9.66395l5.012907,0l0,32.782657l-2.399796,0c-2.672412,0 -4.85292,2.13141 -4.85292,4.80528l0,1.44158c0,2.67558 2.182214,4.85867 4.85292,4.85867l13.492184,0l0,-43.888187l1.813179,0l13.492184,37.054017l132.842022,0l24.79789,-44.422107c3.75776,-6.72995 -1.4915,-14.91942 -9.17255,-14.36244l-133.428642,9.66395l0,-14.52262c0,-8.01989 -6.49502,-14.52261 -14.505432,-14.52261l-27.144355,0zm0,11.9598l27.091027,0c1.411293,0 2.559782,1.14985 2.559782,2.56281l0,14.6294l-32.210591,0l0,-14.6294c0,-1.41296 1.148489,-2.56281 2.559782,-2.56281zm171.772039,19.64824l-19.35835,34.597987l-117.430001,0l-8.745922,-24.026377l14.718746,-1.06784l0.639946,0l0.05333,0l0,-0.0534l130.122251,-9.45038l0,0.00001z" }));
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
Icon.displayName = 'BatLitenIkon';
export default Icon;
