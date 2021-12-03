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
var svg = React.createElement("svg", { viewBox: "37 38 103 105" },
    React.createElement("path", { d: "M129.25 70c0 5.7-4.63 10.32-10.32 10.32h-7.5l-1.82 1.54-13.48 11.39V80.32h-6.5A10.3 10.3 0 0 1 79.38 70V54.68c0-5.7 4.63-10.33 10.32-10.33h29.23c5.69 0 10.32 4.63 10.32 10.33V70zm-10.32-32.15H89.7c-9.29 0-16.82 7.54-16.82 16.83V70c0 9.29 7.45 16.82 16.75 16.82v12.2c0 1.79 1.94 3.39 4.11 3.39.97 0 1.98-.32 2.88-1.07l17.19-14.52h5.12c9.29 0 16.82-7.53 16.82-16.82V54.68c0-9.3-7.53-16.83-16.82-16.83zM68.1 137.6h5.57v-5.57H68.1v5.57zM89.66 111v15.73H52.13V76.78h12.46a26 26 0 0 1-.9-6.5H51.3a5.67 5.67 0 0 0-5.66 5.67v61.16a5.67 5.67 0 0 0 5.67 5.67h39.2a5.67 5.67 0 0 0 5.66-5.66v-25.74a13.37 13.37 0 0 1-6.5-.39z" }));
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
Icon.displayName = 'MobilSnakkebobleIkon';
export default Icon;
