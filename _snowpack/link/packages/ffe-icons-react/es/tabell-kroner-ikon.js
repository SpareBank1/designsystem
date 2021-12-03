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
    React.createElement("path", { d: "m14.081242,0c-7.922631,0 -14.081239,6.413633 -14.081239,14.097599l0,171.804811c0,7.931836 6.40619,14.097599 14.081239,14.097599l171.837535,0c7.675049,0 13.833657,-6.181255 14.081239,-13.865221l0,-172.037189c0,-7.931836 -6.40619,-14.097599 -14.081239,-14.097599l-171.837535,0zm3.249517,17.350892l29.941975,0l0,73.818749l-29.941975,0l0,-73.818749zm47.27273,0l117.833663,0l0,73.818749l-117.833663,0l0,-73.818749zm24.99033,15.336949c-2.22824,0 -3.481625,1.254841 -3.481625,3.48567l0,38.187453c0,2.230829 1.253385,3.48567 3.481625,3.48567l3.945842,0c2.22824,0 3.481625,-1.254841 3.481625,-3.48567l0,-14.639815l4.487428,0l8.123792,15.646786c0.742747,1.735089 1.965184,2.478699 3.945842,2.478699l4.719536,0c2.723404,0 3.713733,-1.781565 2.475822,-4.260264l-10.367505,-19.054997l0,-0.232378l9.67118,-17.350892c1.237911,-2.478699 0.247582,-4.260264 -2.475822,-4.260264l-4.255319,0c-1.733076,0 -2.955513,0.74361 -3.945842,2.478699l-7.891683,14.872193l-4.487428,0l0,-13.865221c0,-2.230829 -1.253385,-3.48567 -3.481625,-3.48567l-3.945842,0zm41.083175,0c-2.22824,0 -3.481625,1.254841 -3.481625,3.48567l0,37.645238c0,2.230829 1.253385,3.48567 3.481625,3.48567l3.945842,0c2.22824,0 3.481625,-1.254841 3.481625,-3.48567l0,-11.618901l5.183753,0l6.731142,12.625872c0.742747,1.735089 1.965184,2.478699 3.945842,2.478699l4.719536,0c2.723404,0 3.961316,-1.704105 2.475822,-4.182804l-6.421664,-11.386523c-0.990329,-1.982959 -1.779497,-2.788536 -1.779497,-2.788536l0,-0.232378c4.45648,-2.230829 6.731142,-7.451588 6.731142,-12.161116c0,-6.444617 -3.249517,-10.875291 -8.201161,-12.85825c-1.980658,-0.74361 -4.208898,-1.006971 -8.665378,-1.006971l-12.147003,0zm7.195358,9.450039l3.713733,0c1.980658,0 3.187621,0.201394 4.17795,0.697134c2.22824,0.74361 2.7853,2.494191 2.7853,4.72502c0,3.470178 -2.259188,5.499613 -5.725339,5.499613l-4.951644,0l0,-10.921767zm-120.541593,66.382652l29.941975,0l0,28.272658l-29.941975,0l0,-28.272658zm47.27273,0l117.833663,0l0,28.272658l-117.833663,0l0,-28.272658zm-47.27273,45.62355l29.941975,0l0,28.505036l-29.941975,0l0,-28.505036zm47.27273,0l117.833663,0l0,28.505036l-117.833663,0l0,-28.505036z" }));
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
Icon.displayName = 'TabellKronerIkon';
export default Icon;
