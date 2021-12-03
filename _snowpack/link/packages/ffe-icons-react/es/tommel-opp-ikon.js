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
    React.createElement("path", { d: "M191 90.2c.8-2 1.3-4.4 1.3-6.6V80c0-10.6-8.5-19-19-19h-35.7c1.3-7.3 3-18 3.3-27.2 0-8.8-3-16.7-9-22.4-5-5-12-7.8-19-7.8-9 0-15 6-16 15.7v.7c0 .2 0 11-4 26.4-7 23.6-24 35.2-34 40V86c0-3.5-3-6-6-6H13C6.3 80 .7 85.3.7 92.3V182c0 7 5.5 12.6 12.5 12.6h34c7 0 12.5-5.5 12.5-12.5v-4c7.5 2 18.4 5 29 5H164c12 0 21.3-9 21.3-21v-7c5.5-3.3 9.2-9.2 9.2-16.2V136c0-3.4-1-6.5-2.4-9.3 6-3.5 9-9.4 9-16.2V107c0-7.5-4-13.7-10-16.7zM46.4 181.4H13.8V93h32.6v88.4zM172.2 161c0 4.4-3.7 8-8 8h-76c-10.6 0-22.6-3-29-5v-63c13.4-5 38-19.8 46.6-51 4-15.6 4.5-27.2 4.5-29.6.4-3.7 2.2-3.7 2.8-3.7 4 0 8 1.3 10 4 3 3 5 7.4 5 12.6 0 13.6-4.2 32.2-4.2 32.4l-2 8h52c3.3 0 6 2.7 6 6v3.7c0 2.6-2 4.6-4.6 4.6h-32v13h39.5c3 0 5.5 2.5 5.5 5.6v3.5c0 4-3 7-7 7h-39v13h33c3.2 0 6 3 6 6v3c0 3.7-3 6-6 6h-32v13h29v4z" }));
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
Icon.displayName = 'TommelOppIkon';
export default Icon;
