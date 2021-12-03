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
    React.createElement("path", { d: "m101.8,89.83-3.575,0c-3.799,0-6.257,2.346-6.257,6.257v46.26c0,3.799,2.346,6.257,6.257,6.257h3.575c3.799,0,6.034-2.346,6.034-6.257v-46.26c0-3.911-2.235-6.257-6.034-6.257z" }),
    React.createElement("path", { d: "m102.3,56.87-4.693,0c-3.799,0-6.034,2.346-6.034,6.257v6.704c0,3.799,2.235,6.034,6.034,6.034h4.693c3.799,0,6.034-2.235,6.034-6.034v-6.704c0-3.911-2.235-6.257-6.034-6.257z" }),
    React.createElement("path", { d: "M100,200c-55.08,0-100-44.9-100-100,0-55.08,44.92-100,100-100,55.1,0,100,44.92,100,100s-44.92,100-100,100zm0-186.3c-47.6,0-86.26,38.66-86.26,86.26s38.66,86.26,86.26,86.26,86.26-38.66,86.26-86.26-38.66-86.26-86.26-86.26z" }));
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
Icon.displayName = 'InfoSirkelIkon';
export default Icon;
