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
    React.createElement("path", { d: "m130.5,107.9c0-2.326,1.886-4.21,4.21-4.21h8.421c2.326,0,4.21,1.884,4.21,4.21v12.63c0,2.326-1.884,4.21-4.21,4.21h-8.421c-2.324,0-4.21-1.884-4.21-4.21v-12.63zm27.37,0c0-2.326,1.884-4.21,4.21-4.21h8.421c2.326,0,4.21,1.884,4.21,4.21v12.63c0,2.326-1.884,4.21-4.21,4.21h-8.421c-2.326,0-4.21-1.884-4.21-4.21v-12.63zm-134.7,2.106c0-2.326,1.886-4.212,4.21-4.212h8.421c2.29,0,4.17,1.9,4.17,4.3v12.63c0,2.324-1.884,4.21-4.21,4.21h-8.421c-2.324,0-4.21-1.886-4.21-4.21v-12.63zm0-35.79c0-2.326,1.886-4.21,4.21-4.21h8.421c2.29,0.05,4.17,1.94,4.17,4.26v12.63c0,2.324-1.884,4.21-4.21,4.21h-8.421c-2.324,0-4.21-1.886-4.21-4.21v-12.63zm0-33.69c0-2.324,1.886-4.21,4.21-4.21h8.421c2.29,0.06,4.17,1.94,4.17,4.27v12.63c0,2.326-1.884,4.21-4.21,4.21h-8.421c-2.324,0-4.21-1.884-4.21-4.21v-12.63zm27.37,69.47c0-2.326,1.886-4.212,4.21-4.212h8.421c2.326,0,4.21,1.886,4.21,4.212v12.63c0,2.324-1.884,4.21-4.21,4.21h-8.421c-2.324,0-4.21-1.886-4.21-4.21v-12.63zm0-35.79c0-2.326,1.886-4.21,4.21-4.21h8.421c2.326,0,4.21,1.884,4.21,4.21v12.63c0,2.324-1.884,4.21-4.21,4.21h-8.421c-2.324,0-4.21-1.886-4.21-4.21v-12.63zm0-33.69c0-2.324,1.886-4.21,4.21-4.21h8.421c2.326,0,4.21,1.886,4.21,4.21v12.63c0,2.326-1.884,4.21-4.21,4.21h-8.421c-2.324,0-4.21-1.884-4.21-4.21v-12.63zm67.33,37.95c-5.815,0-10.53,4.712-10.53,10.53v87.34h-14.74v-156.8c0-5.813-4.714-10.53-10.53-10.53h-71.58c-5.836,0.03-10.55,4.74-10.55,10.56v156.8,3.2,11.5h200v-13.58-1.079-87.34c0-5.77-4.7-10.49-10.5-10.49h-71.58z" }));
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
Icon.displayName = 'KontorbyggSolidIkon';
export default Icon;
