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
    React.createElement("path", { d: "m 68.318613,0.00504376 c -20.909635,0 -38.09361,16.97697724 -38.09361,38.09363824 l 0,12.627764 c 0,20.909637 16.976948,38.093631 38.09361,38.093631 l 0.61866,0 c 20.909615,0 38.093607,-17.183994 38.093607,-38.093631 l 0,-12.627764 c 0,-20.909636 -16.976966,-38.09363824 -38.093607,-38.09363824 l -0.61866,0 z M 132.49672,4.3559027 c -3.10539,0 -5.79835,2.4818301 -5.79835,5.7942573 l 0,2.692995 c 0,3.105392 2.48592,5.794245 5.79835,5.794245 l 40.98873,0 c 3.31243,0 6.00538,-2.688853 5.79835,-5.794245 l 0,-2.692995 c 0,-3.1054008 -2.48592,-5.7942567 -5.79835,-5.7942567 l -40.98873,0 z m -64.384326,9.9347783 0.61866,0 c 13.042645,0 23.601783,10.55916 23.601783,23.601802 l 0,12.627766 c 0,13.042644 -10.559138,23.601801 -23.601783,23.601801 l -0.61866,0 c -13.042623,0 -23.601781,-10.559157 -23.601781,-23.601801 l 0,-12.627766 c 0,-13.042642 10.559158,-23.601802 23.601781,-23.601802 z m 64.384326,20.908807 c -3.10539,0 -5.79835,2.48597 -5.79835,5.798388 l 0,2.692996 c 0,3.105391 2.48592,5.794245 5.79835,5.794245 l 61.69135,0 c 3.31241,0 6.00536,-2.481828 5.79834,-5.794245 l 0,-2.692996 c 0,-3.105393 -2.48593,-5.798388 -5.79834,-5.798388 l -61.69135,0 z m 0,30.847718 c -3.10539,0 -5.79835,2.485969 -5.79835,5.798386 l 0,2.688856 c 0,3.10539 2.48592,5.798386 5.79835,5.798386 l 61.69135,0 c 3.31241,0 6.00536,-2.485969 5.79834,-5.798386 l 0,-2.688856 c 0,-3.105391 -2.48593,-5.798386 -5.79834,-5.798386 l -61.69135,0 z m -20.0961,29.5538 c -2.02375,-0.0414 -3.99899,1.01091 -5.16352,2.95177 l -1.44757,2.482724 c -1.44918,2.48431 -0.82972,5.58888 1.44757,7.45211 9.5232,7.24591 15.32074,18.83938 15.32074,31.05391 l 0,34.78204 -107.859794,0 0,-34.78204 c 0,-12.21453 5.797538,-23.808 15.320739,-31.05391 2.277287,-1.65619 2.896751,-4.9678 1.447567,-7.45211 l -1.447567,-2.482724 c -1.863236,-3.10539 -5.799154,-3.72812 -8.697519,-1.65786 C 8.0715964,106.83224 0,122.77241 0,139.54152 l 0,37.68124 c 0,6.62485 5.3810848,11.79883 11.798873,11.79883 l 113.451927,0 c 6.62483,0 11.79806,-5.17398 12.00509,-11.79883 l 0,-37.68124 c 0,-16.76911 -8.0716,-32.50226 -21.32126,-42.646604 -1.0869,-0.85398 -2.31976,-1.26969 -3.53401,-1.29391 z" }));
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
Icon.displayName = 'PersonStrekerIkon';
export default Icon;
