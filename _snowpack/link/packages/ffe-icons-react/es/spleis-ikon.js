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
    React.createElement("path", { d: "M17.335 70.8c-9.131 0-16.27 5.595-16.27 14.08 0 14.15 20.711 13.96 20.711 19.42 0 2.766-2.523 3.67-4.827 3.67-4.217 0-8.123-2.529-9.938-3.9a1.302 1.302 0 0 0-1.86.3l-4.477 6.458a1.308 1.308 0 0 0 .207 1.728 24.335 24.335 0 0 0 15.94 5.761c10.353 0 16.206-6.625 16.206-14.275 0-14.535-20.705-13.504-20.705-19.294 0-2.57 2.581-3.6 4.886-3.6 3.842 0 7.242 1.952 8.97 3.144a1.296 1.296 0 0 0 1.9-.471l3.584-6.913a1.302 1.302 0 0 0-.334-1.62c-1.751-1.423-6.394-4.488-13.993-4.488zm136.501 0a6.303 6.303 0 0 0-6.302 6.303 6.303 6.303 0 0 0 6.302 6.303 6.303 6.303 0 0 0 6.303-6.303 6.303 6.303 0 0 0-6.303-6.303zm30.032 0c-9.131 0-16.268 5.595-16.268 14.08 0 14.15 20.705 13.96 20.705 19.42 0 2.766-2.519 3.67-4.823 3.67-4.217 0-8.129-2.529-9.938-3.9a1.302 1.302 0 0 0-1.86.3l-4.477 6.458a1.296 1.296 0 0 0 .208 1.728 24.335 24.335 0 0 0 15.94 5.761c10.353 0 16.206-6.625 16.206-14.275 0-14.535-20.71-13.504-20.71-19.294 0-2.57 2.586-3.6 4.89-3.6 3.843 0 7.243 1.952 8.971 3.144a1.302 1.302 0 0 0 1.9-.471l3.584-6.913a1.32 1.32 0 0 0-.334-1.62c-1.751-1.423-6.401-4.488-13.994-4.488zm-143.276.772a1.302 1.302 0 0 0-1.308 1.308v54.926a1.308 1.308 0 0 0 1.308 1.307h8.79a1.308 1.308 0 0 0 1.308-1.307v-24.468h7.692c8.941 0 14.979-6.688 14.979-15.946s-6.038-15.82-14.979-15.82zm39.998 0a1.308 1.308 0 0 0-1.307 1.308v43.369a1.308 1.308 0 0 0 1.307 1.308h22.065a1.308 1.308 0 0 0 1.308-1.308v-7.04a1.308 1.308 0 0 0-1.326-1.302H90.54V72.88a1.308 1.308 0 0 0-1.307-1.308zm31.438 0a1.302 1.302 0 0 0-1.307 1.308v55.013a1.308 1.308 0 0 0 1.307 1.307h27.1a1.308 1.308 0 0 0 1.308-1.307v-7.035a1.308 1.308 0 0 0-1.33-1.319h-17.129V98.591h12.715A1.308 1.308 0 0 0 136 97.284v-7.035a1.308 1.308 0 0 0-1.308-1.307h-12.715v-7.726h16.247a1.308 1.308 0 0 0 1.308-1.308V72.88a1.308 1.308 0 0 0-1.308-1.308zM55.366 79.88a7.282 7.282 0 0 1 7.584 7.281 7.276 7.276 0 0 1-7.282 7.277 7.282 7.282 0 0 1-.302-14.558zm94.172 9.062a1.308 1.308 0 0 0-1.307 1.307v25.954a1.302 1.302 0 0 0 1.307 1.307h8.642a1.302 1.302 0 0 0 1.308-1.307V90.249a1.308 1.308 0 0 0-1.308-1.307z" }));
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
Icon.displayName = 'SpleisIkon';
export default Icon;
