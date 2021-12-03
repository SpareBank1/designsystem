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
    React.createElement("path", { d: "m 98.582398,0.00573375 c -17.713773,0 -31.998764,14.28490925 -31.998764,31.99876425 l 0,29.141446 c 0,17.713856 14.284707,32.000753 31.808011,32.000753 l 0,23.236053 c 0,3.42836 3.618585,6.47567 7.808935,6.47567 1.90471,0 3.80963,-0.57071 5.52389,-2.09432 l 32.76178,-27.617403 9.71446,0 c 17.71378,0 31.99877,-14.286897 31.99877,-32.000753 l 0,-29.141446 C 186.38995,14.290643 171.91449,0.00573375 154.20071,0.00573375 l -55.618312,0 z m 0.190753,12.38104225 55.618319,0 c 10.85683,0 19.61772,8.761096 19.61772,19.617722 l 0,29.141446 c 0,10.856934 -8.76089,19.619711 -19.61772,19.619711 l -9.71448,0 -4.5721,0 -3.42759,2.857315 -25.71387,21.71203 0,-12.188303 0,-12.381042 -12.381032,0 c -10.856829,0 -19.426969,-8.762777 -19.426969,-19.619711 l 0,-29.141446 c 0,-10.856626 8.760893,-19.617722 19.617722,-19.617722 z m 26.665639,16.569653 c -2.09518,0 -3.23684,1.14339 -3.23684,3.238821 l 0,23.238049 c 0,1.904577 1.14166,3.046083 3.23684,3.046083 l 3.61833,0 c 1.90474,0 3.04808,-0.950956 3.04808,-3.046083 l 0,-23.238049 c 0,-2.095431 -0.95289,-3.238821 -3.04808,-3.238821 l -3.61833,0 z M 25.442651,61.718203 c -5.904626,0 -10.857008,4.761874 -10.857008,10.857008 l 0,116.567779 c 0,5.90469 4.761915,10.85701 10.857008,10.85701 l 74.663789,0 c 5.90459,0 10.85699,-4.76187 10.85699,-10.85701 l 0,-48.95191 c -1.52375,0.19055 -3.04832,0.3815 -4.57209,0.3815 -2.85708,-0.19034 -5.5233,-0.57129 -7.808942,-1.33328 l 0,29.90446 -71.615713,0 0,-95.044515 23.80832,0 C 49.632178,70.099339 49.060218,65.908661 49.060218,61.718203 l -23.617567,0 z m 99.996139,0.572258 c -1.90471,0 -3.04805,0.950855 -3.04808,3.046083 l 0,1.524034 c 3e-5,2.095024 0.9529,3.238822 3.04808,3.238822 l 3.42957,0 c 1.90472,0 3.04608,-1.143798 3.04608,-3.238822 l 0,-1.524034 c 0,-1.904882 -1.14136,-3.046083 -3.04608,-3.046083 l -3.42957,0 z m -67.997376,116.947299 10.666255,0 0,10.66625 -10.666255,0 0,-10.66625 z" }));
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
Icon.displayName = 'MobilUtropstegnIkon';
export default Icon;
