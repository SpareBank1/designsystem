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
    React.createElement("path", { d: "M141.5 200h-130c-5.5 0-10-4.5-10-10V10c0-5.5 4.5-10 10-10h130c5.5 0 10 4.5 10 10v32.5c0 2.8-2.2 5-5 5s-5-2.2-5-5V10h-130v180h130v-57.6c0-2.8 2.2-5 5-5s5 2.2 5 5V190c0 5.5-4.5 10-10 10z" }),
    React.createElement("path", { d: "M45.5 86.1c0 12.1 9.9 19.9 22 19.9 14.5 0 20.8-12.5 20.8-12.5h.3s-.3 1-.3 2.9V99c0 3.6 1.8 5.5 5.3 5.5H98c3.6 0 5.5-1.8 5.5-5.5V63c0-16.8-10.3-26.4-27.4-26.4-9.9 0-17.4 3.2-21.7 5.5-3.1 1.7-3.6 4.3-2.1 7.3l1.3 2.5c1.6 3.1 4 3.6 7.3 2.2 3.1-1.7 8.2-3.8 13.8-3.8 6.8 0 12.3 3 12.3 11.7v1.6h-2.7c-14.8-.1-38.8 3.2-38.8 22.5zM62 84.7c0-9.9 14.2-11.2 22.5-11.2h2.7V76c0 8.1-6 17.4-15.2 17.4-6.7 0-10-4.3-10-8.7zm94.4 28.4c-2.4 0-4.7-1.2-6.1-3.1l-15.9-22.1c-1.6-2.2-1.1-5.4 1.1-7s5.4-1.1 7 1.1l13.8 19.2 33-49c1.5-2.3 4.6-2.9 6.9-1.4 2.3 1.5 2.9 4.6 1.4 6.9l-35 52.1c-1.4 2-3.6 3.3-6.1 3.3h-.1zM116.5 140h-80c-2.8 0-5-2.2-5-5s2.2-5 5-5h80c2.8 0 5 2.2 5 5 0 2.7-2.3 5-5 5zm0 30h-80c-2.8 0-5-2.2-5-5s2.2-5 5-5h80c2.8 0 5 2.2 5 5s-2.3 5-5 5z" }));
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
Icon.displayName = 'DokumentAvtalegiroCheckIkon';
export default Icon;
