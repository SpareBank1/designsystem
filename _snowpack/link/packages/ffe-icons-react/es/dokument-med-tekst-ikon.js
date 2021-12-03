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
    React.createElement("path", { d: "M35.625,0c-6.316354,0-11.625,5.112283-11.625,11.65625v176.6875c0,6.33947,5.104892,11.65625,11.625,11.65625h128.75c6.31635,0,11.625-5.11228,11.625-11.65625v-176.6875c-0.20375-6.339468-5.30864-11.65625-11.625-11.65625h-128.75zm1.625,13.28125h125.3125v173.21875h-125.3125v-173.21875zm21.78125,30.0625c-3.260054,0-5.6875,2.682516-5.6875,5.75v1.625c0,3.271984,2.6312,5.71875,5.6875,5.71875h82.53125c3.26005,0,5.71875-2.651266,5.71875-5.71875v-1.625c0-3.271984-2.66245-5.75-5.71875-5.75h-82.53125zm0,34.78125c-3.260054,0-5.6875,2.651259-5.6875,5.71875v1.625c0,3.271984,2.6312,5.75,5.6875,5.75h82.53125c3.26005,0,5.71875-2.682516,5.71875-5.75v-1.625c0-3.27199-2.66245-5.71875-5.71875-5.71875h-82.53125zm0,34.75c-3.260054,0-5.6875,2.68252-5.6875,5.75v1.625c0,3.27198,2.6312,5.71875,5.6875,5.71875h82.53125c3.26005,0,5.71875-2.65127,5.71875-5.71875v-1.625c0-3.27198-2.66245-5.75-5.71875-5.75h-82.53125zm0,34.96875c-3.260054,0-5.6875,2.68252-5.6875,5.75v1.625c0,3.06749,2.6312,5.71875,5.6875,5.71875h82.53125c3.26005,0,5.71875-2.65127,5.71875-5.71875v-1.625c0-3.27198-2.66245-5.75-5.71875-5.75h-82.53125z" }));
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
Icon.displayName = 'DokumentMedTekstIkon';
export default Icon;
