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
    React.createElement("path", { d: "m168.56,35c-7.3569-0.35717-8.8347,7.4883-8.1875,13.185-0.3441,2.6316,1.4556,7.407-2.8625,6.0646-29.975,0.08599-59.967-0.17224-89.931,0.12955-6.4615,1.4675-4.7348,8.8085-4.9561,13.691-0.7404,4.7598,1.1901,11.138,7.2042,10.335h90.546c0.42866,5.2767-1.1192,11.013,1.407,15.858,3.7179,5.5444,11.306,3.4092,14.587-1.3681,7.4247-7.4285,14.958-14.752,22.312-22.249,3.9564-5.5554-1.5884-10.555-5.4254-14.113-6.86-6.69-13.48-13.66-20.51-20.167-1.23-0.836-2.69-1.324-4.18-1.367zm-137.12,67.156c-6.0098,0.85502-9.1712,6.8182-13.561,10.444-5.4869,5.5897-11.271,10.909-16.559,16.68-3.8247,5.4758,1.1417,10.619,5.1085,14.076,7.2706,6.8445,13.985,14.37,21.633,20.753,6.1454,3.4359,13.04-3.0079,11.566-9.433v-8.9271c30.929-0.086,61.876,0.17226,92.794-0.12955,6.4615-1.4675,4.7348-8.8085,4.956-13.691,0.70757-4.8278-0.97702-11.394-7.2042-10.554h-90.546c-0.41449-5.3241,1.121-11.105-1.49-15.97-1.518-2.1-4.1129-3.3421-6.6975-3.2489z" }));
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
Icon.displayName = 'PilerHoyreVenstreIkon';
export default Icon;
