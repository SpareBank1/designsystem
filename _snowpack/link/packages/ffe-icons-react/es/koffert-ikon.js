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
    React.createElement("path", { d: "M179.6 7.4c-1 0-2 .2-3 .5l-49.8 16.4c-3.2 1.3-5.6 3.7-6.7 6.7l-6.4 20.4-14.5 9c-1.6-.8-3.4-1-5.2-1H59c-7.5 0-13.5 6-13.5 13.2v10H14C6.4 82.6.2 88.6.2 96.3V178c0 7.4 6.2 13.6 13.6 13.6h124.6c7.6 0 13.5-6 13.7-13.6V96.3c0-7.4-6-13.5-13.2-13.5h-32v-10c0-1.3-.2-2.7-.6-4l12-7 16 10.4c3 1.8 6 2 9 1.4L193 57c5.6-2 8.5-8 6.7-13.3l-9.8-29c-1.7-4.6-6-7.4-10-7.3zm-.4 11.2l9.4 27.8L139.8 63l-15-10.4 5.6-17.6 48.8-16.4zm-42 24.2a5.6 5.6 0 0 0-5.7 5.6A5.6 5.6 0 0 0 137 54a5.6 5.6 0 0 0 5.7-5.6 5.6 5.6 0 0 0-5.6-5.6zM59 71.8h34.5c.7 0 1.2.3 1.2 1v9c0 .4-.2.8-.6 1H58c0-.2-.3-.5-.3-1v-9c0-.5.4-1 1-1zM14 95.3h16V179H14c-.7 0-1-.5-1-1V96.3c0-.5.3-1 1-1zm28.6 0h67.2V179H42.6V95.3zm80 0h16.2c.5 0 1 .4 1 1V178c0 .5-.5 1-1 1h-16.3V95.3z" }));
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
Icon.displayName = 'KoffertIkon';
export default Icon;
