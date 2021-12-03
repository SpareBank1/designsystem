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
    React.createElement("defs", null),
    React.createElement("path", { fill: "none", id: "canvas_background", d: "M-1-1h202v202H-1z" }),
    React.createElement("g", null,
        React.createElement("g", { stroke: "null", id: "svg_5" },
            React.createElement("path", { id: "svg_1", d: "M43.98 99.3a3 3 0 0 1 3.34-3.35h3.84a3 3 0 0 1 3.34 3.34v13.37h4.35l7.68-14.2a3.98 3.98 0 0 1 3.84-2.34h4.18c2.67 0 3.67 1.67 2.34 4l-9.36 16.71v.17l10.2 18.38c1.33 2.34.33 4-2.35 4h-4.67a3.83 3.83 0 0 1-3.85-2.33l-8.01-15.54H54.5v14.2a3 3 0 0 1-3.34 3.34h-3.84a3 3 0 0 1-3.34-3.34V99.3z" }),
            React.createElement("path", { id: "svg_2", d: "M83.57 99.3a3 3 0 0 1 3.34-3.35h11.7a23.59 23.59 0 0 1 8.35 1c4.84 1.84 8.02 6.35 8.02 12.53a13.03 13.03 0 0 1-6.52 11.7v.16a20.15 20.15 0 0 1 1.67 2.68l6.18 11.02c1.34 2.34.34 4.01-2.34 4.01h-4.5a3.83 3.83 0 0 1-3.85-2.34l-6.35-12.2h-5v11.2a3 3 0 0 1-3.35 3.34h-3.84a3 3 0 0 1-3.34-3.34V99.3h-.17zm15.2 16.2a5.01 5.01 0 0 0 5.51-5.35c0-2.17-.5-3.84-2.5-4.5a8.67 8.67 0 0 0-4.01-.68h-3.68v10.53h4.68z" }),
            React.createElement("path", { id: "svg_3", d: "M157 21.1a42.23 42.23 0 0 0-41.87 37.15H11.77a9.87 9.87 0 0 0-9.86 9.8v98.1a9.86 9.86 0 0 0 9.86 9.87h139.42a9.87 9.87 0 0 0 9.88-9.87v-60.91a42.17 42.17 0 0 0-4.08-84.15zm-6.96 143.96H12.9V69.27h102.33a42.27 42.27 0 0 0 34.81 35.54v60.25zm11.03-71.11a32.73 32.73 0 0 1-4.08.3 31.24 31.24 0 1 1 4.08-.3z" }),
            React.createElement("path", { id: "svg_4", d: "M169.74 77.62a4.23 4.23 0 0 1-1.99-.5l-14.93-8.08V45.9a4.18 4.18 0 0 1 8.35 0v18.16l10.56 5.66a4.18 4.18 0 0 1-2 7.85v.05z" }))));
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
Icon.displayName = 'KrKlokkeIkon';
export default Icon;
