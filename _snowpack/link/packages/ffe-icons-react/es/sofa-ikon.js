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
    React.createElement("g", { transform: "matrix(1.7101 0 0 1.7101 -54.081 -54.25)" },
        React.createElement("path", { d: "m50.4 115.5h-6.2v-44.6c0-8.3 6.7-15 15-15h34.2v35.4h-6.2v-29.1h-28c-4.8 0-8.8 3.9-8.8 8.8v44.5z" }),
        React.createElement("path", { d: "m136.3 115.5h-6.2v-44.6c0-4.8-3.9-8.8-8.8-8.8h-31.1v-6.2h31.1c8.3 0 15 6.7 15 15v44.6z" }),
        React.createElement("path", { d: "m50.4 115.5h-6.2v-13.2c0-6.6 5.4-12 12-12h68.1c6.6 0 12 5.4 12 12v11h-6.2v-11c0-3.2-2.6-5.8-5.8-5.8h-68.1c-3.2 0-5.8 2.6-5.8 5.8v13.2z" }),
        React.createElement("path", { d: "m44.3 124.5h-6.8c-3.1 0-5.7-2.6-5.7-5.7l0.2-31.6c0-4.5 3.7-8.2 8.2-8.2h1.6c4.5 0 8.2 3.7 8.2 8.2v31.7c0 3.1-2.5 5.6-5.7 5.6zm-6.4-6h6.1v-31.3c0-1.2-1-2.2-2.2-2.2h-1.6c-1.2 0-2.2 1-2.2 2.2l-0.1 31.3z" }),
        React.createElement("path", { d: "m142.8 124.5h-6.7c-3.1 0-5.7-2.5-5.7-5.7v-31.6c0-4.5 3.7-8.2 8.2-8.2h1.6c4.5 0 8.2 3.7 8.2 8.2v31.7c0.1 3.1-2.5 5.6-5.6 5.6zm-6.3-6h6v-31.3c0-1.2-1-2.2-2.2-2.2h-1.6c-1.2 0-2.2 1-2.2 2.2v31.3z" }),
        React.createElement("rect", { height: "6.2", width: "85.9", y: "112.4", x: "47.3" })));
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
Icon.displayName = 'SofaIkon';
export default Icon;
