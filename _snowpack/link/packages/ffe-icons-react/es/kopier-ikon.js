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
    React.createElement("path", { d: "M175.668 32.2309L145.921 4.64979C142.709 1.65583 138.456 -0.00837984 134.037 3.17317e-05H54.7295C51.8839 3.17317e-05 49.1548 1.11555 47.1426 3.10118C45.1304 5.08682 44 7.77992 44 10.588V165.412C44 168.22 45.1304 170.913 47.1426 172.899C49.1548 174.884 51.8839 176 54.7295 176H168.269C171.115 176 173.844 174.884 175.856 172.899C177.869 170.913 178.999 168.22 178.999 165.412V40.0365C179.019 38.5792 178.734 37.1334 178.161 35.7901C177.588 34.4468 176.739 33.235 175.668 32.2309V32.2309ZM164.523 39.8124C164.719 40.0003 164.897 40.2067 165.053 40.4287H138.768V15.8914L164.523 39.8124ZM57.2463 162.928V13.0716H125.522V42.9496C125.522 44.3401 125.799 45.7169 126.338 47.0015C126.878 48.2861 127.668 49.4533 128.664 50.4365C129.661 51.4197 130.843 52.1996 132.145 52.7317C133.447 53.2638 134.842 53.5376 136.251 53.5376H165.866V162.966L57.2463 162.928Z" }),
    React.createElement("path", { d: "M143.214 186.836H34.1392V32.7955C34.1392 31.5237 33.6349 30.3039 32.7373 29.4046C31.8397 28.5052 30.6222 28 29.3528 28H25.8052C24.534 28 23.3146 28.5046 22.414 29.4034C21.5134 30.3022 21.005 31.522 21 32.7955V189.356C21 190.755 21.2754 192.141 21.8105 193.433C22.3456 194.726 23.1298 195.9 24.1183 196.889C25.1069 197.878 26.2803 198.661 27.5714 199.195C28.8625 199.729 30.246 200.002 31.6428 200H143.214C143.842 200 144.465 199.876 145.045 199.635C145.626 199.394 146.154 199.041 146.598 198.595C147.043 198.15 147.395 197.621 147.636 197.04C147.876 196.458 148 195.834 148 195.204V191.65C148 190.377 147.496 189.155 146.599 188.252C145.702 187.35 144.485 186.841 143.214 186.836V186.836Z" }));
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
Icon.displayName = 'KopierIkon';
export default Icon;
