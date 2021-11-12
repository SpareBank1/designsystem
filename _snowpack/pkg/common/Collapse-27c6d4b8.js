import { r as react } from './index-09a9c4ff.js';
import { p as propTypes } from './index-8de1816d.js';
import { c as classnames } from './index-5100710e.js';

var _excluded = ["className", "style", "isOpen", "onRest"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Collapse = function Collapse(_ref) {
  var className = _ref.className,
      style = _ref.style,
      isOpen = _ref.isOpen,
      onRest = _ref.onRest,
      rest = _objectWithoutProperties(_ref, _excluded);

  var content = react.useRef();

  var _useState = react.useState(function () {
    return isOpen ? 'auto' : '0';
  }),
      _useState2 = _slicedToArray(_useState, 2),
      height = _useState2[0],
      setHeight = _useState2[1];

  var _useState3 = react.useState(function () {
    return isOpen ? 'visible' : 'hidden';
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      overflow = _useState4[0],
      setOverflow = _useState4[1];

  var _useState5 = react.useState(function () {
    return isOpen ? 'visible' : 'hidden';
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      visibility = _useState6[0],
      setVisibility = _useState6[1];

  var setExpanded = function setExpanded() {
    setHeight('auto');
    setOverflow('visible');
  };

  var setCollapsed = function setCollapsed() {
    setVisibility('hidden');
  };

  react.useEffect(function () {
    if (content.current) {
      if (isOpen && height !== 'auto') {
        setHeight("".concat(content.current.scrollHeight, "px"));
        setVisibility('visible');
      } else if (!isOpen && height !== '0') {
        setHeight("".concat(content.current.scrollHeight, "px"));
        window.requestAnimationFrame(function () {
          return setTimeout(function () {
            setHeight('0');
            setOverflow('hidden');
          });
        });
      }
    }
  }, [isOpen, height]);

  var onTransitionEnd = function onTransitionEnd(e) {
    if (e.target === content.current && e.propertyName === 'height') {
      if (isOpen) {
        setExpanded();
      } else {
        setCollapsed();
      }

      if (onRest) {
        onRest();
      }
    }
  };

  var mergedStyles = _objectSpread(_objectSpread({}, style), {}, {
    willChange: 'height',
    height: height,
    overflow: overflow,
    visibility: visibility
  });

  return /*#__PURE__*/react.createElement("div", _extends({}, rest, {
    ref: content,
    style: mergedStyles,
    className: classnames('ffe-collapse-transition', className),
    onTransitionEnd: onTransitionEnd
  }));
};

Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  isOpen: propTypes.bool,
  onRest: propTypes.func
};
var __pika_web_default_export_for_treeshaking__ = Collapse;

export { __pika_web_default_export_for_treeshaking__ as _ };
