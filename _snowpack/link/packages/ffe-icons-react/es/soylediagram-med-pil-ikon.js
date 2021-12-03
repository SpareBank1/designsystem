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
var svg = React.createElement("svg", { viewBox: "0 0 20 20" },
    React.createElement("path", { d: "M17,8 L19,8 C19.5522847,8 20,8.44771525 20,9 L20,19 C20,19.5522847 19.5522847,20 19,20 L17,20 C16.4477153,20 16,19.5522847 16,19 L16,9 C16,8.44771525 16.4477153,8 17,8 Z M1,14 L3,14 C3.55228475,14 4,14.4477153 4,15 L4,19 C4,19.5522847 3.55228475,20 3,20 L1,20 C0.44771525,20 6.76353751e-17,19.5522847 0,19 L0,15 C-6.76353751e-17,14.4477153 0.44771525,14 1,14 Z M9,12 L11,12 C11.5522847,12 12,12.4477153 12,13 L12,19 C12,19.5522847 11.5522847,20 11,20 L9,20 C8.44771525,20 8,19.5522847 8,19 L8,13 C8,12.4477153 8.44771525,12 9,12 Z M14.5857864,2 L13,2 C12.4477153,2 12,1.55228475 12,1 C12,0.44771525 12.4477153,0 13,0 L17,0 C17.5522847,0 18,0.44771525 18,1 L18,5 C18,5.55228475 17.5522847,6 17,6 C16.4477153,6 16,5.55228475 16,5 L16,3.41421356 L10.7071068,8.70710678 C10.3165825,9.09763107 9.68341751,9.09763107 9.29289322,8.70710678 L7,6.41421356 L3.70710678,9.70710678 C3.31658249,10.0976311 2.68341751,10.0976311 2.29289322,9.70710678 C1.90236893,9.31658249 1.90236893,8.68341751 2.29289322,8.29289322 L6.29289322,4.29289322 C6.68341751,3.90236893 7.31658249,3.90236893 7.70710678,4.29289322 L10,6.58578644 L14.5857864,2 Z" }));
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
Icon.displayName = 'SoylediagramMedPilIkon';
export default Icon;
