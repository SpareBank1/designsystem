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
    React.createElement("path", { d: "M62.1 62.6l-38-12.9c-4.2-1.4-6.4-5.9-5-10.1l7.4-22.1c1.4-4.2 5.9-6.4 10.1-5l38 12.9c2.4 0.8 4.2 2.7 5 5L86.2 50 69.1 61.6C67 63 64.5 63.3 62.1 62.6zM71.8 33.2L34.5 20.6l-7.1 21.3 37.3 12.6 11.6-7.8L71.8 33.2z" }),
    React.createElement("polygon", { points: "103 66.8 107.4 59.6 78.3 42 76.8 47.5 74 49.2 " }),
    React.createElement("circle", { cx: "66.7", cy: "43.4", r: "4.3" }),
    React.createElement("path", { d: "M99.3 180.6c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7C94.6 182.7 96.7 180.6 99.3 180.6M99.3 170.6c-8.1 0-14.7 6.6-14.7 14.7 0 8.1 6.6 14.7 14.7 14.7s14.7-6.6 14.7-14.7C114 177.2 107.4 170.6 99.3 170.6L99.3 170.6z" }),
    React.createElement("path", { d: "M152.3 180.6c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7s-4.7-2.1-4.7-4.7C147.6 182.7 149.7 180.6 152.3 180.6M152.3 170.6c-8.1 0-14.7 6.6-14.7 14.7 0 8.1 6.6 14.7 14.7 14.7 8.1 0 14.7-6.6 14.7-14.7C167 177.2 160.4 170.6 152.3 170.6L152.3 170.6z" }),
    React.createElement("path", { d: "M151.9 72.9H99.7V7.9c0-4.3 3.5-7.9 7.9-7.9H144c4.3 0 7.9 3.5 7.9 7.9V72.9zM110.5 62.2h30.6V10.8h-30.6V62.2z" }),
    React.createElement("path", { d: "M169.4 177.8H82.2c-4.3 0-7.9-3.5-7.9-7.9V70c0-4.3 3.5-7.9 7.9-7.9h87.2c4.3 0 7.9 3.5 7.9 7.9V170C177.3 174.3 173.8 177.8 169.4 177.8zM85.1 167h81.4V72.9H85.1V167z" }));
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
Icon.displayName = 'TrillekoffertIkon';
export default Icon;
