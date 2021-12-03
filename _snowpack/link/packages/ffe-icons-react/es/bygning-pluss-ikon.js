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
    React.createElement("path", { d: "m28.948,15.918c-3.1932,0-5.7641,2.6199-5.7641,5.8152v16.629h-16.68c-3.1932,0-5.7641,2.6199-5.7641,5.8152v0.66314c0,3.1953,2.5709,5.7642,5.7641,5.7642h16.68v16.68c0,3.1953,2.5709,5.7642,5.7641,5.7642h0.71414c3.1953,0,5.7641-2.5689,5.7641-5.7642v-16.68h16.68c3.1953,0,5.7641-2.5689,5.7641-5.7642v-0.66314c0-3.1953-2.5689-5.8152-5.7641-5.8152h-16.68v-16.629c0-3.1953-2.5689-5.8152-5.7641-5.8152h-0.714zm93.808,11.936c-2.9724,0-5.9508,1.1406-8.2126,3.4177l-65.548,66.007c-7.2496,7.2985-2.0731,19.69,8.2126,19.69h4.0808v52.949c0,6.3885,5.1908,11.579,11.579,11.579h99.776c6.3885,0,11.579-5.1908,11.579-11.579v-52.949h4.0808c10.288,0,15.462-12.391,8.2126-19.69l-65.55-66.03c-2.2618-2.2771-5.2403-3.4177-8.2126-3.4177zm0,13.977,61.467,61.875-13.263,0,0,64.528-96.409,0,0-64.528-13.263,0,61.467-61.875z" }));
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
Icon.displayName = 'BygningPlussIkon';
export default Icon;
