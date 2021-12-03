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
var svg = React.createElement("svg", { viewBox: "0 0 200 200", version: "1.1" },
    React.createElement("path", { d: "M142.877008,200 C117.907998,200 95.1207461,195.889317 74.5152524,187.909756 C21.910639,166.872731 -5.72496426,118.753558 7.1231671,70.8761905 C13.6684416,46.2120921 29.6680014,25.6586767 51.9704181,12.8430177 C74.2728348,0.0273587317 100.211515,-3.35790968 124.938108,3.41262714 C149.6647,9.94135908 170.512611,25.9004816 183.360743,47.9047263 C196.208874,70.1507759 199.60272,95.7820938 193.057445,120.446192 C189.178764,134.470876 180.209314,149.220974 165.179425,165.180096 C163.967337,166.389121 163.482502,168.32356 164.209754,170.016194 L170.512611,187.909756 C171.239864,190.086 171.239864,192.262244 170.270194,194.438488 C169.058106,197.098341 166.391512,198.790976 163.482502,199.03278 C156.452392,199.51639 149.6647,200 142.877008,200 Z M99.7266799,15.7446764 C85.9088783,15.7446764 72.0910766,19.3717497 59.7277804,26.3840914 C41.0616273,37.0235064 27.9710784,54.1916533 22.3954742,74.9868736 C11.4866834,114.88468 35.4860231,155.266096 80.3332741,173.159658 C101.666021,181.622829 125.907778,185.249902 152.573711,184.040877 L146.998107,168.081755 C146.028436,165.180096 146.755689,161.794828 148.937447,159.618584 C164.937007,143.659461 174.63371,129.392973 178.027556,116.577314 C183.60316,96.0238987 180.694149,74.5032638 169.785358,55.8842876 C159.118985,37.2653113 141.66492,24.2078474 120.817009,18.646335 C114.029317,16.7118959 106.75679,15.7446764 99.7266799,15.7446764 Z" }));
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
Icon.displayName = 'RundtSnakkebobleIkon';
export default Icon;
