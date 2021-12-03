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
    React.createElement("path", { d: "m50.87005,148.32372l0.26374,-109.67722c0,-20.02431 16.47391,-37.02569 36.5185,-36.64022a35.82871,35.82871 0 0 1 35.07804,35.86927l-0.26374,107.79043a22.45887,22.45887 0 0 1 -19.96345,22.54003a22.07341,22.07341 0 0 1 -24.1225,-21.99225l0.14201,-59.58602a5.76181,5.76181 0 0 1 5.76181,-5.74151l2.69831,0a5.76181,5.76181 0 0 1 5.74151,5.76181l-0.14201,59.36284a7.99349,7.99349 0 0 0 6.08642,7.91234a7.85147,7.85147 0 0 0 9.51509,-7.64859l0.26374,-107.81072a21.99225,21.99225 0 0 0 -19.45624,-22.15455a21.60677,21.60677 0 0 0 -23.65586,21.42419l-0.26374,110.81334c0,19.59826 15.94641,36.33591 35.56496,36.07217a35.09832,35.09832 0 0 0 34.48969,-34.95631l0.14201,-60.39753a5.74151,5.74151 0 0 1 5.76181,-5.74151l2.69831,0a5.74151,5.74151 0 0 1 5.74151,5.76181l-0.14201,60.39753a49.32026,49.32026 0 0 1 -48.48845,49.13767c-27.55118,0.40576 -50.03034,-22.9255 -49.96948,-50.49696l0,-0.00001l0.00001,-0.00003l0.00001,0z" }));
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
Icon.displayName = 'BindersIkon';
export default Icon;
