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
    React.createElement("path", { d: "M80.5 122.5C78.2909 122.5 76.5 120.709 76.5 118.5V91H49C46.7909 91 45 89.2091 45 87V79C45 76.7909 46.7909 75 49 75H76.5V47.5C76.5 45.2909 78.2909 43.5 80.5 43.5H88.5C90.7091 43.5 92.5 45.2909 92.5 47.5V75H120C122.209 75 124 76.7909 124 79V87C124 89.2091 122.209 91 120 91H92.5V118.5C92.5 120.709 90.7091 122.5 88.5 122.5H80.5Z" }),
    React.createElement("path", { fillRule: "evenodd", "clip-rule": "evenodd", d: "M26.2 24.2C41.7 8.6 62.4 0 84.4 0L84.3 0.2C106.3 0.2 127 8.6 142.8 24.2C158.2 39.7 166.8 60.4 166.8 82.4C166.8 102.4 159.8 121.2 146.8 136.2L196.5 185.8C199 188.4 199 192.5 196.5 195L193.5 198C190.9 200.6 186.8 200.6 184.2 198L134.2 148C120 158.9 102.7 164.7 84.4 164.7C62.4 164.7 41.7 156.2 26.2 140.7C10.6 125.1 2.19995 104.4 2.19995 82.4C2.19995 60.4 10.6 39.7 26.2 24.2ZM130.4 36.3C118.2 24.1 101.8 17.3 84.4 17.3C67 17.3 50.7 24.3 38.4 36.5C26.1 48.7 19.4 65 19.4 82.5C19.4 99.8 26.1 116.3 38.4 128.5C50.7 140.7 67 147.5 84.4 147.5C101.8 147.5 118.2 140.7 130.4 128.5C142.7 116.3 149.4 99.8 149.4 82.3C149.4 65 142.7 48.7 130.4 36.3Z" }));
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
Icon.displayName = 'ForstorrelsesglassIkonPluss';
export default Icon;
