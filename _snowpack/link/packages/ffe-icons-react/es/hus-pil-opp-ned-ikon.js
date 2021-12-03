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
    React.createElement("path", { d: "m 133.31738,14.618525 c -6.20451,0 -11.05027,5.043435 -11.05027,11.054053 v 4.650354 L 108.11156,18.689477 C 104.23374,15.393332 98.417771,15.200198 94.346063,18.496342 L 2.8272864,91.205431 c -2.52058131,1.938908 -2.90836318,5.428947 -0.9694541,7.755643 l 1.552642,1.938896 c 1.7450175,2.3267 5.2350544,2.71523 7.7556357,0.77632 l 89.96613,-71.156439 34.90038,28.500447 V 28.190887 h 21.32799 v 48.472724 l 31.21568,24.819539 c 2.32669,1.93892 5.81673,1.55039 7.75563,-0.77631 l 1.55264,-1.938908 c 1.9389,-2.326697 1.55036,-5.816727 -0.77632,-7.755637 L 170.93296,70.070564 V 25.672578 c 0,-6.204509 -5.04343,-11.054053 -11.05404,-11.054053 z M 99.871194,73.175848 c -1.017927,0 -2.034339,0.387024 -2.809902,1.162588 L 83.292009,87.520745 c -2.714472,2.520582 -0.775563,7.176234 2.908363,7.176234 h 6.786182 v 39.357591 h -6.979316 c -3.683928,0 -5.428945,4.65565 -2.908364,7.17623 l 13.765498,13.18229 c 1.551126,1.55113 4.072458,1.55113 5.623588,0 l 13.76551,-13.18229 c 2.71447,-2.52058 0.77556,-7.17623 -2.90837,-7.17623 h -6.78618 V 94.696979 h 7.36937 c 3.49004,0 5.23657,-4.655652 2.52209,-7.176234 L 102.68109,74.338436 c -0.77555,-0.775564 -1.79197,-1.162588 -2.809896,-1.162588 z M 157.55374,98.767932 V 180.20211 H 42.188654 V 99.737384 L 28.616291,110.40138 v 72.32281 c 0,6.01063 4.845758,11.05027 11.050266,11.05027 H 160.26896 c 6.01063,0 11.05028,-4.84575 11.05028,-11.05027 v -72.906 z", id: "path130" }));
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
Icon.displayName = 'HusPilOppNedIkon';
export default Icon;
