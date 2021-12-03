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
    React.createElement("path", { d: "M160.198 117.187h-68.92c-5.903 0-10.38-5.317-9.377-11.134l11.56-66.956c.786-4.563 4.745-7.896 9.375-7.896h34.47c5.253 0 9.513 4.26 9.513 9.514V77.61h13.378c5.255 0 9.514 4.26 9.514 9.513v20.548c.002 5.256-4.258 9.517-9.512 9.517zm-67.264-10.91h65.87v-17.76h-22.895V42.11H104.01l-11.078 64.168zM175.627 169.54H67.934c-12.194 0-22.112-9.918-22.112-22.112 0-12.21 9.918-22.132 22.112-22.132h107.693c12.194 0 22.114 9.92 22.114 22.113 0 12.212-9.92 22.13-22.113 22.13zM67.934 136.206c-6.178 0-11.204 5.026-11.204 11.205 0 6.195 5.026 11.223 11.204 11.223h107.693c6.18 0 11.206-5.026 11.206-11.204 0-6.196-5.027-11.224-11.206-11.224H67.934z" }),
    React.createElement("path", { d: "M47.502 117.187H19.378c-9.454 0-17.12-7.666-17.12-17.12v-28.98c0-2.5.985-4.9 2.74-6.68l30.688-31.114c3.836-3.888 10.15-3.757 13.82.29l45.24 49.865-8.078 7.33-44.25-48.773-27.206 27.58 35.82 39.654c2.763 3.06.59 7.947-3.53 7.947zm-34.336-33.59v16.467c0 3.425 2.787 6.213 6.212 6.213h14.28l-20.492-22.68zM67.942 169.538c-12.197 0-22.12-9.923-22.12-22.12 0-12.197 9.923-22.122 22.12-22.122 12.2 0 22.122 9.923 22.122 22.122 0 12.197-9.923 22.12-22.122 22.12zm0-33.332c-6.182 0-11.212 5.03-11.212 11.213 0 6.182 5.03 11.21 11.212 11.21 6.184 0 11.214-5.028 11.214-11.21 0-6.185-5.03-11.214-11.214-11.214zM175.62 169.538c-12.197 0-22.12-9.923-22.12-22.12 0-12.197 9.923-22.122 22.12-22.122 12.198 0 22.123 9.923 22.123 22.122-.002 12.197-9.925 22.12-22.123 22.12zm0-33.332c-6.182 0-11.212 5.03-11.212 11.213 0 6.182 5.03 11.21 11.212 11.21 6.183 0 11.214-5.028 11.214-11.21 0-6.185-5.03-11.214-11.214-11.214z" }));
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
Icon.displayName = 'GravemaskinIkon';
export default Icon;
