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
    React.createElement("path", { d: "m 133.79194,8.5676817 c -6.22486,0 -11.0865,5.0599713 -11.0865,11.0902963 v 4.665599 L 108.50349,12.651982 C 104.61294,9.3450304 98.777908,9.151261 94.692852,12.458214 L 2.8740304,85.405686 c -2.52884571,1.94526 -2.91789905,5.446746 -0.972634,7.781061 l 1.5577325,1.945262 c 1.7507392,2.334323 5.2522173,2.724133 7.7810631,0.778862 L 101.50128,24.521142 136.51608,53.11503 V 22.184543 H 157.914 v 48.63164 l 31.31802,24.900926 c 2.33431,1.945272 5.83578,1.555451 7.78106,-0.778863 l 1.55772,-1.945261 c 1.94527,-2.334321 1.55546,-5.835808 -0.77887,-7.781066 L 171.53086,64.201524 V 19.657978 c 0,-6.224853 -5.05998,-11.0902963 -11.09031,-11.0902963 z M 100.23611,77.043319 c -1.021263,0 -2.041014,0.388289 -2.819122,1.166396 L 83.60256,91.435245 c -2.723371,2.528837 -0.778107,7.199761 2.917899,7.199761 h 7.005996 v 41.044344 c 0,2.9179 2.332038,5.44827 5.444464,5.44827 h 2.530361 c 2.91791,0 5.44447,-2.33584 5.44447,-5.44827 V 98.635006 h 7.39353 c 3.50148,0 5.25373,-4.670924 2.53036,-7.199761 l -13.81442,-13.22553 c -0.77811,-0.778107 -1.79785,-1.166396 -2.81911,-1.166396 z m 57.87165,15.949666 V 174.69414 H 42.364445 V 93.96561 l -13.616859,10.69896 v 72.55993 c 0,6.03033 4.861644,11.08651 11.086494,11.08651 H 160.8319 c 6.0303,0 11.08649,-4.86165 11.08649,-11.08651 v -73.14503 z" }));
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
Icon.displayName = 'HusPilOppIkon';
export default Icon;
