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
    React.createElement("path", { d: "M102.094-0.03125c-2.4018-0.0351757-4.8121,0.0319486-7.219,0.1875-39.6144,1.48542-76.4497,29.1324-89.1875,66.625-13.1724,36.1718-2.87912,79.3728,25.3437,105.594,27.8515,27.252,72.2048,35.298,107.907,19.75,36.341-14.892,61.608-52.812,61.062-92.125,0.024-15.7549-3.734-31.484-10.938-45.5-16.115-32.3445-50.945-54.0036-86.968-54.5312zm34.062,53.5624c2.918-0.0982,6.139,1.5393,5.219,4.5938-15.025,26.4285-30.536,52.604-45.75,78.937-2.4486,5.268-7.3879,12.649-13.875,7.626-8.9541-11.513-17.0198-23.76-25.625-35.563-5.5226-4.683,0.5601-10.447,6.2188-7.781,8.3817,10.613,15.9626,21.933,24.0312,32.812l45.844-78.531c0.554-1.3558,2.187-2.0348,3.937-2.0938z" }));
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
Icon.displayName = 'HakeSirkelSolidIkon';
export default Icon;
