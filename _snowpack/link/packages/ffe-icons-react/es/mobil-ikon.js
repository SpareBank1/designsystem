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
    React.createElement("path", { d: "m154.63 0.34059h-109.25c-6.752 0-12.225 5.4732-12.225 12.225v174.87c0 6.752 5.4732 12.225 12.225 12.225h109.25c6.752 0 12.225-5.4732 12.225-12.225v-174.87c-0.01-6.7562-5.48-12.229-12.23-12.229zm-45.94 182.33c0 2.5317-2.053 4.5847-4.5847 4.5847h-8.2141c-2.5317 0-4.5847-2.053-4.5847-4.5847v-8.2141c0-2.5317 2.053-4.5847 4.5847-4.5847h8.2141c2.5317 0 4.5847 2.053 4.5847 4.5847v8.2141zm44.144-28.662c0 3.3771-2.7366 6.1137-6.1137 6.1137h-93.443c-3.3749 0-6.1115-2.7366-6.1115-6.1137v-133.54c0-3.3749 2.7366-6.1137 6.1115-6.1137h93.443c3.3749 0 6.1137 2.7366 6.1137 6.1137v133.54z" }));
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
Icon.displayName = 'MobilIkon';
export default Icon;
