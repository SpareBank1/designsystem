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
    React.createElement("path", { d: "M99.9989972,0 C123.930491,0 148.14635,14.1759903 149.473209,41.3046187 L149.530345,43.6616219 L149.530345,69.1662698 L163.630012,69.1662698 C169.491035,69.1662698 174.316005,73.7435663 174.933285,79.6241961 L175,80.9030869 L175,188.263183 C175,194.313299 170.565765,199.293937 164.868932,199.931132 L163.630012,200 L36.3699876,200 C30.5089652,200 25.6839954,195.422703 25.0667151,189.542074 L25,188.263183 L25,80.9030869 C25,74.8529706 29.434235,69.8723329 35.131068,69.2351373 L36.3699876,69.1662698 L50.4696546,69.1662698 L50.4696546,43.6616219 C50.4696546,14.9976191 75.3857519,0 99.9989972,0 Z M160.960502,83.6587234 L39.0394978,83.6587234 L39.0394978,185.507546 L160.960502,185.507546 L160.960502,83.6587234 Z M99.9989972,14.4924536 C83.4766476,14.4924536 65.7342189,23.024161 64.5697485,41.694026 L64.5091524,43.6616219 L64.5091524,69.1662698 L135.490848,69.1662698 L135.490848,43.6616219 C135.490848,23.6226993 117.093089,14.4924536 99.9989972,14.4924536 Z" }));
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
Icon.displayName = 'HengelasOmrissIkon';
export default Icon;
