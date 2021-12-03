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
    React.createElement("path", { d: "M99.98,0.000005c-55.12,0-99.98,44.89-99.98,100,0,55.1,44.86,100,99.98,100s100-44.9,100-100c0-55.11-44.9-100-100-100zm0,14.37c47.22,0,85.64,38.43,85.64,85.64,0,47.22-38.43,85.61-85.64,85.61-47.22,0-85.61-38.39-85.61-85.61s38.39-85.64,85.61-85.64zm-34.14,45.7c-1.489,0-2.972,0.5707-4.141,1.74l-1.914,1.879c-2.339,2.227-2.339,5.909,0,8.248l30.07,30.07-30.07,30.07c-2.339,2.227-2.339,5.909,0,8.248l1.914,1.879c2.227,2.339,5.874,2.339,8.213,0l30.07-30.07,30.07,30.07c2.227,2.339,5.909,2.339,8.248,0l1.914-1.879c2.339-2.227,2.339-5.909,0-8.248l-30.07-30.07,30.07-30.07c2.339-2.227,2.339-5.909,0-8.248l-1.914-1.879c-2.227-2.339-5.909-2.339-8.248,0l-30.02,30.07-30.07-30.06c-1.114-1.169-2.582-1.74-4.072-1.74z" }));
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
Icon.displayName = 'KryssSirkelIkon';
export default Icon;
