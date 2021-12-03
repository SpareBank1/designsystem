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
    React.createElement("path", { d: "m198.31 91.854-16.052-12.937v-27.552c0-3.8333-3.1145-6.7082-6.7082-6.7082h-16.291c-3.8333 0-6.7082 3.1145-6.7082 6.7082v2.8749l-8.8644-7.1874c-0.71873-0.71874-1.677-0.95832-2.6354-1.1979-1.1979-0.71874-2.3958-1.1979-3.8333-1.1979h-16.291c-3.8333 0-6.7082 3.1145-6.7082 6.7082v2.8749l-8.8644-7.1874c-0.71874-0.71874-1.6771-0.95832-2.6354-1.1979-1.1979-0.71874-2.3958-1.1979-3.8333-1.1979h-16.291c-3.8333 0-6.7082 3.1145-6.7082 6.7082v2.8749l-8.8644-7.1874c-2.3958-1.9166-5.9895-2.1562-8.6248 0l-56.79 44.802c-1.4375 1.1979-1.6771 3.3541-0.47916 4.7916l0.95832 1.1979c1.1979 1.4375 3.3541 1.6771 4.7916 0.47916l10.781-8.6248 8.3853-6.7082 36.416-28.749 12.219 10.062-34.739 27.552c-1.4375 1.1979-1.6771 3.3541-0.47916 4.7916l0.95832 1.1979c1.1979 1.4375 3.3541 1.6771 4.7916 0.47916l10.781-8.6248 8.3853-6.7082 17.01-13.416 2.6354-2.1562 13.177-10.302 3.5937-2.8749 4.7916 3.8333 7.427 5.9895-7.427 5.9895-8.3853 6.7082-18.927 14.854c-1.4375 1.1979-1.6771 3.3541-0.47916 4.7916l0.95832 1.1979c1.1979 1.4375 3.3541 1.6771 4.7916 0.47916l10.781-8.6248v57.02h-29.947v-49.353l-8.3853 6.7082v43.124h-29.947v-49.832l-8.3853 6.7082v44.801c0 3.8333 3.1145 6.7082 6.7082 6.7082h151.17c3.8333 0 6.7082-3.1145 6.7082-6.7082v-58.936l10.781 8.6248c1.4375 1.1979 3.5937 0.95832 4.7916-0.47916l0.95832-1.1979c1.1979-1.4375 1.1979-3.5937-0.47916-4.7916zm-114.28-34.978v-4.0728h5.0312l-5.0312 4.0728zm38.333 0v-4.0728h5.0312l-5.0312 4.0728z" }));
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
Icon.displayName = 'HusRekkehusIkon';
export default Icon;
