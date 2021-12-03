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
var svg = React.createElement("svg", { viewBox: "0 0 44 44" },
    React.createElement("path", { d: "M22.08 43.9h-.46A21.85 21.85 0 0 1 .26 22.97a1.27 1.27 0 0 1 1.3-1.31l.6.01c.68.02 1.22.55 1.25 1.22a18.7 18.7 0 0 0 32.1 12.15 18.7 18.7 0 0 0 5.23-12.5 18.56 18.56 0 0 0-5.2-13.39 18.55 18.55 0 0 0-13.09-5.74 18.6 18.6 0 0 0-14.8 6.8l-2.42-2A21.68 21.68 0 0 1 22.52.27a21.67 21.67 0 0 1 15.29 6.7 21.68 21.68 0 0 1 6.07 15.56 21.67 21.67 0 0 1-6.7 15.3 21.67 21.67 0 0 1-15.1 6.07" }),
    React.createElement("path", { d: "M8.95 14.1H2.78c-.7 0-1.28-.56-1.28-1.27V6.66c0-1.13 1.37-1.7 2.18-.9l6.17 6.17c.8.8.23 2.18-.9 2.18m4.26 3.72c0-.55.29-.84.84-.84h1c.54 0 .83.29.83.84v3.38h1.1l1.95-3.63c.23-.41.54-.6 1-.6h1.03c.68 0 .92.43.6 1.01l-2.39 4.23v.03l2.57 4.66c.33.59.08 1.01-.6 1.01h-1.17c-.46 0-.77-.18-1-.6L17 23.5h-1.1v3.6c0 .54-.3.83-.85.83h-1c-.54 0-.83-.29-.83-.84v-9.25zm13.9 4.11c.86 0 1.4-.47 1.4-1.35 0-.55-.14-.96-.65-1.16-.24-.1-.56-.15-1-.15h-.9v2.66h1.15zm-3.84-4.11c0-.55.3-.84.85-.84h2.96c1.12 0 1.66.07 2.13.26 1.24.47 2.02 1.59 2.02 3.18 0 1.16-.55 2.43-1.64 2.98v.03s.16.2.42.66l1.56 2.81c.33.59.07 1.01-.58 1.01h-1.17c-.46 0-.76-.18-1-.6l-1.61-3.08h-1.26v2.84c0 .55-.29.84-.84.84h-1c-.54 0-.83-.29-.83-.84v-9.25z" }));
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
Icon.displayName = 'KrSirkelPilIkon';
export default Icon;
