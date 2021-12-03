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
    React.createElement("path", { d: "M92.182 200c-2.282 0-4.336 0-6.619-.229-45.42-3.206-82.167-40.074-85.362-85.644-1.598-24.732 6.39-48.776 22.596-67.325C39.002 28.254 61.598 17.033 86.02 15.43c3.652-.229 7.304 1.145 9.814 3.664 2.739 2.519 4.109 5.954 4.109 9.618V99.7h70.755c3.652 0 7.075 1.603 9.586 4.122 2.511 2.748 3.88 6.183 3.652 9.847-1.598 24.731-12.782 47.173-31.269 63.431-16.89 14.885-38.117 22.9-60.485 22.9zM84.194 31.689C65.021 33.75 47.675 42.68 34.893 57.336c-13.466 15.343-20.085 35.265-18.487 55.646 2.51 37.784 32.867 68.24 70.527 70.759 20.542 1.374 40.171-5.267 55.463-18.548 14.607-12.824 23.737-30.228 25.563-49.463H84.194V31.689zm2.967-.229z" }),
    React.createElement("path", { d: "M185.99 82.297h-57.061c-6.162 0-11.412-5.038-11.412-11.221V13.598c0-3.893 1.598-7.557 4.565-10.076 2.739-2.519 6.619-3.893 10.499-3.435 35.606 3.206 63.908 31.602 67.332 67.554.457 3.893-.913 7.557-3.424 10.305-2.967 2.748-6.619 4.351-10.499 4.351zm-52.496-16.03h49.986c-3.424-26.106-23.966-46.486-49.986-50.15v50.15z" }));
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
Icon.displayName = 'KakeKvartIkon';
export default Icon;
