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
var svg = React.createElement("svg", { viewBox: "-5 0 97 97" },
    React.createElement("path", { d: "M80.5,83.2 L5.8,83.2 C2.7,83.2 0.1,80.7 0.1,77.5 L0.1,74.5 C0.1,72.8 0.9,71.1 2.2,70.1 C3.9,68.8 6.1,67 6.9,66.3 C11.9,62 12.4,59.9 14.3,52.6 C14.8,50.8 15.3,48.7 16,46.3 C16.6,44.3 17.1,42.4 17.6,40.5 C21.5,26.2 24.2,16 43.2,16 C62.2,16 64.9,26.3 68.7,40.5 C69.2,42.3 69.7,44.2 70.3,46.3 C71,48.8 71.5,50.8 72,52.6 C74,60.3 74.5,62.2 80.4,67.2 C81.1,67.8 82.7,69.1 84.1,70.2 C85.5,71.3 86.3,72.9 86.3,74.6 L86.3,77.6 C86.2,80.7 83.7,83.2 80.5,83.2 Z M7.2,76.2 L79.2,76.2 L79.2,75.2C68.6,66.9 67.8,64.6 65.1,54.3 C64.6,52.5 64.1,50.5 63.4,48.1 C62.8,46 62.3,44.1 61.8,42.2 C58.1,28.2 56.7,22.9 43.1,22.9 C29.5,22.9 28.1,28.2 24.4,42.2 C23.9,44 23.4,46 22.8,48.1 C22.1,50.5 21.6,52.5 21.1,54.3 C18.4,64.5 17.6,66.8 7,75.2 L7,76.2 L7.2,76.2 Z" }),
    React.createElement("path", { d: "M52.9,20 L46.9,20 L46.9,10.1 C46.9,8 45.2,6.3 43.1,6.3 C41,6.3 39.3,8 39.3,10.1 L39.3,20 L33.3,20 L33.3,10.1 C33.3,4.7 37.7,0.3 43.1,0.3 C48.5,0.3 52.9,4.7 52.9,10.1 L52.9,20 Z" }),
    React.createElement("path", { d: "M51.8,87.7 C51.8,92.4 48,96.3 43.2,96.3 C38.5,96.3 34.6,92.5 34.6,87.7 L51.8,87.7 L51.8,87.7 Z" }));
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
Icon.displayName = 'VarselIkon';
export default Icon;
