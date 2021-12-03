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
    React.createElement("path", { d: "m75.743 52.47c-2.3965 0-4.4715 1.9184-4.4715 4.4746v2.0782c0 2.3965 1.9153 4.4715 4.4715 4.4715h18.694l11.268 11.368-5.0394 4.6088-0.15912 0.15914c-5.276 5.113-12.466 7.988-19.815 7.988h-66.302c-4.9527 0-9.4261 2.3983-11.982 6.712-2.0769 3.5148-2.5544 7.8266-1.2762 11.661v0.16226l10.063 19.649h122.54v10.706h-27.481c-2.3965 0-4.4715 1.9153-4.4715 4.4715v2.0782c0 2.3965 1.9153 4.4715 4.4715 4.4715h65.984c9.1066 0 17.894-2.7141 25.403-7.6668 2.2367-1.5976 2.5562-4.635 0.79882-6.712l-1.4385-1.5976c-1.4379-1.7574-3.9929-2.0769-5.91-0.79882-5.5918 3.6746-11.984 5.754-18.694 5.754h-27.478v-10.706h26.361c3.0355 0 6.0717-1.4379 7.8291-3.9941 1.7574-2.716 1.9153-6.0704 0.47743-8.9462l-0.16-0.32c-12.46-21.085-30.35-38.182-51.76-49.685-3.355-1.9172-7.6693-1.2769-10.226 1.2794l-3.4512 3.1547-12.204-12.101c-1.7574-1.7574-3.9941-2.7179-6.3906-2.7179h-19.652zm47.929 20.932c17.894 9.9054 32.911 24.123 43.935 41.217h-149.54l-6.5497-12.781c-0.15976-0.95858 0.1579-1.7555 0.47742-2.0751 0.31953-0.47929 0.95921-1.1202 2.2373-1.1202h66.783c10.225 0 19.811-3.835 27.16-11.024l15.5-14.219zm-113.11 63.108c-2.3965 0-4.4746 1.9153-4.4746 4.4715v2.0782c0 2.3965 1.9184 4.4715 4.4746 4.4715h67.738c2.3965 0 4.4746-1.9153 4.4746-4.4715v-2.0782c0-2.3965-1.9184-4.4715-4.4746-4.4715h-67.738z" }));
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
Icon.displayName = 'SnoscooterIkon';
export default Icon;
