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
    React.createElement("path", { d: "m100 0.56498c-54.828 0-99.435 44.607-99.435 99.435s44.607 99.435 99.435 99.435 99.435-44.607 99.435-99.435-44.607-99.435-99.435-99.435zm0 13.648c47.304 0 85.787 38.483 85.787 85.787s-38.483 85.787-85.787 85.787-85.787-38.483-85.787-85.787 38.483-85.787 85.787-85.787zm0.0039 51.717c-8.2414 0-14.927 6.6803-14.927 14.924 0 5.9252 3.4585 11.029 8.4614 13.438l-7.1438 35.814c-0.6824 3.4198 1.9365 6.6069 5.4226 6.6069h16.374c3.488 0 6.1012-3.1871 5.4188-6.6069l-7.1439-35.814c5.001-2.4098 8.4614-7.5133 8.4614-13.438 0-8.2434-6.6803-14.924-14.924-14.924z" }));
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
Icon.displayName = 'NokkelhullIkon';
export default Icon;
