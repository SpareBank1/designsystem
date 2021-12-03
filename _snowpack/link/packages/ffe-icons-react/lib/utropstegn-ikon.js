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
    React.createElement("path", { d: "M 99.881897,0.6403911 A 16.561559,16.561559 0 0 0 83.588292,17.412148 l 0,93.862982 a 16.561559,16.561559 0 1 0 33.102158,0 l 0,-93.862982 A 16.561559,16.561559 0 0 0 99.881897,0.6403911 z M 100.13937,162.6938 c -9.145783,0 -16.551078,7.4053 -16.551078,16.55107 0,9.1458 7.405295,16.58787 16.551078,16.58787 9.14579,0 16.55108,-7.44207 16.55108,-16.58787 0,-9.14577 -7.40529,-16.55107 -16.55108,-16.55107 z" }));
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
Icon.displayName = 'UtropstegnIkon';
exports["default"] = Icon;
