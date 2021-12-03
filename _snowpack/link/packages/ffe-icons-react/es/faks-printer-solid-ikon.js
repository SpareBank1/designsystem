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
    React.createElement("path", { d: "m163.84 106.26c-6.2736 0-11.359-5.0961-11.359-11.383 0-6.287 5.0853-11.383 11.359-11.383 6.2736 0 11.359 5.0961 11.359 11.383 0 6.287-5.0853 11.383-11.359 11.383m15.819-37.286h-158.27c-6.733-0.004-12.39 5.514-12.39 12.258v91.136c0 6.7437 5.6573 11.552 12.387 11.552h27.378v-44.447h102.47v44.447h28.421c6.7294 0 11.344-4.8079 11.344-11.552v-91.136c0-6.7437-4.6142-12.261-11.344-12.261" }),
    React.createElement("path", { d: "m71.861 200c-4.2885 0-7.7633-3.4822-7.7633-7.7782v-37.622h71.732v37.622c0 4.296-3.4764 7.7782-7.7633 7.7782h-56.206z" }),
    React.createElement("path", { d: "m155.82 53.168v-40.907c0-6.7434-4.61-12.261-11.34-12.261h-84.858c-6.729-1.9e-7 -12.387 5.5176-12.387 12.261v40.907h108.59z" }));
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
Icon.displayName = 'FaksPrinterSolidIkon';
export default Icon;
