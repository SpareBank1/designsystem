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
    React.createElement("path", { d: "m99.675 0.54385c-20.494 0-36.97 16.673-36.97 36.966v12.259c-0.201 20.294 16.476 36.967 36.97 36.967h0.60042c20.494 0 36.97-16.673 36.97-36.966v-12.259c0-20.494-16.677-36.966-36.97-36.966h-0.60042zm-0.20406 14.065h0.60434c12.658 0 22.906 10.244 22.906 22.902v12.259c0 12.658-10.248 22.902-22.906 22.902h-0.60434c-12.663 0-22.907-10.244-22.907-22.902v-12.259c0-12.658 10.244-22.902 22.902-22.902zm41.825 75.895c-2.1034-0.03918-4.0498 0.98106-5.0544 2.8647l-1.4049 2.4095c-1.4064 2.4111-0.80525 5.6282 1.4049 7.4365 10.046 7.635 16.074 19.489 16.074 32.147v50.03h-105.48v-18.687c7.8359 5.8267 17.48 8.237 25.115 8.237h45.207c6.6304 0 12.456-2.4111 16.274-7.0322 3.4157-4.0184 5.4272-9.2432 5.4272-14.869 0-10.85-7.6366-22.302-21.701-22.302h-32.147l-19.104-32.549-2.614-4.623c-1.8083-3.0138-5.6242-3.8152-8.4371-1.605-13.06 9.6442-21.098 24.914-21.701 41.189-0.20092 2.2101-0.20092 4.4187 0 6.4279v48.421c0 6.2286 5.0254 11.455 11.455 11.455h110.91c6.2286 0 11.455-5.0254 11.455-11.455v-52.64c0-17.279-8.2386-33.355-21.901-43.602-1.2055-0.8288-2.5249-1.2322-3.7869-1.2558zm-83.814 17.329 30.939 52.844h-16.474c-6.6304 0-16.073-2.8121-21.297-10.246-2.2101-3.2147-3.4165-7.0346-3.8183-11.455v-3.8144-1.2087c0.40184-4.6212 1.6089-9.6442 3.6182-15.069h-0.20406c1.8083-4.0184 4.2225-7.8359 7.2363-11.051zm35.562 36.77h23.91c7.4341 0 7.6327 7.4333 7.6327 8.237 0 2.2101-0.59963 4.2209-1.8052 5.6274-1.2055 1.4064-3.2155 2.2094-5.8275 2.2094h-14.469l-9.4418-16.074z" }));
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
Icon.displayName = 'PersonBrukketArmIkon';
export default Icon;
