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
    React.createElement("path", { d: "M99.656,0c-21.96,0-39.812,17.913-39.812,39.938v13.468c0,22.025,17.852,39.938,39.812,39.938h0.684c21.97,0,39.82-17.913,39.82-39.938v-13.468c0-22.025-17.86-39.938-39.82-39.938h-0.684zm0,14.031h0.684c14.24,0,25.82,11.625,25.82,25.907v13.437c0,14.284-11.58,25.906-25.82,25.906h-0.684c-14.24,0-25.812-11.622-25.812-25.906v-13.437c0-14.282,11.572-25.907,25.812-25.907zm-46.094,87.749c-0.973,0.1-1.932,0.46-2.781,1.1-14.196,10.54-22.781,27.37-22.781,45.28v40.46c0,6.29,5.082,11.38,11.344,11.38h121.32c6.26,0,11.34-5.09,11.34-11.38v-40.46c0-17.91-8.59-34.74-22.78-45.28-2.72-2.02-6.59-1.19-8.28,1.74l-1.35,2.32c-1.42,2.46-0.83,5.64,1.44,7.34,10.57,7.93,16.97,20.5,16.97,33.88v37.81h-116v-37.81c0-13.38,6.399-25.96,16.969-33.88,2.276-1.7,2.859-4.88,1.437-7.34l-1.344-2.32c-1.163-2.01-3.359-3.05-5.5-2.84z" }));
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
Icon.displayName = 'PersonIkon';
export default Icon;
