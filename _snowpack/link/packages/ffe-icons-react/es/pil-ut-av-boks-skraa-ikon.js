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
    React.createElement("path", { d: "m130.727,48.448l-8.232,-8.232c-2.44,-2.44 -2.44,-6.398 0,-8.84c0.776,-0.775 1.743,-1.333 2.804,-1.617l50.38,-13.48c3.33,-0.9 6.76,1.08 7.65,4.42c0.28,1.06 0.28,2.17 0,3.23l-13.48,50.38c-0.89,3.33 -4.32,5.31 -7.658,4.42c-1.06,-0.286 -2.028,-0.84 -2.804,-1.62l-7.847,-7.848l-61.3,61.3c-5.474,5.474 -14.355,5.474 -19.83,0l-0.994,-0.996c-5.48,-5.477 -5.48,-14.356 0,-19.83l61.3,-61.3l0.011,0.013zm39.809,59.56c0,-7.74 6.28,-14.02 14.023,-14.02l1.41,0c7.743,0 14.02,6.28 14.02,14.02l0,71.85c0,11.12 -9.014,20.14 -20.135,20.14l-159.719,0c-11.12,0.002 -20.135,-9.01 -20.135,-20.13l0,-159.735c0,-11.12 9.014,-20.133 20.135,-20.133l71.842,0c7.745,0 14.023,6.277 14.023,14.02l0,1.41c0,7.744 -6.278,14.023 -14.023,14.023l-62.524,0l0,141.094l141.094,0l0,-62.527l-0.011,-0.012z" }));
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
Icon.displayName = 'PilUtAvBoksSkraaIkon';
export default Icon;
