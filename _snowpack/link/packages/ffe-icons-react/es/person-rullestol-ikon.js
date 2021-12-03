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
    React.createElement("path", { d: "M82.107.588c-17.538 0-31.695 11.827-31.695 26.479v8.295c0 14.652 14.157 26.48 31.695 26.48h.425c17.538 0 31.695-11.828 31.695-26.48v-8.295c0-14.652-14.157-26.48-31.695-26.48h-.425zm0 12.357h.425c9.297 0 16.904 6.355 16.904 14.122v8.295c0 7.767-7.607 14.122-16.904 14.122h-.425c-9.297 0-16.904-6.355-16.904-14.122v-8.295c0-7.767 7.607-14.122 16.904-14.122zm21.844 64.208c-2.076-.035-4.172.862-5.36 2.517l-1.478 2.12c-1.268 2.118-.847 4.766 1.477 6.354 6.973 4.767 11.2 12.003 11.2 19.594l-.425 30.01c-.211 2.825 2.537 5.12 5.918 5.12h36.767l17.96 47.662c1.057 2.648 4.226 4.06 7.396 3.53l14.79-3.178c3.17-.706 5.072-3.53 4.227-6.178l-.636-2.293c-.845-2.648-4.226-4.237-7.396-3.53l-6.76 1.41-17.538-46.074c-.846-2.118-3.168-3.53-5.704-3.53h-34.233l.425-22.773c0-11.651-6.342-22.593-17.118-29.654-1.03-.728-2.266-1.086-3.512-1.107zm-26.701.045c-3.38-.177-6.128 1.944-6.339 4.768l-2.748 43.249c0 1.06.212 1.941.846 2.824l18.38 25.948c1.69 2.295 5.284 3.18 8.242 1.944l2.324-1.237c2.746-1.413 3.803-4.59 2.113-6.886l-16.907-24 2.538-41.127c.21-2.824-2.327-5.119-5.708-5.295l-2.744-.18zm-25.442 7.157a7.281 7.281 0 0 0-2.451.61c-23.243 10.768-38.034 31.246-38.034 53.665 0 33.717 32.755 61.078 73.113 61.078 17.96 0 35.287-5.649 48.599-15.712 2.746-1.941 2.746-5.47.21-7.412l-1.902-1.59c-2.113-1.765-5.707-1.94-8.031-.175-10.776 8.12-24.296 12.357-38.876 12.357-27.68 0-51.983-16.595-57.265-39.367-5.072-21.36 7.397-42.013 28.95-52.075 2.746-1.236 4.012-3.883 2.744-6.355l-1.057-2.113c-1.109-1.986-3.524-3.08-6-2.907z" }));
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
Icon.displayName = 'PersonRullestolIkon';
export default Icon;
