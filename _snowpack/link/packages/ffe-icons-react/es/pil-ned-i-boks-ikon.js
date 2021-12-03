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
    " ",
    React.createElement("path", { d: "m199.97,174.9v-51.23c0-3.642-2.9158-6.7984-6.8035-6.7984h-3.1588c-3.6447,0-6.8035,2.9136-6.8035,6.7984v47.831h-166.44v-48.074c0-3.642-2.9158-6.7984-6.8035-6.7984h-3.1587c-3.6447,0-6.8035,2.92-6.8035,6.8v51.23c0,7.77,6.3175,13.84,13.85,13.84h173c7.5324,0,13.607-6.3128,13.121-13.597z" }),
    React.createElement("path", { d: "m93.548,132.17c2.6728,2.6708,7.0464,2.6708,9.7192,0l20.41-20.395c4.3737-4.3704,1.2149-11.654-4.8596-11.654h-12.151v-81.832c0-3.642-2.9158-6.7984-6.8035-6.7984h-3.1588c-3.6447,0-6.8035,2.9136-6.8035,6.7984v81.823h-11.905c-6.0745,0-9.2333,7.284-4.8596,11.654l20.41,20.395z" }));
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
Icon.displayName = 'PilNedIBoksIkon';
export default Icon;
