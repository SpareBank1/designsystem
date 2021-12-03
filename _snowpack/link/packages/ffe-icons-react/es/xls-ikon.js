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
    React.createElement("path", { d: "m0,17.5l0,165c0,10 7.5,17.5 17.5,17.5l165,0c10,0 17.5,-7.5 17.5,-17.5l0,-165c0,-10 -7.5,-17.5 -17.5,-17.5l-165,0c-10,0 -17.5,7.5 -17.5,17.5zm71.25,113.75l-5,0c-2.5,0 -3.75,-1.25 -3.75,-2.5l-8.75,-15c-1.25,-2.5 -3.75,-6.25 -3.75,-6.25s-1.25,3.75 -3.75,7.5l-8.75,13.75c-1.25,1.25 -2.5,2.5 -3.75,2.5l-3.75,0c-2.5,0 -3.75,-1.25 -2.5,-3.75l16.25,-27.5l-16.25,-26.25c-1.25,-2.5 0,-3.75 2.5,-3.75l5,0c2.5,0 3.75,1.25 3.75,2.5l7.5,12.5c2.5,2.5 3.75,6.25 3.75,6.25s1.25,-3.75 3.75,-7.5l7.5,-12.5c1.25,-1.25 2.5,-2.5 5,-2.5l5,0c2.5,0 3.75,2.5 2.5,3.75l-16.25,27.5l16.25,27.5c1.25,1.25 0,3.75 -2.5,3.75zm53.75,-3.75c0,2.5 -1.25,3.75 -3.75,3.75l-30,0c-2.5,0 -3.75,-1.25 -3.75,-3.75l0,-55c0,-2.5 1.25,-3.75 3.75,-3.75l3.75,0c2.5,0 3.75,1.25 3.75,3.75l0,48.75l23.75,0c1.25,0 2.5,1.25 2.5,3.75l0,2.5zm28.75,5c-8.75,0 -16.25,-3.75 -18.75,-6.25c-1.25,-1.25 -2.5,-2.5 0,-5l2.5,-2.5c1.25,-2.5 2.5,-2.5 5,-1.25s6.25,5 12.5,5s8.75,-2.5 8.75,-7.5c0,-11.25 -28.75,-8.75 -28.75,-28.75c0,-11.25 8.75,-17.5 21.25,-17.5c7.5,0 13.75,2.5 16.25,5c2.5,1.25 2.5,2.5 1.25,5l-1.25,2.5c-1.25,2.5 -3.75,2.5 -5,1.25c-2.5,-1.25 -6.25,-3.75 -11.25,-3.75c-6.25,0 -10,2.5 -10,7.5c0,11.25 28.75,8.75 28.75,28.75c-1.25,8.75 -8.75,17.5 -21.25,17.5z" }));
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
Icon.displayName = 'XlsIkon';
export default Icon;
