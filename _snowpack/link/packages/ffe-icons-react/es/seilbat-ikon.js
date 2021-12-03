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
    React.createElement("path", { d: "m107.18 3.4132c-0.3232 0.013044-0.64931 0.053873-0.97542 0.12375-2.6088 0.55904-4.473 2.7959-4.473 5.4048l-0.75 130.07c0 1.4908 0.55904 2.9837 1.8635 4.1018 1.1181 0.93173 2.4218 1.4886 3.9126 1.4886h0.37488l56.836-4.4694c1.8635-0.18635 3.3521-1.1181 4.2838-2.7952 0.93173-1.6771 1.1203-3.542 0.37487-5.2192l-56.09-125.42c-0.97832-2.1197-3.0987-3.3819-5.3611-3.2902zm5.7323 31.431 42.299 94.662-42.86 3.3557 0.5605-98.018zm-25.682 18.199c-1.8169 0.05236-3.5275 0.99433-4.5058 2.6714l-54.786 86.276c-1.1181 1.8635-1.1181 4.0982 0 5.9616 0.93173 1.6771 2.7945 2.6096 4.8443 2.6096h0.37124l54.787-4.1018c2.9815-0.18635 5.2192-2.6089 5.2192-5.5904v-82.178c0-2.4225-1.6793-4.6594-4.1018-5.4048-0.60563-0.18635-1.2214-0.26497-1.8271-0.24749zm-5.2519 24.847v57.767l-38.576 2.7952 38.576-60.563zm109.84 66.87c-0.45122-0.0246-0.91646-0.013-1.394 0.0328l-19.566 2.0491-124.29 9.8742-46.215 3.5413 4.8443 9.8778c0 0.18634 0.00298 0.37051 0.18926 0.55686l8.7568 17.332 4.2874 8.5712h134.91l44.166-38.015c4.7169-5.4157 1.0796-13.45-5.6887-13.82zm-4.1892 10.093-38.758 31.868h-123.73l-9.8778-17.703 172.37-14.165z" }));
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
Icon.displayName = 'SeilbatIkon';
export default Icon;
