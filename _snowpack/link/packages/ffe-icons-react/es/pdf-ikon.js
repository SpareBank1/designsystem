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
    React.createElement("path", { d: "M17.5,0c-10,0-17.5,7.5-17.5,17.5v165c0,10,7.5,17.5,17.5,17.5h165c10,0,17.5-7.5,17.5-17.5v-165c0-10-7.5-17.5-17.5-17.5h-165zm6.25,68.75h20c11.25,0,20,8.75,20,20,0,12.5-7.5,21.25-20,21.25h-12.5v17.5c0,2.5-1.25,3.75-3.75,3.75h-3.75c-2.5,0-3.75-1.25-3.75-3.75v-55c0-2.5,1.25-3.75,3.75-3.75zm56.25,0h17.5c18.75,0,31.25,11.25,31.25,31.25s-11.25,31.25-31.25,31.25h-17.5c-2.5,0-3.75-1.25-3.75-3.75v-55c0-2.5,1.25-3.75,3.75-3.75zm67.5,0h28.75c2.5,0,3.75,1.25,3.75,3.75v2.5c0,2.5-1.25,3.75-3.75,3.75h-21.25v17.5h17.5c2.5,0,3.75,1.25,3.75,3.75v2.5c0,2.5-1.25,3.75-3.75,3.75h-17.5v21.25c0,2.5-1.25,3.75-3.75,3.75h-3.75c-2.5,0-3.75-1.25-3.75-3.75v-55c0-2.5,1.25-3.75,3.75-3.75zm-116.25,10v21.25h10c6.25,0,10-3.75,10-11.25,1.25-6.25-2.5-10-8.75-10h-11.25zm56.25,0v42.5h8.75c12.5,0,21.25-7.5,21.25-21.25s-7.5-21.25-20-21.25h-10z" }));
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
Icon.displayName = 'PdfIkon';
export default Icon;
