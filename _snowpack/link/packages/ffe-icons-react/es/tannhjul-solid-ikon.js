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
    React.createElement("path", { d: "M93.75,0c-3.75,0-7.5,2.5-8.75,6.25l-6.25,18.75c-6.25,1.25-12.5,3.75-17.5,7.5l-17.5-8.75c-3.75-2.5-7.5-1.25-10,1.25l-8.75,8.75c-2.5,2.5-3.75,6.25-1.25,10l8.75,17.5c-3.75,6.25-6.25,11.25-7.5,17.5l-18.75,6.25c-3.75,1.25-6.25,5-6.25,8.75v12.5c0,3.75,2.5,7.5,6.25,8.75l18.75,6.25c1.25,6.25,3.75,12.5,7.5,17.5l-8.75,17.5c-1.25,3.75-1.25,7.5,1.25,10l8.75,8.75c2.5,2.5,6.25,3.75,10,1.25l18.75-8.75c5,2.5,12.5,5,18.75,7.5l6.25,18.75c0,3.75,3.75,6.25,7.5,6.25h12.5c3.75,0,7.5-2.5,8.75-6.25l5-18.75c6.25-1.25,12.5-3.75,18.75-7.5l17.5,8.75c3.75,1.25,7.5,1.25,10-1.25l8.75-8.75c2.5-2.5,3.75-6.25,1.25-10l-8.75-18.75c2.5-5,5-12.5,7.5-18.75l18.75-5c2.5,0,5-3.75,5-7.5v-12.5c0-3.75-2.5-7.5-6.25-8.75l-18.75-6.25c-1.25-6.25-3.75-12.5-7.5-17.5l8.75-17.5c1.25-3.75,1.25-7.5-1.25-10l-8.75-8.75c-2.5-2.5-6.25-3.75-10-1.25l-18.75,8.75c-5-2.5-12.5-5-18.75-7.5l-5-18.75c0-3.75-3.75-6.25-7.5-6.25h-12.5zm6.25,56.25c23.75,0,43.75,18.75,43.75,43.75s-20,43.75-43.75,43.75-43.75-20-43.75-43.75,20-43.75,43.75-43.75z" }));
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
Icon.displayName = 'TannhjulSolidIkon';
export default Icon;
