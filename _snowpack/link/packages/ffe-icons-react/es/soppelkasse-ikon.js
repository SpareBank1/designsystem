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
    React.createElement("path", { d: "M156.272546,74.4545454 C156.272546,69.9357516 159.935752,66.2725454 164.454546,66.2725454 C168.97334,66.2725454 172.636546,69.9357516 172.636546,74.4545454 L172.636546,172.636364 C172.636546,186.192545 161.64709,197.182 148.09091,197.182 L49.909091,197.182 C36.3529102,197.182 25.3634546,186.192545 25.3634546,172.636364 L25.3634546,74.4545454 C25.3634546,69.9357516 29.0266608,66.2725454 33.5454546,66.2725454 C38.0642484,66.2725454 41.7274546,69.9357516 41.7274546,74.4545454 L41.7274546,172.636364 C41.7274546,177.154957 45.3904977,180.818 49.909091,180.818 L148.09091,180.818 C152.609503,180.818 156.272546,177.154957 156.272546,172.636364 L156.272546,74.4545454 Z M58.0907272,33.5452728 L58.0907272,25.3636364 C58.0907272,11.8074557 69.080183,0.818 82.6363636,0.818 L115.363636,0.818 C128.919817,0.818 139.909272,11.8074557 139.909272,25.3636364 L139.909272,33.5452728 L189,33.5452728 C193.518794,33.5452728 197.182,37.208479 197.182,41.7272728 C197.182,46.2460666 193.518794,49.9092728 189,49.9092728 L9,49.9092728 C4.48120618,49.9092728 0.818,46.2460666 0.818,41.7272728 C0.818,37.208479 4.48120618,33.5452728 9,33.5452728 L58.0907272,33.5452728 Z M74.4547272,33.5452728 L123.545272,33.5452728 L123.545272,25.3636364 C123.545272,20.8450432 119.882229,17.182 115.363636,17.182 L82.6363636,17.182 C78.1177706,17.182 74.4547272,20.8450434 74.4547272,25.3636364 L74.4547272,33.5452728 Z M90.818,90.818 L107.182,90.818 L107.182,156.273 L90.818,156.273 L90.818,90.818 Z M58.091,90.818 L74.455,90.818 L74.455,156.273 L58.091,156.273 L58.091,90.818 Z M123.545,90.818 L139.909,90.818 L139.909,156.273 L123.545,156.273 L123.545,90.818 Z" }));
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
Icon.displayName = 'SoppelkasseIkon';
export default Icon;
