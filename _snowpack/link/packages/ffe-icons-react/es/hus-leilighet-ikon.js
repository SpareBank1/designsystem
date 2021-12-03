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
    React.createElement("path", { d: "m133.95 10.126c-6.2251 0-10.889 5.0534-10.889 10.889v4.6734l-14.4-11.672c-3.8907-3.1126-9.7252-3.5016-14.005 0l-92.211 72.754c-2.3344 1.9454-2.7281 5.447-0.7827 7.7814l1.5578 1.9454c1.9454 2.3344 5.447 2.7281 7.7814 0.7827l17.509-14.012 13.617-10.889 59.134-46.689 35.016 28.793v-30.738h21.399v48.634l31.521 25.29c2.3344 1.9454 5.8361 1.5517 7.7814-0.7827l1.5502-1.9454c1.5563-2.7235 1.5608-6.2236-1.1627-8.169l-26.072-21.011v-44.743c0-6.2251-5.0534-10.889-10.889-10.889h-26.46zm-91.819 85.208-13.617 10.889v72.761c0 6.2251 5.061 10.889 10.897 10.889h121c6.2251 0 10.889-5.0534 10.889-10.889v-72.373l-13.222-11.277h-115.95zm0 40.457h115.95v40.465h-0.39514-115.55v-40.465z" }));
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
Icon.displayName = 'HusLeilighetIkon';
export default Icon;
