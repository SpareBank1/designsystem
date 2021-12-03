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
    React.createElement("path", { d: "m33.924 32.831c-4.8742 0-8.8326 3.8792-8.8326 8.6666v114.96h-20.15c-2.4479 0-4.4285 1.9394-4.4285 4.3309v2.0409c0 2.3872 1.9806 4.3406 4.4285 4.3406h190.12c2.4392 0 4.4285-1.9187 4.4285-4.3406v-2.0409c0-2.3872-1.9892-4.2967-4.4285-4.2967h-20.15v-0.0343-63.703c0-4.783-3.9595-8.6665-8.8423-8.6665h-53.039c-4.8785 0-8.8374 3.8629-8.8374 8.6373v63.713h-8.3834v-114.94c0-4.783-3.9638-8.6666-8.8423-8.6666h-53.039zm2.0751 10.703h48.889v112.92h-48.884-0.005v-112.92zm32.572 10.4c-2.4436 0-4.4285 1.9448-4.4285 4.3406v7.1334c0 2.3958 1.9849 4.3406 4.4285 4.3406h3.6326c2.4436 0 4.4285-1.9448 4.4285-4.3406v-7.1334c0-2.3958-1.9849-4.3406-4.4285-4.3406h-3.6326zm-19.882 0.01c-2.4479 0-4.4236 1.9404-4.4236 4.3406v7.1286c0 2.3958 1.9757 4.3406 4.4236 4.3406v-0.01h3.6326c2.4436 0 4.4236-1.9404 4.4236-4.3406v-7.1188c0-2.4002-1.98-4.3406-4.4236-4.3406h-3.6326zm0 25.155c-2.4479 0-4.4236 1.9404-4.4236 4.3406v7.1188c0 2.3958 1.9757 4.3406 4.4236 4.3406h3.6326c2.4436 0 4.4236-1.935 4.4236-4.3308v-7.1286c0-2.4002-1.98-4.3406-4.4236-4.3406h-3.6326zm19.882 0c-2.4436 0-4.4285 1.9404-4.4285 4.3406v7.1188c0 2.3958 1.9849 4.3406 4.4285 4.3406h3.6326c2.4436 0 4.4285-1.935 4.4285-4.3308v-7.1286c0-2.4002-1.9849-4.3406-4.4285-4.3406h-3.6326zm46.541 15.693h48.879v61.667h-48.879v-61.667zm-66.421 9.468c-2.4479 0-4.4236 1.9448-4.4236 4.3406v7.1334c0 2.3872 1.9757 4.3308 4.4236 4.3308h3.6326c2.4436 0 4.4236-1.9404 4.4236-4.3406v-7.1237c0-2.3959-1.98-4.3406-4.4236-4.3406h-3.6326zm19.882 0c-2.4436 0-4.4285 1.9448-4.4285 4.3406v7.1334c0 2.3872 1.9849 4.3308 4.4285 4.3308h3.6326c2.4436 0 4.4285-1.9404 4.4285-4.3406v-7.1237c0-2.3959-1.9849-4.3406-4.4285-4.3406h-3.6326zm59.216 0c-2.4436 0-4.4236 1.9448-4.4236 4.3406v7.1334c0 2.3872 1.98 4.3308 4.4236 4.3308h3.6375c2.4392 0 4.4187-1.9404 4.4187-4.3406v-7.1237c0-2.3959-1.9795-4.3406-4.4187-4.3406h-3.6375zm19.887 0c-2.4436 0-4.4285 1.9448-4.4285 4.3406h0.005v7.1334c0 2.3872 1.9806 4.3308 4.4285 4.3308h3.6278c2.4436 0 4.4236-1.9404 4.4236-4.3406v-7.1237c0-2.3959-1.98-4.3406-4.4236-4.3406h-3.6326z" }));
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
Icon.displayName = 'KontorbyggIkon';
export default Icon;
