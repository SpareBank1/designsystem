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
    React.createElement("path", { d: "m74.406939,25.691406a19.463365,19.463365 0 0 0 -13.370105,5.698733l-54.357147,54.357147a19.463365,19.463365 0 0 0 0,27.616937l54.357147,54.357147a19.463365,19.463365 0 0 0 33.315671,-13.808469l0,-23.342888c11.271049,-1.926898 47.598625,-5.727395 77.371261,18.301701l3.945277,3.506913c9.328388,8.381521 13.808469,2.849367 13.808469,2.849367a61.686594,61.686594 0 0 0 7.452189,-7.671372c5.049954,-6.803411 -2.739776,-14.027651 -2.739776,-14.027651c0,0 -49.912486,-57.822103 -99.837421,-61.590154l0,-26.740209a19.463365,19.463365 0 0 0 -19.945566,-19.507202z" }));
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
Icon.displayName = 'SvarPilIkon';
export default Icon;
