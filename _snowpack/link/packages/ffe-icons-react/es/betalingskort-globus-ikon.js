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
    React.createElement("path", { d: "M168.695659 29.000007c-17.217392 0-31.304349 14.112884-31.304349 31.361963s14.086957 31.361963 31.304349 31.361963 31.304349-14.112884 31.304349-31.361963-14.086957-31.361963-31.304349-31.361963zM192.69566 57.57424h-7.652174c-.521739-7.492025-3.130435-14.287117-7.130435-19.862577 8 3.310429 13.913044 10.976687 14.782609 19.862577zm-26.608697-19.688344V57.57424h-8.695652c.521739-7.666258 3.478261-14.635583 8.695652-19.688344zm0 24.915338v19.688344c-4.869565-5.052761-8-12.022086-8.695652-19.688344h8.695652zm5.217391 19.688344V62.801234h8.695652c-.695652 7.666258-3.652174 14.635583-8.695652 19.688344zm0-24.915338V37.885896c4.869565 5.052761 8 12.022086 8.695652 19.688344h-8.695652zm-12-19.862577c-4.173913 5.57546-6.782609 12.544785-7.130435 19.862577h-7.652174c.869565-8.88589 6.782609-16.552147 14.782609-19.862577zm-14.782609 25.089571h7.652174c.521739 7.492025 3.130435 14.287117 7.130435 19.862577-8-3.310429-13.913044-10.802454-14.782609-19.862577zm33.391306 19.862577c4.173913-5.57546 6.782609-12.544785 7.130435-19.862577h7.652174c-.869565 9.060123-6.782609 16.552147-14.782609 19.862577z" }),
    React.createElement("path", { d: "M161.565224 118.555836H12.347827V66.634363h115.652178V54.438044H9.913044C4.521739 54.438044 0 58.793872 0 64.369332v96.699387c0 5.401227 4.347826 9.931288 9.913044 9.931288h153.913049c5.391305 0 9.913044-4.355828 9.913044-9.931288v-60.11043h-12.173913v17.597546zm0 40.247853H12.347827v-17.597546h149.217397v17.597546z" }));
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
Icon.displayName = 'BetalingskortGlobusIkon';
export default Icon;
