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
    React.createElement("path", { d: "M34.7 15.2V186.6c0 6.7 5.4 12.1 12.1 12.1H156c6.7 0 12.1-5.4 12.1-12.1V15.2c0-6.7-5.4-12.1-12.1-12.1H46.8c-6.7 0-12.1 5.4-12.1 12.1zM153.2 24.2v37c0 3.4-2.7 6.1-6.1 6.1H55.7c-3.4 0-6.1-2.7-6.1-6.1V24.2c0-3.4 2.7-6.1 6.1-6.1h91.4c3.4 0 6.1 2.7 6.1 6.1zM90.6 140.8v-10.7c0-2.5 2-4.6 4.6-4.6h12.7c2.5 0 4.6 2 4.6 4.6v10.7c0 2.5-2 4.6-4.6 4.6H95.1c-2.5 0-4.6-2-4.6-4.6zm21.8 28.4v10c0 2.5-2 4.6-4.6 4.6H95.1c-2.5 0-4.6-2-4.6-4.6v-10c0-2.5 2-4.6 4.6-4.6h12.7c2.5 0 4.6 2.1 4.6 4.6zm0-78.1V101.8c0 2.5-2 4.6-4.6 4.6H95.1c-2.5 0-4.6-2-4.6-4.6V91.1c0-2.5 2-4.6 4.6-4.6h12.7c2.5 0 4.6 2.1 4.6 4.6zM66.7 106.3H54.2c-2.5 0-4.6-2-4.6-4.6V91.1c0-2.5 2-4.6 4.6-4.6h12.5c2.5 0 4.6 2 4.6 4.6v10.7c0 2.5-2 4.6-4.6 4.6zm4.6 23.8v10.7c0 2.5-2 4.6-4.6 4.6H54.2c-2.5 0-4.6-2-4.6-4.6v-10.7c0-2.5 2-4.6 4.6-4.6h12.5c2.5 0 4.6 2 4.6 4.6zm64.9-4.6h12.4c2.5 0 4.6 2 4.6 4.6v10.7c0 2.5-2 4.6-4.6 4.6h-12.4c-2.5 0-4.6-2-4.6-4.6v-10.7c0-2.5 2-4.6 4.6-4.6zm-4.6-23.8V91.1c0-2.5 2-4.6 4.6-4.6h12.4c2.5 0 4.6 2 4.6 4.6v10.7c0 2.5-2 4.6-4.6 4.6h-12.4c-2.5 0-4.6-2-4.6-4.6zm-77.5 62.9h12.5c2.5 0 4.6 2 4.6 4.6v10c0 2.5-2 4.6-4.6 4.6H54.2c-2.5 0-4.6-2-4.6-4.6v-10c0-2.5 2.1-4.6 4.6-4.6zm77.5 14.6v-10c0-2.5 2-4.6 4.6-4.6h12.4c2.5 0 4.6 2 4.6 4.6v10c0 2.5-2 4.6-4.6 4.6h-12.4c-2.5 0-4.6-2-4.6-4.6z" }));
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
Icon.displayName = 'KalkulatorIkon';
export default Icon;
