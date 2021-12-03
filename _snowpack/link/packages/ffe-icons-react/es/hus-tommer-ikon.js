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
    React.createElement("path", { d: "M143.072.99c.817-.683 1.982-.524 2.602.355.479.679.504 1.618.063 2.337-3.797 5.307-3.584 9.969-2.288 12.705.581 1.226 1.354 2.385 2.146 3.572 1.84 2.758 3.777 5.664 3.624 9.893-.275 7.576-3.693 11.457-9.26 15.598-.606.685-1.604.712-2.228.062-.588-.614-.639-1.62-.116-2.313 1.839-2.435 2.903-5.727 3.193-9.874.143-2.037-1.32-4.094-2.97-6.414-2.05-2.883-4.39-6.174-4.304-10.342.161-7.776 4.656-11.516 8.98-15.114l.558-.465zm-89.97 167.006a3.115 3.115 0 00-3.115 3.115v12.461a3.115 3.115 0 003.116 3.116h96.572a3.115 3.115 0 003.115-3.116v-12.46a3.115 3.115 0 00-3.115-3.116h-25.078a7.79 7.79 0 01-7.632 6.23H85.812a7.79 7.79 0 01-7.632-6.23zm24.922-12.46H49.987v-18.692h28.037zm.156-31.153H54.141v-.462h-1.038a3.115 3.115 0 01-3.116-3.115v-1.558a6.23 6.23 0 10-12.46 0v1.558c0 3.14.93 6.065 2.529 8.511a12.406 12.406 0 00-2.53 7.527v18.691c0 2.733.88 5.26 2.37 7.313a15.504 15.504 0 00-2.37 8.263v12.461c0 8.603 6.974 15.576 15.577 15.576h96.572c8.602 0 15.576-6.973 15.576-15.576v-12.46c0-3.507-1.159-6.743-3.114-9.346a15.506 15.506 0 003.114-9.346v-12.46c0-3.612-1.229-6.936-3.292-9.578a15.507 15.507 0 003.292-9.576v-1.558a6.23 6.23 0 10-12.461 0v1.558a3.115 3.115 0 01-3.115 3.115v.462h-25.078a7.79 7.79 0 00-7.632-6.23H85.812a7.79 7.79 0 00-7.632 6.23zm46.573 12.46v18.692h24.922a3.115 3.115 0 003.115-3.115v-12.46a3.115 3.115 0 00-3.115-3.116zm-34.268 24.923v-31.153h21.807v31.153zm42.576-99.687v29.28L99.82 71.413c-12.562 7.47-58.854 34.972-77.877 45.91a6.23 6.23 0 11-6.211-10.802c19.866-11.423 69.776-41.094 79.33-46.777a9.324 9.324 0 019.573.025l15.966 9.58V58.962a9.346 9.346 0 019.346-9.346h22.845a9.345 9.345 0 019.345 9.346V93.44l21.897 13.138a6.23 6.23 0 01-6.41 10.685l-27.947-16.768V62.077zm-20.77 31.152h-24.92l-21.807 12.46h68.534z", "clip-rule": "evenodd", fillRule: "evenodd" }));
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
Icon.displayName = 'HusTommerIkon';
export default Icon;
