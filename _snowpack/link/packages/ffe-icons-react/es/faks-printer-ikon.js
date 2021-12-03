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
    React.createElement("path", { d: "m51.42663,0c-6.80652,0 -12.29619,5.5595 -12.29619,12.36833l0,44.44444l-26.76631,0c-6.80652,0 -12.36413,5.49154 -12.36413,12.30038l0,94.39348c0,6.80884 5.55761,12.30038 12.36413,12.30038l26.76631,0l0,11.82467c0,6.80883 5.48967,12.36833 12.29619,12.36833l97.21468,0c6.80652,0 12.29619,-5.5595 12.29619,-12.36833l0,-11.82467l26.76631,0c6.80652,0 12.29837,-5.49154 12.29619,-12.30038l0,-94.39348c0,-6.80884 -5.48967,-12.30038 -12.29619,-12.30038l-26.76631,0l0,-44.44444c0,-6.80884 -5.48967,-12.36833 -12.29619,-12.36833l-97.21468,0zm1.83424,14.13523l93.5462,0l0,42.67754l-93.5462,0l0,-42.67754zm-38.04348,57.90011l169.56522,0l0,88.54911l-23.84511,0l0,-34.11485l-121.80706,0l0,34.11485l-23.91305,0l0,-88.54911zm140.35326,16.30989c-5.66932,0 -10.25815,4.59039 -10.25815,10.26164c0,5.67123 4.58883,10.26164 10.25815,10.26164c5.66933,0 10.25816,-4.59041 10.25816,-10.26164c0,-5.67125 -4.58883,-10.26164 -10.25816,-10.26164zm-102.30978,52.2596l93.5462,0l0,45.25994l-93.5462,0l0,-45.25994z" }));
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
Icon.displayName = 'FaksPrinterIkon';
export default Icon;
