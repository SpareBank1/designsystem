import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
export { K as KryssIkon } from '../common/kryss-ikon-6702249b.js';
import '../common/_commonjsHelpers-4f955397.js';

var __assign$d = (undefined && undefined.__assign) || function () {
    __assign$d = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$d.apply(this, arguments);
};
var __rest$d = (undefined && undefined.__rest) || function (s, e) {
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
var svg$d = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "m50.182292,42.000005c-7.746734,0 -13.365133,3.534375 -16.592939,6.595487c-4.357538,4.027778 -9.875068,9.696876 -15.685119,15.657986c-3.066415,3.22222 -6.949868,7.08889 -10.339064,10.47222c-5.16449,5.15556 -7.56517,10.95555 -7.56517,17.72223l0,37.055552c0,4.99445 4.014583,9.1632 9.179072,9.1632l10.84341,0c3.873367,11.27778 14.504952,19.33333 26.932004,19.33333s23.270462,-8.05555 26.982438,-19.33333l45.794496,0c3.87337,11.27778 14.55539,19.33333 26.98244,19.33333s23.22003,-8.05555 26.93201,-19.33333l2.11824,0c8.87647,0 14.50495,-3.83646 16.44164,-5.28646l0.35304,-0.35243l0.80695,-0.80556c1.6139,-1.45 6.60692,-7.05868 6.60692,-16.56423l0,-14.34896c0.16139,-2.094452 -0.19166,-11.751042 -6.00171,-17.067712l-0.3026,-0.35243c-2.90503,-3.06111 -7.26257,-6.25313 -17.75293,-7.70313c-5.32588,-0.64444 -12.27575,-1.61111 -19.21553,-2.41666l-0.30261,0c-5.0031,-0.64445 -13.56687,-4.06806 -18.40858,-8.25695c-6.93978,-5.96111 -17.42006,-15.436458 -18.71119,-16.564236c-5.0031,-4.994445 -10.48028,-6.947917 -19.51814,-6.947917l-49.577078,0zm0,10.975695l49.577078,0c7.26257,0 9.34047,1.419792 11.59993,3.675347c1.77529,1.772221 12.58844,11.630211 19.36684,17.269101c6.93978,5.96111 17.75293,9.96875 24.20854,10.7743l0.30261,0c6.93978,0.80556 13.88965,1.77223 19.21553,2.41667c7.90812,1.12778 10.01628,3.09132 11.14601,4.38021l0.80695,0.80555c1.61391,1.61112 2.41077,6.12223 2.57216,8.861122l0,14.29861l-0.1513,0c0,5.15555 -2.59233,7.92465 -3.0765,8.40798l-0.30261,0.30209c-0.32278,0.32222 -3.73215,2.92014 -9.38081,2.92014l-0.65565,0c-1.12973,-14.66111 -13.38531,-26.28125 -28.3946,-26.28125c-15.0093,0 -27.26487,11.62014 -28.39461,26.28125l-43.272771,0c-1.129732,-14.66111 -13.385307,-26.28125 -28.394603,-26.28125c-15.009297,0 -27.264872,11.77118 -28.394604,26.43229l-7.262562,0l0,-34.940982c0,-3.86667 1.270948,-6.80694 4.337364,-9.86805c3.389196,-3.38334 7.262562,-7.39097 10.490368,-10.77431c5.64866,-5.8 10.984626,-11.28785 15.180774,-15.154512c2.582244,-2.416667 5.64866,-3.524306 8.876466,-3.524306zm-3.227806,59.10764c9.522027,0 17.299021,7.76355 17.299021,17.2691c0,9.50556 -7.776994,17.21875 -17.299021,17.21875s-17.248587,-7.71319 -17.248587,-17.21875c0,-9.50555 7.72656,-17.2691 17.248587,-17.2691zm99.910674,0c9.52203,0 17.24859,7.76355 17.24859,17.2691c0,9.50556 -7.72656,17.21875 -17.24859,17.21875c-9.52202,0 -17.24858,-7.71319 -17.24858,-17.21875c0,-9.50555 7.72656,-17.2691 17.24858,-17.2691z" }));
var Icon$q = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$d(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$d({}, svg$d.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$d.props.children));
};
Icon$q.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$q.displayName = 'BilIkon';
var Icon$r = Icon$q;

var __assign$c = (undefined && undefined.__assign) || function () {
    __assign$c = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$c.apply(this, arguments);
};
var __rest$c = (undefined && undefined.__rest) || function (s, e) {
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
var svg$c = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "m50.87005,148.32372l0.26374,-109.67722c0,-20.02431 16.47391,-37.02569 36.5185,-36.64022a35.82871,35.82871 0 0 1 35.07804,35.86927l-0.26374,107.79043a22.45887,22.45887 0 0 1 -19.96345,22.54003a22.07341,22.07341 0 0 1 -24.1225,-21.99225l0.14201,-59.58602a5.76181,5.76181 0 0 1 5.76181,-5.74151l2.69831,0a5.76181,5.76181 0 0 1 5.74151,5.76181l-0.14201,59.36284a7.99349,7.99349 0 0 0 6.08642,7.91234a7.85147,7.85147 0 0 0 9.51509,-7.64859l0.26374,-107.81072a21.99225,21.99225 0 0 0 -19.45624,-22.15455a21.60677,21.60677 0 0 0 -23.65586,21.42419l-0.26374,110.81334c0,19.59826 15.94641,36.33591 35.56496,36.07217a35.09832,35.09832 0 0 0 34.48969,-34.95631l0.14201,-60.39753a5.74151,5.74151 0 0 1 5.76181,-5.74151l2.69831,0a5.74151,5.74151 0 0 1 5.74151,5.76181l-0.14201,60.39753a49.32026,49.32026 0 0 1 -48.48845,49.13767c-27.55118,0.40576 -50.03034,-22.9255 -49.96948,-50.49696l0,-0.00001l0.00001,-0.00003l0.00001,0z" }));
var Icon$o = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$c(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$c({}, svg$c.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$c.props.children));
};
Icon$o.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$o.displayName = 'BindersIkon';
var Icon$p = Icon$o;

var __assign$b = (undefined && undefined.__assign) || function () {
    __assign$b = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$b.apply(this, arguments);
};
var __rest$b = (undefined && undefined.__rest) || function (s, e) {
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
var svg$b = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "M35.625,0c-6.316354,0-11.625,5.112283-11.625,11.65625v176.6875c0,6.33947,5.104892,11.65625,11.625,11.65625h128.75c6.31635,0,11.625-5.11228,11.625-11.65625v-176.6875c-0.20375-6.339468-5.30864-11.65625-11.625-11.65625h-128.75zm1.625,13.28125h125.3125v173.21875h-125.3125v-173.21875zm21.78125,30.0625c-3.260054,0-5.6875,2.682516-5.6875,5.75v1.625c0,3.271984,2.6312,5.71875,5.6875,5.71875h82.53125c3.26005,0,5.71875-2.651266,5.71875-5.71875v-1.625c0-3.271984-2.66245-5.75-5.71875-5.75h-82.53125zm0,34.78125c-3.260054,0-5.6875,2.651259-5.6875,5.71875v1.625c0,3.271984,2.6312,5.75,5.6875,5.75h82.53125c3.26005,0,5.71875-2.682516,5.71875-5.75v-1.625c0-3.27199-2.66245-5.71875-5.71875-5.71875h-82.53125zm0,34.75c-3.260054,0-5.6875,2.68252-5.6875,5.75v1.625c0,3.27198,2.6312,5.71875,5.6875,5.71875h82.53125c3.26005,0,5.71875-2.65127,5.71875-5.71875v-1.625c0-3.27198-2.66245-5.75-5.71875-5.75h-82.53125zm0,34.96875c-3.260054,0-5.6875,2.68252-5.6875,5.75v1.625c0,3.06749,2.6312,5.71875,5.6875,5.71875h82.53125c3.26005,0,5.71875-2.65127,5.71875-5.71875v-1.625c0-3.27198-2.66245-5.75-5.71875-5.75h-82.53125z" }));
var Icon$m = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$b(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$b({}, svg$b.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$b.props.children));
};
Icon$m.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$m.displayName = 'DokumentMedTekstIkon';
var Icon$n = Icon$m;

var __assign$a = (undefined && undefined.__assign) || function () {
    __assign$a = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$a.apply(this, arguments);
};
var __rest$a = (undefined && undefined.__rest) || function (s, e) {
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
var svg$a = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "m158.05,5c-5.14439,0-7.84287,6.20104-4.1389,9.59739l1.64854,1.59366-71.5889,64.7381-19.9579-17.7782c-4.52706-3.9957-11.327-3.9957-15.8541,0l-45.4934,40.762c-1.23465,0.99893-1.859,2.58065-1.859,4.17894v3.61231c0,4.99463,5.97685,7.3755,9.68081,4.17893l45.4928-40.9394,19.9579,17.7782c4.52707,3.99569,11.327,3.99569,15.8541,0l73.8688-66.7213,3.29709,3.18732c3.70396,3.59614,9.85619,0.992762,9.85619-4.00186v-14.5904c0-3.19657-2.66573-5.59553-5.75237-5.59553h-15.0123zm-13.7846,66.1193c-6.37906,0-11.7503,5.01041-11.7503,11.4035v98.7009h-9.26v-57.3364c0-6.19333-5.13037-11.4035-11.7152-11.4035h-22.6589c-6.37904,0-11.7152,5.01041-11.7152,11.4035v57.3364h-9.25991v-24.7903c0-6.19335-5.13037-11.3681-11.7152-11.3681h-22.6587c-6.37905,0-11.7152,4.97499-11.7152,11.3681v24.7903h-16.0645c-3.29241,0-5.75237,2.598-5.75237,5.595v2.58526c0,3.197,2.66573,5.596,5.75237,5.596h188.495c3.29237,0,5.75237-2.599,5.75237-5.596v-2.58526c0-3.19657-2.66573-5.59553-5.75237-5.59553h-15.644v-98.7002c0-6.19334-5.13037-11.4035-11.7152-11.4035h-22.6236zm2.66573,13.9888,17.0817,0,0,96.1156-17.0817,0,0-96.1156zm-54.9632,41.5769,17.0817,0,0,54.5387-17.0817,0,0-54.5387zm-55.1385,32.369,17.0817,0,0,22.1696-17.0817,0,0-22.1696z" }));
var Icon$k = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$a(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$a({}, svg$a.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$a.props.children));
};
Icon$k.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$k.displayName = 'GrafOppIkon';
var Icon$l = Icon$k;

var __assign$9 = (undefined && undefined.__assign) || function () {
    __assign$9 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$9.apply(this, arguments);
};
var __rest$9 = (undefined && undefined.__rest) || function (s, e) {
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
var svg$9 = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "M176.56-8.325E-7c-4.403,0-8.307,2.46595-10.288,5.89248l-90.5448,156.336-42.6109-59.77c-2.46172-2.94562-5.88534-4.89058-9.78806-4.89058h-7.3426c-4.40307,0-8.30704,2.46094-10.2884,6.36839-1.94136,3.94753-1.46102,8.8406,1.0007,12.2671l54.8007,75.963c3.4224,4.89,9.3077,7.834,15.1918,7.834,6.84477,0,12.7076-3.42654,16.13-9.31777l100.827-173.487c2.46172-3.4666,2.46547-7.83618,0.0438-11.3028-1.942-3.94755-5.886-5.8925-10.289-5.8925h-6.84226z" }));
var Icon$i = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$9(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$9({}, svg$9.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$9.props.children));
};
Icon$i.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$i.displayName = 'HakeIkon';
var Icon$j = Icon$i;

var __assign$8 = (undefined && undefined.__assign) || function () {
    __assign$8 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$8.apply(this, arguments);
};
var __rest$8 = (undefined && undefined.__rest) || function (s, e) {
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
var svg$8 = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "m5.7629 19.978c-2.8921 0-5.2374 2.3453-5.2374 5.2374v2.4564c0 2.8921 2.3453 5.2374 5.2374 5.2374h21.072l37.477 108.91c-5.6069 3.7416-9.3097 10.121-9.3097 17.353 0 11.498 9.3504 20.849 20.849 20.849 11.498 0 20.849-9.3504 20.849-20.849 0-2.7443-0.54362-5.3615-1.5113-7.7623h41.888c-0.91232 2.3417-1.432 4.8757-1.432 7.5351 0 11.498 9.354 20.852 20.852 20.852s20.849-9.3541 20.849-20.852-9.3504-20.852-20.849-20.852c-1.3537 0-2.677 0.14207-3.9605 0.38955h-74.211c-0.50233-0.0591-1.016-0.0896-1.5294-0.11181l-5.5296-16.069h99.345c4.5856 0 8.6357-2.9832 9.9987-7.3619l18.385-59.126c2.0961-6.7408-2.9385-13.58-9.9951-13.58h-145.28l-5.2266-15.189c-1.454-4.228-5.433-7.067-9.902-7.067h-22.825zm42.401 35.179h137.5l-16.856 54.217h-101.98l-18.657-54.213zm108.34 94.943c4.8792 0 8.8444 3.9688 8.8444 8.848s-3.9652 8.8444-8.8444 8.8444-8.848-3.9652-8.848-8.8444 3.9688-8.848 8.848-8.848zm-80.646 0.22723c4.8792 0 8.8444 3.9652 8.8444 8.8444 0 4.8774-3.9652 8.848-8.8444 8.848s-8.8444-3.9688-8.8444-8.848 3.9652-8.8444 8.8444-8.8444z" }));
var Icon$g = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$8(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$8({}, svg$8.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$8.props.children));
};
Icon$g.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$g.displayName = 'HandlevognIkon';
var Icon$h = Icon$g;

var __assign$7 = (undefined && undefined.__assign) || function () {
    __assign$7 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$7.apply(this, arguments);
};
var __rest$7 = (undefined && undefined.__rest) || function (s, e) {
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
var svg$7 = react.createElement("svg", { viewBox: "0 0 200.00001 200.00001" },
    react.createElement("g", { transform: "matrix(1.9446 0 0 1.9446 -75.29 -69.572)" },
        react.createElement("path", { d: "m140.3 80.4-13.5-10.8v-22.9c0-3.1-2.5-5.7-5.7-5.7h-13.7c-3.1 0-5.7 2.5-5.7 5.7v2.4l-7.3-6c-2.1-1.7-5-1.7-7.1-0.1l-47.3 37.4c-1.2 1-1.4 2.8-0.5 4l0.8 1c1 1.2 2.8 1.4 4 0.5l9-7.1 7-5.5 30.5-24.1 18 14.7v-15.9h11v24.9l16.1 12.9c1.2 1 3 0.8 4-0.4l0.8-1c1-1.2 0.8-3-0.4-4z" }),
        react.createElement("path", { d: "m119.9 126.4h-59.5v-41.5l-7 5.5v37.3c0 3.1 2.5 5.7 5.7 5.7h62.2c3.1 0 5.7-2.5 5.7-5.7v-37.6l-7-5.7v42z" })));
var Icon$e = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$7(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$7({}, svg$7.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$7.props.children));
};
Icon$e.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$e.displayName = 'HusIkon';
var Icon$f = Icon$e;

var __assign$6 = (undefined && undefined.__assign) || function () {
    __assign$6 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$6.apply(this, arguments);
};
var __rest$6 = (undefined && undefined.__rest) || function (s, e) {
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
var svg$6 = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "m96.19,199.99h7.846c7.1536,0,11.308-4.398,11.308-11.805v-102.99c0-7.407-4.1537-11.805-11.308-11.805h-7.846c-7.3844,0-11.769,4.3979-11.769,11.805v103c0.227,7.4054,4.38,11.805,11.765,11.805z" }),
    react.createElement("path", { d: "M116.5,11.805c0-7.4072-4.15-11.805-11.31-11.805h-10.382c-7.1577,0-11.308,4.3978-11.308,11.805v15.045c0,7.407,3.923,11.342,11.308,11.342h10.385c7.3844,0,11.308-3.935,11.308-11.342v-15.045z" }));
var Icon$c = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$6(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$6({}, svg$6.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$6.props.children));
};
Icon$c.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$c.displayName = 'InfoIkon';
var Icon$d = Icon$c;

var __assign$5 = (undefined && undefined.__assign) || function () {
    __assign$5 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$5.apply(this, arguments);
};
var __rest$5 = (undefined && undefined.__rest) || function (s, e) {
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
var svg$5 = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "M99.98,0.000005c-55.12,0-99.98,44.89-99.98,100,0,55.1,44.86,100,99.98,100s100-44.9,100-100c0-55.11-44.9-100-100-100zm0,14.37c47.22,0,85.64,38.43,85.64,85.64,0,47.22-38.43,85.61-85.64,85.61-47.22,0-85.61-38.39-85.61-85.61s38.39-85.64,85.61-85.64zm-34.14,45.7c-1.489,0-2.972,0.5707-4.141,1.74l-1.914,1.879c-2.339,2.227-2.339,5.909,0,8.248l30.07,30.07-30.07,30.07c-2.339,2.227-2.339,5.909,0,8.248l1.914,1.879c2.227,2.339,5.874,2.339,8.213,0l30.07-30.07,30.07,30.07c2.227,2.339,5.909,2.339,8.248,0l1.914-1.879c2.339-2.227,2.339-5.909,0-8.248l-30.07-30.07,30.07-30.07c2.339-2.227,2.339-5.909,0-8.248l-1.914-1.879c-2.227-2.339-5.909-2.339-8.248,0l-30.02,30.07-30.07-30.06c-1.114-1.169-2.582-1.74-4.072-1.74z" }));
var Icon$a = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$5(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$5({}, svg$5.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$5.props.children));
};
Icon$a.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$a.displayName = 'KryssSirkelIkon';
var Icon$b = Icon$a;

var __assign$4 = (undefined && undefined.__assign) || function () {
    __assign$4 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$4.apply(this, arguments);
};
var __rest$4 = (undefined && undefined.__rest) || function (s, e) {
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
var svg$4 = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "m100-0.0003388c-35.47,0-65.5,28.32-65.5,61.88,0,21.22,7.235,31.9,14.91,43.13,3.558,5.222,7.221,10.57,10.67,17.57,4.448,9.222,5.775,19.97,6.22,25.42v0.1389c0.4419,5.52,4.948,9.806,10.46,9.861h0.1042,46.28c5.56,0,10.23-4.306,10.56-9.861v-0.1389c0.3336-5.444,1.661-16.31,6.22-25.42,3.447-7,7.109-12.35,10.67-17.57,7.7-11.22,14.9-21.9,14.9-43.13,0-33.55-29.9-61.87-65.5-61.87zm0,13.13c28.02,0,52.47,22.75,52.47,48.75,0,17.22-5.31,25.02-12.65,35.8-3.558,5.222-7.679,11.32-11.57,19.1-5.004,10-6.804,21.24-7.471,28.13h-15.12l-0.0348-55.69,14.94-15.42c2.113-2.111,2.008-5.465-0.1042-7.465l-0.4517-0.4167c-2.113-2.111-5.435-2.007-7.436,0.1042l-12.4,12.92-12.54-12.91c-2-2.11-5.36-2.11-7.47-0.11l-0.4517,0.4167c-2.113,2-2.106,5.354-0.1042,7.465l14.87,15.35,0.03475,55.76h-15.22c-0.67-6.9-2.58-18.1-7.47-28.1-3.89-7.8-7.9-13.8-11.57-19.13-7.34-10.77-12.65-18.57-12.65-35.8,0-26,24.56-48.75,52.47-48.75zm-30.47,153.2c-3.002,0-5.316,2.458-5.316,5.347v2.431c0,3,2.425,5.347,5.316,5.347h62.16c3.002,0,5.351-2.458,5.351-5.347v-2.431c0-3-2.46-5.347-5.351-5.347h-62.16zm8.131,20.56c-3.002,0-5.351,2.458-5.351,5.347v2.431c0,3,2.46,5.347,5.351,5.347h45.9c3.002,0,5.351-2.458,5.351-5.347v-2.431c0-3-2.46-5.347-5.351-5.347h-45.9z" }));
var Icon$8 = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$4(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$4({}, svg$4.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$4.props.children));
};
Icon$8.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$8.displayName = 'LyspareIkon';
var Icon$9 = Icon$8;

var __assign$3 = (undefined && undefined.__assign) || function () {
    __assign$3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};
var __rest$3 = (undefined && undefined.__rest) || function (s, e) {
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
var svg$3 = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { strokeWidth: ".1", strokeMiterlimit: "10", d: "M95.56.3c-9.92 0-14.9 6.25-14.9 16.23v64.9H16.13c-11.17 0-16.13 5-16.13 15v7.5c0 10 4.96 14.96 16.13 14.96h64.53v64.9c0 10 6.2 16.2 16.12 16.2h7.47c9.93 0 14.88-5 14.88-16.2v-64.9h64.53c9.92 0 16.12-5 16.12-15v-7.5c-1.24-10-7.45-14.98-17.37-14.98h-64.5v-64.9c0-10-4.9-16.23-14.83-16.23H95.6z" }));
var Icon$6 = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$3(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$3({}, svg$3.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$3.props.children));
};
Icon$6.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$6.displayName = 'PlussIkon';
var Icon$7 = Icon$6;

var __assign$2 = (undefined && undefined.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};
var __rest$2 = (undefined && undefined.__rest) || function (s, e) {
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
var svg$2 = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "m54.8 2.1c-29.3 0-52.6 22.8-52.6 51.3l0 46.7c0 28.5 23.3 51.3 52.2 51.3l0 37c0 5.3 6.3 10.4 12.9 10.4 2.9 0 6.2-1.1 8.7-3.2l53.8-44.2 16.4 0c29.3 0 52.6-22.8 52.6-51.3l0-47C198.5 25.3 175.1 2.1 146.2 2.1l-91.4 0zm-0.5 17.4 91.9 0c19 0 34.7 15.3 34.7 33.8l0 46.7c0 18.5-15.7 33.8-34.7 33.8l-22.7 0-5.1 4.2-46.5 37.8 0-42-17.9 0c-19 0-34.4-15.3-34.4-33.8l0-46.7c0-18.5 15.7-33.8 34.7-33.8z" }));
var Icon$4 = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$2(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$2({}, svg$2.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$2.props.children));
};
Icon$4.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$4.displayName = 'SnakkebobleIkon';
var Icon$5 = Icon$4;

var __assign$1 = (undefined && undefined.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var __rest$1 = (undefined && undefined.__rest) || function (s, e) {
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
var svg$1 = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "m81.418,0c-12.091,0-21.913,9.8154-21.913,21.899s9.8217,21.899,21.913,21.899,21.913-9.8154,21.913-21.899-9.821-21.899-21.912-21.899zm0,11.388c5.7829,0,10.518,4.7324,10.518,10.512,0,5.7792-4.7354,10.512-10.518,10.512-5.7829,0-10.518-4.7324-10.518-10.512,0-5.7792,4.7354-10.512,10.518-10.512zm67.948,35.529c-1.5662-0.04378-3.1648,0.29813-4.6982,1.0862l-19.108,9.4604c-5.6076-1.7513-19.255-5.6062-36.078-5.6062-8.9371,0-17.534,1.052-25.595,3.3287-36.099,9.807-55.887,33.614-55.887,66.884,0,21.716,11.894,41.315,33.098,54.275v6.8325c0,9.2817,7.5416,16.818,16.829,16.818h9.6418c7.1848,0,13.324-4.5574,15.777-10.862,4.5562,0.35025,8.9412,0.35039,10.694,0.35039,1.4019,0,3.5069-0.00007,5.6098-0.1752,2.45,6.32,8.56,10.7,15.57,10.7h9.4665c9.4629,0,17.005-7.7119,17.18-16.818v-5.431c15.07-8.9314,23.317-20.465,26.646-26.244h6.1357c9.6381,0,17.355-7.7122,17.355-17.344v-21.198c0-9.6319-7.7171-17.344-17.355-17.344h-3.1555l-0.52592-0.87596c-1.0514-1.5761-5.9611-9.2861-7.8887-11.738l-1.4024-1.9271-2.6296-25.193c-0.65715-5.2538-4.9783-8.8385-9.6768-8.9699zm-2.7698,13.35,2.8049,25.368,3.6814,4.555c1.2267,1.5761,5.6103,8.235,7.0122,10.687l4.2073,6.8325h9.9924c2.8038,0,5.0838,2.2786,5.0838,5.0806v21.198c0,2.802-2.28,5.0806-5.0838,5.0806h-13.849l-1.5777,3.679c-0.17524,0.17513-7.1948,15.561-26.471,25.893l-3.1555,1.7519v12.614c0,2.4518-1.9294,4.555-4.5579,4.555h-9.6418c-2.4533,0-4.5579-1.9281-4.5579-4.555v-7.5333l-7.3277,1.0512c-1.9276,0.35025-5.6113,0.52557-9.6418,0.52557-5.7829,0-11.571-0.52578-14.375-1.0512l-7.3628-1.5767v8.4092c0,2.4518-1.9294,4.555-4.5579,4.555h-9.6418c-2.4533,0-4.5579-1.9281-4.5579-4.555v-14.015l-3.1555-1.7519c-19.084-10.67-29.96-27.29-29.96-45.33,0-19.264,8.0788-44.503,46.806-55.186,6.8343-1.7513,14.378-2.768,22.264-2.768,19.101,0,34.149,5.7463,34.325,5.7463l2.4543,1.0512,20.861-10.301zm-59.222,18.184c-6.4838,0-12.799,0.70137-18.407,2.2775-6.4838,1.7513-12.098,4.0306-17.005,7.0077-2.6286,1.5761-3.1548,4.9063-1.4024,7.3581l1.4024,1.9271c1.5771,2.1015,4.2081,2.6274,6.311,1.4016,3.8552-2.4518,8.5919-4.3804,13.849-5.7814,4.5562-1.2259,9.6438-1.9271,15.076-1.9271,5.2571,0,10.169,0.52584,14.024,1.2264,2.6286,0.52538,5.2594-1.0522,5.7851-3.6791l0.52592-2.2775c0.70095-2.6269-1.0529-5.4312-3.8567-5.9566-4.5562-0.87563-10.17-1.5767-16.303-1.5767z" }));
var Icon$2 = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest$1(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign$1({}, svg$1.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg$1.props.children));
};
Icon$2.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon$2.displayName = 'SparegrisIkon';
var Icon$3 = Icon$2;

var __assign = (undefined && undefined.__assign) || function () {
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
var __rest = (undefined && undefined.__rest) || function (s, e) {
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
var svg = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "M 99.881897,0.6403911 A 16.561559,16.561559 0 0 0 83.588292,17.412148 l 0,93.862982 a 16.561559,16.561559 0 1 0 33.102158,0 l 0,-93.862982 A 16.561559,16.561559 0 0 0 99.881897,0.6403911 z M 100.13937,162.6938 c -9.145783,0 -16.551078,7.4053 -16.551078,16.55107 0,9.1458 7.405295,16.58787 16.551078,16.58787 9.14579,0 16.55108,-7.44207 16.55108,-16.58787 0,-9.14577 -7.40529,-16.55107 -16.55108,-16.55107 z" }));
var Icon = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign({}, svg.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg.props.children));
};
Icon.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: propTypes.oneOfType([
        propTypes.bool,
        propTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon.displayName = 'UtropstegnIkon';
var Icon$1 = Icon;

export { Icon$r as BilIkon, Icon$p as BindersIkon, Icon$n as DokumentMedTekstIkon, Icon$l as GrafOppIkon, Icon$j as HakeIkon, Icon$h as HandlevognIkon, Icon$f as HusIkon, Icon$d as InfoIkon, Icon$b as KryssSirkelIkon, Icon$9 as LyspareIkon, Icon$7 as PlussIkon, Icon$5 as SnakkebobleIkon, Icon$3 as SparegrisIkon, Icon$1 as UtropstegnIkon };
