"use strict";
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
exports.__esModule = true;
var React = require("react");
var prop_types_1 = require("prop-types");
var PropTypes = require("prop-types");
var svg = React.createElement("svg", { viewBox: "0 0 200 200" },
    React.createElement("path", { d: "m56.3,46.3l0,0c5,0 7.5,-2.5 7.5,-6.3l0,-33.7c0,-3.8 -3.8,-6.3 -7.5,-6.3l0,0c-3.8,0 -7.5,2.5 -7.5,6.3l0,32.5c0,3.7 3.7,7.5 7.5,7.5l0,0zm87.5,0l0,0c5,0 7.5,-2.5 7.5,-6.3l0,-33.7c0,-3.8 -2.5,-6.3 -6.3,-6.3l-1.2,0c-3.8,0 -6.3,2.5 -6.3,6.3l0,32.5c-1.2,3.7 2.5,7.5 6.3,7.5l0,0z" }),
    React.createElement("path", { d: "m85,118.8c2.5,2.5 3.8,2.5 6.3,0l1.2,-1.3c1.3,-1.2 1.3,-2.5 1.3,-2.5l0,0l0,3.8l0,23.7l-7.5,0c-2.5,0 -3.8,1.3 -3.8,3.8l0,3.7c0,2.5 1.3,3.8 3.8,3.8l28.7,0c2.5,0 3.8,-1.3 3.8,-3.8l0,-3.7c0,-2.5 -1.3,-3.8 -3.8,-3.8l-7.5,0l0,-38.7c0,-2.5 -1.2,-3.8 -5,-3.8l-3.7,0c-2.5,0 -3.8,0 -5,1.3l-10,10c-2.5,1.2 -2.5,3.7 0,6.2l1.2,1.3l0,0zm101.3,-95l-16.3,0l0,15c0,13.7 -11.2,25 -25,25l-1.2,0c-13.8,0 -25,-11.3 -25,-25l0,-15l-36.3,0l0,15c0,13.7 -11.2,25 -25,25l-1.2,0c-13.8,0 -25,-11.3 -25,-25l0,-15l-17.5,0c-7.5,0 -13.8,6.2 -13.8,13.7l0,148.8c0,7.5 6.3,13.7 13.8,13.7l172.5,0c7.5,0 13.7,-6.2 13.7,-13.7l0,-148.8c0,-7.5 -6.2,-13.7 -13.7,-13.7l0,0zm-2.5,160l-167.5,0l0,-103.8l166.2,0l0,103.8l1.3,0z" }));
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
    desc: prop_types_1.string,
    title: prop_types_1.string,
    focusable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: prop_types_1.string
};
Icon.displayName = 'KalenderIkon';
exports["default"] = Icon;
