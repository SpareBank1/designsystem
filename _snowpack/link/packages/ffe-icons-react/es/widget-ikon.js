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
    React.createElement("path", { d: "M41 128h119V72H41v56zm122 13H39c-5 0-10-5-10-10V69c0-5 5-10 10-10h124c5 0 10 5 10 10v62c0 5-5 10-10 10zM162 46H38c-6 0-10-4-10-10V6c0-3 3-6 6-6 4 0 6 3 6 6v28h119V6c0-3 3-6 6-6 4 0 6 3 6 6v30c0 6-4 10-9 10M166 200c-3 0-6-3-6-6v-28H41v28c0 3-2 6-6 6-3 0-6-3-6-6v-30c0-6 5-10 10-10h124c5 0 10 4 10 10v30c0 3-3 6-7 6", mask: "url(#b)" }),
    React.createElement("path", { d: "M101 122c-4 0-7-3-7-6V84a6 6 0 0 1 13 0v32c0 3-3 6-6 6", mask: "url(#b)" }),
    React.createElement("path", { d: "M116 106H85a6 6 0 1 1 0-12h31a6 6 0 1 1 0 12", mask: "url(#b)" }));
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
Icon.displayName = 'WidgetIkon';
export default Icon;
