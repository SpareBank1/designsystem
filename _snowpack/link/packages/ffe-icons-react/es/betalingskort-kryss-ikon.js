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
    React.createElement("path", { d: "m150.67217,20.515995c-12.13456,0.437482 -23.8677,5.476116 -32.50945,14.131912c-9.02975,9.044424 -13.93262,21.056549 -13.93262,33.681058c0,1.318978 -0.0118,2.685063 0.17637,4.004042l-93.707159,0c-5.831712,0 -10.699311,4.687084 -10.699311,10.716702l0,85.733601c0,5.84119 4.679479,10.7167 10.699311,10.7167l137.151059,0c5.83171,0 10.7581,-4.68708 10.7581,-10.7167l0,-52.75914c23.13873,-3.39166 41.0101,-23.188121 41.38634,-46.929727c0.37624,-26.191142 -20.70493,-48.013172 -46.85357,-48.578448c-0.81127,-0.01178 -1.6601,-0.02917 -2.46907,0zm1.52847,13.189785l0.76424,0c18.81197,0.376851 34.04967,16.181041 33.86155,35.212015c-0.37624,19.030974 -16.03721,34.269885 -35.0373,34.269885l-0.52909,0c-18.81197,-0.37685 -33.86155,-16.016161 -33.86155,-34.858715c0,-9.23285 3.58603,-17.853316 10.17022,-24.259783c6.58419,-6.594892 15.41406,-10.363402 24.63193,-10.363402zm-12.40415,15.603986l-6.58419,6.771541l12.58051,12.659839l-12.58051,12.600953l6.58419,6.77154l12.58051,-12.777601l12.81566,12.777601l6.58419,-6.77154l-12.63929,-12.600953l12.63929,-12.659839l-6.58419,-6.771541l-12.81566,12.836487l-12.58051,-12.836487zm-126.628107,36.213023l94.236237,0c6.20796,16.016171 20.71669,28.051851 38.21183,30.501381l0,13.01314l-132.448067,0l0,-43.514521zm0,68.186481l132.271707,0l0,12.60096l-132.271707,0l0,-12.60096z" }));
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
Icon.displayName = 'BetalingskortKryssIkon';
export default Icon;
