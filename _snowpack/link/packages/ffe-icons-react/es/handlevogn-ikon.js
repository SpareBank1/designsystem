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
    React.createElement("path", { d: "m5.7629 19.978c-2.8921 0-5.2374 2.3453-5.2374 5.2374v2.4564c0 2.8921 2.3453 5.2374 5.2374 5.2374h21.072l37.477 108.91c-5.6069 3.7416-9.3097 10.121-9.3097 17.353 0 11.498 9.3504 20.849 20.849 20.849 11.498 0 20.849-9.3504 20.849-20.849 0-2.7443-0.54362-5.3615-1.5113-7.7623h41.888c-0.91232 2.3417-1.432 4.8757-1.432 7.5351 0 11.498 9.354 20.852 20.852 20.852s20.849-9.3541 20.849-20.852-9.3504-20.852-20.849-20.852c-1.3537 0-2.677 0.14207-3.9605 0.38955h-74.211c-0.50233-0.0591-1.016-0.0896-1.5294-0.11181l-5.5296-16.069h99.345c4.5856 0 8.6357-2.9832 9.9987-7.3619l18.385-59.126c2.0961-6.7408-2.9385-13.58-9.9951-13.58h-145.28l-5.2266-15.189c-1.454-4.228-5.433-7.067-9.902-7.067h-22.825zm42.401 35.179h137.5l-16.856 54.217h-101.98l-18.657-54.213zm108.34 94.943c4.8792 0 8.8444 3.9688 8.8444 8.848s-3.9652 8.8444-8.8444 8.8444-8.848-3.9652-8.848-8.8444 3.9688-8.848 8.848-8.848zm-80.646 0.22723c4.8792 0 8.8444 3.9652 8.8444 8.8444 0 4.8774-3.9652 8.848-8.8444 8.848s-8.8444-3.9688-8.8444-8.848 3.9652-8.8444 8.8444-8.8444z" }));
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
Icon.displayName = 'HandlevognIkon';
export default Icon;
