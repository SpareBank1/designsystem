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
    React.createElement("path", { d: "M100,200 C44.771525,200 0,155.228475 0,100 C0,44.771525 44.771525,-9.9475983e-14 100,-9.9475983e-14 C155.228475,-9.9475983e-14 200,44.771525 200,100 C200,155.228475 155.228475,200 100,200 Z M102.520667,93.4366667 L98.8126667,93.4366667 C94.8026667,93.4366667 92.3106667,95.9266667 92.3106667,99.9366667 L92.3106667,148.164667 C92.3106667,152.174667 94.8026667,154.666667 98.8126667,154.666667 L102.520667,154.666667 C106.468667,154.666667 108.824667,152.234667 108.824667,148.164667 L108.824667,99.9366667 C108.824667,95.8666667 106.468667,93.4366667 102.520667,93.4366667 Z M103.104667,59.0346667 L98.2286667,59.0346667 C94.2786667,59.0346667 91.9226667,61.4646667 91.9226667,65.5366667 L91.9226667,72.5566667 C91.9226667,76.5646667 94.2206667,78.8646667 98.2286667,78.8646667 L103.104667,78.8646667 C107.112667,78.8646667 109.410667,76.5646667 109.410667,72.5566667 L109.410667,65.5366667 C109.410667,61.4646667 107.052667,59.0346667 103.104667,59.0346667 Z" }));
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
Icon.displayName = 'InfoSirkelSolidIkon';
export default Icon;
