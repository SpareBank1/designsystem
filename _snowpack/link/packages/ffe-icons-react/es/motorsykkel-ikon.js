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
    React.createElement("g", { transform: "matrix(1.593 0 0 1.593 -45.199 -42.172)" },
        React.createElement("path", { d: "m129.5 103.9-30.2-41.6h-8.1c-1.6 0-2.8-1.3-2.8-2.8v-1.3c0-1.6 1.3-2.8 2.8-2.8h8.8c1.8 0 3.5 0.9 4.6 2.3l30.6 42.1c0.9 1.3 0.6 3-0.6 4l-1.1 0.8c-1.3 0.8-3.1 0.5-4-0.7z" }),
        React.createElement("path", { d: "m49.3 123.1c-11.4 0-20.7-9.3-20.7-20.7s9.3-20.7 20.7-20.7c11.4 0.1 20.7 9.3 20.7 20.7s-9.3 20.7-20.7 20.7zm0-34.3c-7.5 0-13.7 6.1-13.7 13.7s6.1 13.7 13.7 13.7c7.5 0 13.7-6.1 13.7-13.7s-6.1-13.7-13.7-13.7z" }),
        React.createElement("path", { d: "m133 123.1c-11.4 0-20.7-9.3-20.7-20.7s9.3-20.7 20.7-20.7 20.7 9.3 20.7 20.7-9.3 20.7-20.7 20.7zm0-34.3c-7.5 0-13.7 6.1-13.7 13.7s6.1 13.7 13.7 13.7c7.5 0 13.7-6.1 13.7-13.7s-6.1-13.7-13.7-13.7z" }),
        React.createElement("path", { d: "m68.6 78.2h-27.9c-1.6 0-2.8-1.3-2.8-2.8v-1.4c0-1.6 1.3-2.8 2.8-2.8h27.9c1.6 0 2.8 1.3 2.8 2.8v1.3c0 1.6-1.3 2.9-2.8 2.9z" }),
        React.createElement("path", { d: "m104.3 102.2h-22.5c-1.3 0-2.6-0.6-3.5-1.6l-10.9-12c-2.5-2.7-1.1-7 2.4-7.8l23.6-5.4c1-0.2 2-0.3 3-0.3 7.4 0 13.5 6.1 13.5 13.5v8c0 3.1-2.5 5.6-5.6 5.6zm-21.6-7h20.2v-6.6c0-3.6-2.9-6.5-6.5-6.5-0.5 0-1 0.1-1.5 0.2l-19.9 4.6 7.7 8.3z" })));
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
Icon.displayName = 'MotorsykkelIkon';
export default Icon;
