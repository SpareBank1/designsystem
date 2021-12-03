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
    React.createElement("path", { d: "M127.491,0.0000025c-18.517,0-26.202,32.878-29.22,54.7284-3.6345-4.2317-8.13-9.2696-13.1751-14.3328-17.3731-17.6574-30.7349-26.3057-40.8047-26.3057-6.19678,0-11.0864,3.12337-14.0742,8.67604-2.76642,5.2195-2.87708,10.5292-0.553281,15.8598,5.67046,12.4046,26.4447,22.0834,44.2627,28.3186h-42.1532c-6.30746,0-11.2732,5.2403-11.2732,11.3483v34.6347h7.50392v75.7244c0,6.33004,5.22162,11.3482,11.3077,11.3482h121.377c6.3074,0,11.2732-5.01821,11.2732-11.3482v-75.7237h7.538v-34.6347c0-6.33004-5.18705-11.3483-11.2732-11.3483h-27.4567c12.3134-5.83775,21.6797-14.3662,27.6642-25.0911,1.5492-2.88739,0.44262-6.65626-2.76644-7.87784l-0.55328-0.242929c-2.5451-1.22159-5.51901-0.194343-6.84687,2.35988-9.19682,16.6921-27.2472,23.228-40.6318,25.8199,11.994-14.302,28.403-36.9405,25.14-50.5987-0.886-3.4427-3.237-8.00976-9.544-10.3419-1.992-0.555266-3.749-0.971716-5.741-0.971716zm0.1037,11.9729,0.10366,0c0.33199,0,1.00286,0.229047,1.55611,0.451154,1.77054,0.555266,1.78436,1.21464,2.00565,1.76991,1.32791,6.10793-8.08484,22.0024-20.3678,36.9946,3.65171-20.9891,9.95222-39.2157,16.7023-39.2157zm-83.2001,13.9858c9.07386,0,26.772,16.0125,41.6,32.4484-19.5863-6.10793-41.275-15.4503-45.3693-24.7788-0.7746-1.77685-0.788428-3.42183,0.207482-5.30974s2.23388-2.35988,3.56177-2.35988zm-11.0657,53.8608,46.7871,0,0,20.2325-46.7871,0,0-20.2325zm59.6509,0,14.1433,0,0,107.305-14.1433,0,0-107.305zm26.9726,0,46.4758,0,0,20.2325-46.4758,0,0-20.2325zm-79.1196,33.1078,39.2832,0,0,74.1975-39.2832,0,0-74.1975zm79.1196,0,39.1794,0,0,74.1975-39.1794,0,0-74.1975z" }));
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
Icon.displayName = 'GaveIkon';
export default Icon;
