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
    React.createElement("path", { d: "m137.59 36.488c-2.506 0-4.3867 2.0373-4.3867 4.3867v2.0373c0 2.506 2.0373 4.3836 4.3867 4.3836h2.3494c2.506 0 4.3836-2.0343 4.3836-4.3836v-2.0373c0.15663-2.3493-1.8776-4.3867-4.3836-4.3867h-2.3494zm-115.59 2.509c-11.747 0-21.456 9.5528-21.456 21.456v78.312c0 4.8553 3.9144 8.9263 8.9263 8.9263h17.229c2.506 9.0841 10.806 15.821 20.673 15.821 9.8673 0 18.17-6.7372 20.676-15.821h66.25c2.506 9.0841 10.809 15.821 20.676 15.821 9.8673 0 18.167-6.7372 20.673-15.821h1.2542c8.301 0 13.624-3.6011 15.347-5.0107l0.31508-0.31202 0.78311-0.78312c1.4096-1.4096 6.1089-6.7348 6.1089-15.662v-16.917c0-3.6023-2.1927-6.8926-5.4818-8.3022l-24.13-9.706-14.09-33.986c-1.4096-3.2891-4.5439-5.4818-8.1462-5.4818h-19.89v-3.6036c0-4.8553-3.9144-8.9263-8.9263-8.9263h-96.794zm0 10.964h94.757v12.53h29.446l2.6614 6.2649h-18.483c-2.506 0-4.3836 2.0343-4.3836 4.3836v23.965c0 2.506 2.0343 4.3836 4.3836 4.3836h36.65l21.615 8.7733v15.818h-0.156c0 4.6987-2.3506 7.3613-2.8204 7.8312l-0.31202 0.31202c-0.31325 0.31325-3.4457 2.6644-8.6143 2.6644h-1.2542c-2.3494-9.2408-10.806-15.977-20.673-15.977-9.8673 0-18.327 6.7366-20.676 15.977h-66.25c-2.3493-9.2408-10.809-15.977-20.676-15.977-9.8673 0-18.324 6.7366-20.673 15.977h-15.035v-76.433c0-5.7951 4.6975-10.493 10.493-10.493zm25.372 17.229c-2.506 0-4.3836 2.0343-4.3836 4.3836v10.024h-10.024c-2.506 0-4.3867 2.0373-4.3867 4.3867v2.0343c0 2.506 2.0373 4.3867 4.3867 4.3867h10.024v10.024c0 2.506 2.0343 4.3836 4.3836 4.3836h2.0373c2.506 0 4.3867-2.0343 4.3867-4.3836v-10.024h10.021c2.506 0 4.3867-2.0373 4.3867-4.3867v-2.0343c0-2.506-2.0373-4.3867-4.3867-4.3867h-10.021v-10.024c0-2.3493-1.8807-4.3836-4.3867-4.3836h-2.0373zm89.275 12.53h16.604l4.5396 10.964h-21.144v-10.964zm-89.434 51.84c5.7951 0 10.496 4.6975 10.496 10.493 0 5.7951-4.7005 10.496-10.496 10.496-5.7951 0-10.493-4.7005-10.493-10.496 0-5.7951 4.6975-10.493 10.493-10.493zm107.44 0c5.7951 0 10.496 4.6975 10.496 10.493 0 5.7951-4.7005 10.496-10.496 10.496-5.7951 0-10.493-4.7005-10.493-10.496 0-5.7951 4.6975-10.493 10.493-10.493z" }));
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
Icon.displayName = 'SykebilIkon';
export default Icon;
