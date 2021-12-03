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
    React.createElement("path", { d: "m133.86 10.343c-6.2101 0-10.871 5.0412-10.871 10.863v4.6621l-14.358-11.644c-3.8813-3.1051-9.7018-3.4932-13.971 0l-91.986 72.578c-2.3288 1.9407-2.7139 5.4338-0.77323 7.7626l1.554 1.9407c1.9407 2.3288 5.4338 2.7215 7.7626 0.78082l17.466-13.979 13.585-10.863 58.993-46.576 34.932 28.723v-30.664h21.347v48.516l31.437 25.229c2.3288 1.9407 5.822 1.548 7.7626-0.78082l1.554-1.9406c1.5525-2.7169 1.5571-6.2086-1.1598-8.1492l-26.009-20.961v-44.635c0-6.2101-5.0412-10.863-10.863-10.863h-26.396zm-91.598 85.002-13.585 10.863v72.585c0 6.2101 5.0412 10.863 10.863 10.863h120.71c6.2101 0 10.863-5.0412 10.863-10.863v-72.199l-13.585-11.25h-115.27z" }));
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
Icon.displayName = 'HusHorisontaldeltIkon';
export default Icon;
