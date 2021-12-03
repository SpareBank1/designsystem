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
    React.createElement("path", { d: "M135.815 25.543v31.75L123.98 47.036l-22.336-19.358-90.103 71.404a7.151 7.151 0 01-8.886-11.206l92.428-73.248a10.727 10.727 0 0113.687.3l12.743 11.048v-4.008a10.727 10.727 0 0110.727-10.726h28.604a10.727 10.727 0 0110.727 10.726v44.326l26.03 21.693a7.151 7.151 0 01-9.154 10.988l-28.604-23.839-2.574-2.145V25.543zM42.852 175.715V100.63H28.549v78.662a10.727 10.727 0 0010.727 10.726h121.568a10.727 10.727 0 0010.727-10.726v-78.662h-14.302v75.086zm48.587-90.253l-29.848 71.904a4.119 4.119 0 002.395 5.456l15.114 5.495a4.119 4.119 0 005.292-2.506l25.744-73.159 3.772 1.452a5.496 5.496 0 003.572 5.878l12.908 4.698a5.495 5.495 0 007.044-3.286l7.515-20.652a5.494 5.494 0 00-3.282-7.044L128.757 69a5.494 5.494 0 00-7.044 3.282l-.046.125-25.78-9.918a17.86 17.86 0 00-14.398.693L59.43 74.213a4.123 4.123 0 001.845 7.805H73.05c6.24 0 12.425 1.148 18.246 3.39zm7.695 2.96l-28.282 68.125 7.15 2.6 24.44-69.456zm19.715-8.27l-25.922-9.969a9.618 9.618 0 00-7.755.372l-6.901 3.45a59.083 59.083 0 0115.986 3.708l22.35 8.596zm9.669-2.467l-5.639 15.489 7.745 2.821 5.638-15.493z", "clip-rule": "evenodd", fillRule: "evenodd" }));
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
Icon.displayName = 'HusHammerIkon';
export default Icon;
