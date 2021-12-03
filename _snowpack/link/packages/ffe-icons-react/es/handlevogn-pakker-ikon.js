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
    React.createElement("path", { d: "M179.15 87.503h-6.11V66.896h-51.825v20.607h-6.11V65.117c0-2.39 1.94-4.328 4.33-4.328h55.384c2.39 0 4.33 1.936 4.33 4.327v22.386zM97.808 44.284H64.935c-2.39 0-4.328 1.937-4.328 4.327v34.507h6.11V50.39h34.493v32.727h6.11V49.81l-9.512-5.526z", fill: "#db3a00", fillRule: "evenodd" }),
    React.createElement("path", { d: "M90.238 36.353l34.536 20.07 16.917-29.086-34.535-20.07-16.917 29.086zm33.004 26.243L85.628 40.738c-2.068-1.202-2.77-3.85-1.567-5.916l18.708-32.16c1.202-2.068 3.852-2.77 5.92-1.567L146.3 22.953c2.067 1.2 2.768 3.85 1.566 5.915l-18.707 32.16c-1.2 2.068-3.85 2.77-5.918 1.568z", fill: "#db3a00", fillRule: "evenodd" }),
    React.createElement("path", { d: "M161.746 148.395H66.588V137.71h93.66l15.32-49.248H46.73V77.775h131.6c5.837 0 10.002 5.654 8.27 11.224l-16.583 53.31c-1.125 3.62-4.476 6.085-8.27 6.085", fillRule: "evenodd" }),
    React.createElement("path", { d: "M68.627 170.77L33.452 68.597H13.978c-2.39 0-4.328-1.937-4.328-4.326v-2.032c0-2.39 1.938-4.328 4.328-4.328h20.924c3.696 0 6.984 2.346 8.188 5.84l35.646 103.544-10.11 3.477z", fillRule: "evenodd" }),
    React.createElement("path", { d: "M4.84 2.664c-1.205 0-2.184.98-2.184 2.182s.98 2.18 2.183 2.18c1.202 0 2.18-.978 2.18-2.18 0-1.203-.978-2.182-2.18-2.182m0 6.972c-2.645 0-4.795-2.15-4.795-4.79C.045 2.204 2.195.054 4.84.054c2.642 0 4.792 2.15 4.792 4.792 0 2.64-2.15 4.79-4.793 4.79", mask: "url(#mask-2)", transform: "matrix(3.8021 0 0 3.8021 58.525 163.31)", fillRule: "evenodd" }),
    React.createElement("path", { d: "M76.922 168.477c4.6 0 8.65 2.343 11.03 5.9h49.84c2.357-3.668 6.466-6.1 11.15-6.1.774 0 1.53.078 2.267.206v-4.793H75.99v4.834c.31-.022.617-.047.932-.047", fillRule: "evenodd" }),
    React.createElement("path", { d: "M148.942 173.237c-4.576 0-8.298 3.72-8.298 8.293 0 4.573 3.722 8.294 8.298 8.294 4.575 0 8.297-3.72 8.297-8.294 0-4.573-3.724-8.293-8.298-8.293m0 26.51c-10.05 0-18.226-8.172-18.226-18.217 0-10.044 8.176-18.216 18.226-18.216 10.05 0 18.224 8.172 18.224 18.216 0 10.045-8.174 18.217-18.224 18.217", fillRule: "evenodd" }),
    React.createElement("path", { d: "M158.958 61.65h-6.11c0-3.154-2.565-5.72-5.72-5.72s-5.72 2.566-5.72 5.72h-6.11c0-6.52 5.306-11.826 11.83-11.826 6.522 0 11.83 5.305 11.83 11.825", fill: "#db3a00", fillRule: "evenodd" }));
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
Icon.displayName = 'HandlevognPakkerIkon';
export default Icon;
