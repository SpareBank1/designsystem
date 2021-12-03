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
    React.createElement("path", { d: "m133.87 10.608c-6.2051 0-10.862 5.0371-10.862 10.854v4.6584l-14.346-11.635c-3.8782-3.1026-9.694-3.4904-13.96 0l-91.916 72.521c-2.3269 1.9391-2.7117 5.4295-0.77261 7.7564l1.5528 1.9391c1.9391 2.3269 5.4295 2.7193 7.7564 0.78017l17.452-13.968v95.016c0 6.2051 5.0371 10.862 10.854 10.862h120.62c6.2051 0 10.854-5.0447 10.854-10.862v-95.016l17.452 13.968c2.3269 1.9391 5.8173 1.5468 7.7564-0.78017l1.5528-1.9391c1.9391-2.3269 1.9421-5.8173-0.77262-7.7564l-25.989-20.944v-44.599c0-6.2051-5.0371-10.854-10.854-10.854h-26.375z" }));
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
Icon.displayName = 'HusEneboligIkon';
export default Icon;
