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
    React.createElement("path", { d: "M100,0c-31.25,0-50,26.0938-50,52.3438v17.5781c0,3.75,3.59375,8.98438,8.59375,8.98438h7.8125c5,0,8.59375-5.23438,8.59375-8.98438v-18.75c0-13.75,11.25-26.1719,25-26.1719s25,11.1719,25,26.1719v18.75c0,5,3.59375,8.98438,8.59375,8.98438h7.8125c5,0,8.59375-3.98438,8.59375-8.98438v-17.5781c0-26.25-18.75-52.3438-50-52.3438zm-57.4219,100c-10,0-17.5781,7.578-17.5781,17.578v64.8437c0,10,7.5781,17.578,17.5781,17.578h114.844c10,0,17.5781-7.57812,17.5781-17.5781v-64.8437c0-10-7.578-17.578-17.578-17.578h-114.844z" }));
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
Icon.displayName = 'HengelasIkon';
export default Icon;
