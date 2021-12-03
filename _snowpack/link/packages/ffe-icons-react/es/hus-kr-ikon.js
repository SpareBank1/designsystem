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
    React.createElement("path", { id: "path3444", d: "m102.09 11.354c-1.2202-0.02392-2.465 0.35738-3.5178 1.2187l-94.173 74.456c-2.2968 1.914-2.6796 5.3593-0.95701 7.6561l1.5327 1.914c1.914 2.2968 5.3593 2.6796 7.6561 0.95701l89.002-70.437 34.452 28.138v-30.243h21.054v47.66l30.815 24.692c2.2968 1.914 5.742 1.5305 7.6561-0.76636l1.529-1.914c1.914-2.2968 1.5342-5.742-0.76261-7.6561l-25.839-20.673v-49.379c0-3.0624-2.4897-5.3607-5.3608-5.3607h-36.942c-3.0624 0-5.357 2.4897-5.357 5.3607v9.9514l-17.417-14.355c-0.95702-0.76561-2.1555-1.1948-3.3757-1.2187zm55.436 83.331v80.389h-0.19065-113.88v-79.432l-13.398 10.527v71.394c0 5.9334 4.7836 10.908 10.908 10.908h119.05c5.9335 0 10.908-4.7836 10.908-10.908v-71.97l-13.398-10.908zm-91.297 0.76636c-2.2968 0-3.6374 1.1491-3.6374 3.6374v39.428c0 2.2968 1.1492 3.6374 3.6374 3.6374h4.2093c2.2968 0 3.6374-1.1492 3.6374-3.6374v-15.312h4.785l8.4224 16.46c0.95701 1.7226 2.2953 2.4897 4.2093 2.4897h4.9757c2.871 0 3.8295-1.9163 2.4897-4.2131l-10.912-19.907v-0.19066l10.146-17.993c1.3398-2.4882 0.38131-4.2094-2.4897-4.2094h-4.4c-1.914 0-3.2561 0.7671-4.2131 2.4897l-8.228 15.503h-4.785v-14.355c0-2.4882-1.3406-3.828-3.6374-3.828h-4.2093zm43.065 0c-2.2968 0-3.6374 1.1491-3.6374 3.6374v39.428c0 2.2968 1.1492 3.6374 3.6374 3.6374h4.2094c2.2968 0 3.6374-1.1492 3.6374-3.6374v-12.06h5.357l6.8934 13.207c0.95702 1.7226 2.2953 2.4897 4.2094 2.4897h4.9757c2.871 0 3.8295-1.9163 2.4897-4.2131l-6.6991-12.056-1.7234-2.871v-0.19439c4.4022-2.2968 6.8897-7.6553 6.8897-12.632 0-6.6991-3.2538-11.483-8.6131-13.589-2.1054-0.76561-4.2093-1.1477-8.9944-1.1477h-12.632zm7.6561 9.9514h3.828c1.914 0 3.2523 0.19288 4.2094 0.57568 2.1054 0.76561 2.6804 2.6789 2.6804 4.9757 0.1914 3.6366-2.1054 5.7421-5.7421 5.7421h-4.9757v-11.293z" }));
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
Icon.displayName = 'HusKrIkon';
export default Icon;
