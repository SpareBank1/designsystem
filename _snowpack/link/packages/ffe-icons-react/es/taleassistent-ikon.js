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
var svg = React.createElement("svg", { viewBox: "0 0 122 118.7" },
    React.createElement("path", { d: "M62.6,118.7c-12.3,0-24-3.7-34.1-10.7l-24.7,2.3c-1.2,0.1-2.4-0.4-3.1-1.4 c-0.7-1-0.9-2.2-0.5-3.4l8.4-21.4C5,76.3,3.2,68,3.2,59.4C3.2,26.6,29.9,0,62.6,0C95.3,0,122,26.6,122,59.4 C122,92.1,95.3,118.7,62.6,118.7z M29.5,100.9c0.7,0,1.5,0.2,2.1,0.7c9,6.6,19.8,10.2,31,10.2c28.9,0,52.4-23.5,52.4-52.4 S91.5,7,62.6,7C33.7,7,10.2,30.5,10.2,59.4c0,8.1,1.8,15.8,5.3,23c0.4,0.9,0.5,1.9,0.1,2.8l-6.9,17.6l20.4-1.9 C29.3,100.9,29.4,100.9,29.5,100.9z" }),
    React.createElement("g", null,
        React.createElement("path", { d: "M24.3,65.8h-2.8c-1.1,0-2-0.9-2-2v-8.5c0-1.1,0.9-2,2-2h2.8c1.1,0,2,0.9,2,2v8.5 C26.3,64.9,25.4,65.8,24.3,65.8z" }),
        React.createElement("path", { d: "M34.4,68.6h-2.8c-1.1,0-2-0.9-2-2V52.4c0-1.1,0.9-2,2-2h2.8c1.1,0,2,0.9,2,2v14.2 C36.5,67.7,35.6,68.6,34.4,68.6z" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M47.7,75.9H42c-1.2,0-2.2-1-2.2-2.2V45.3c0-1.2,1-2.2,2.2-2.2h5.7c1.2,0,2.2,1,2.2,2.2v28.3 C49.9,74.9,48.9,75.9,47.7,75.9z M44.2,71.4h1.2V47.5h-1.2V71.4z" }),
            React.createElement("rect", { xmlns: "http://www.w3.org/2000/svg", id: "XMLID_1017_", x: "42", y: "45.3", width: "5.7", height: "28.3" })),
        React.createElement("path", { d: "M58.2,70h-2.8c-1.1,0-2-0.9-2-2V51c0-1.1,0.9-2,2-2h2.8c1.1,0,2,0.9,2,2v17 C60.2,69.1,59.3,70,58.2,70z" }),
        React.createElement("path", { d: "M68.2,72.1h-2.8c-1.1,0-2-0.9-2-2V48.8c0-1.1,0.9-2,2-2h2.8c1.1,0,2,0.9,2,2v21.3 C70.2,71.2,69.3,72.1,68.2,72.1z" }),
        React.createElement("g", null,
            React.createElement("path", { d: "M81.5,80.1h-5.7c-1.2,0-2.2-1-2.2-2.2V41.1c0-1.2,1-2.2,2.2-2.2h5.7c1.2,0,2.2,1,2.2,2.2 v36.9C83.8,79.1,82.8,80.1,81.5,80.1z M78.1,75.7h1.2V43.3h-1.2V75.7z" }),
            React.createElement("rect", { xmlns: "http://www.w3.org/2000/svg", id: "XMLID_1009_", x: "75.9", y: "41.1", width: "5.7", height: "36.9" })),
        React.createElement("path", { d: "M92.1,70h-2.8c-1.1,0-2-0.9-2-2V51c0-1.1,0.9-2,2-2h2.8c1.1,0,2,0.9,2,2v17 C94.2,69.1,93.3,70,92.1,70z" }),
        React.createElement("path", { d: "M102.1,65.8h-2.8c-1.1,0-2-0.9-2-2v-8.5c0-1.1,0.9-2,2-2h2.8c1.1,0,2,0.9,2,2v8.5 C104.2,64.9,103.3,65.8,102.1,65.8z" })));
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
Icon.displayName = 'TaleassistentIkon';
export default Icon;
