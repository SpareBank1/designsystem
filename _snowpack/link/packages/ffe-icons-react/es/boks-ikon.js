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
    React.createElement("path", { d: "m99.999998,0.0000018c-1.552163,0-3.111256,0.2917472-4.607985,0.9030282l-86.1311973,34.801333c-4.6564895,1.889415-7.7608157,6.425396-7.7608157,11.426786v105.723811c0,5.00139,3.1043262,9.53737,7.7608157,11.42678l86.1311973,34.80134c2.993458,1.22256,6.222507,1.22256,9.215967,0l86.1312-34.80134c4.65649-1.88941,7.76082-6.42539,7.76082-11.42678v-105.723811c0-5.00139-3.10433-9.537371-7.76082-11.426786l-86.1312-34.801333c-1.49673-0.611281-3.05582-0.9030282-4.607982-0.9030282zm0.034642,14.3442622,72.51513,29.244235-72.51513,29.244232-72.515119-29.244232,72.515119-29.244235zm84.39888,39.802721,0,97.457625-77.29634,31.18922,0-97.492357,77.29634-31.154488zm-168.763102,0.03473,77.29634,31.119756,0,97.492359-77.29634-31.18922,0-97.422895z" }));
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
Icon.displayName = 'BoksIkon';
export default Icon;
