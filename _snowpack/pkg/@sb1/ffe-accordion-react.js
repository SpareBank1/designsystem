import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { c as classnames } from '../common/index-5100710e.js';
import { v as v4 } from '../common/v4-a40bed11.js';
import { C as ChevronIkon } from '../common/chevron-ikon-5cfb248f.js';
import { _ as __pika_web_default_export_for_treeshaking__ } from '../common/Collapse-27c6d4b8.js';
import '../common/_commonjsHelpers-4f955397.js';

var _excluded$1 = ["children", "headingLevel", "className"];

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ARROW_UP = 'ArrowUp';
var ARROW_DOWN = 'ArrowDown';
var HOME = 'Home';
var END = 'End';

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      headingLevel = _ref.headingLevel,
      className = _ref.className,
      rest = _objectWithoutProperties$1(_ref, _excluded$1);

  var _useState = react.useState(false),
      _useState2 = _slicedToArray$1(_useState, 2),
      isHeadingFocused = _useState2[0],
      setIsHeadingFocuses = _useState2[1];

  var _useState3 = react.useState([]),
      _useState4 = _slicedToArray$1(_useState3, 2),
      refs = _useState4[0],
      setRefs = _useState4[1];

  var handleFocus = function handleFocus() {
    return setIsHeadingFocuses(true);
  };

  var handleBlur = function handleBlur() {
    return setIsHeadingFocuses(false);
  };

  react.useEffect(function () {
    setRefs(function (prevRefs) {
      return Array(children.length).fill(null).map(function (_, i) {
        return prevRefs[i] || /*#__PURE__*/react.createRef();
      });
    });
  }, [children.length]);

  var handleKeyDown = function handleKeyDown(event) {
    if (isHeadingFocused) {
      if ([HOME, END, ARROW_UP, ARROW_DOWN].some(function (key) {
        return key === event.key;
      })) {
        event.preventDefault();
      }

      var focusIndex = refs.findIndex(function (ref) {
        return ref.current === document.activeElement;
      });

      if (event.key === HOME) {
        refs[0].current.focus();
      } else if (event.key === END) {
        refs[refs.length - 1].current.focus();
      } else if (event.key === ARROW_UP) {
        if (focusIndex === 0) {
          refs[refs.length - 1].current.focus();
        } else {
          refs[focusIndex - 1].current.focus();
        }
      } else if (event.key === ARROW_DOWN) {
        if (focusIndex === refs.length - 1) {
          refs[0].current.focus();
        } else {
          refs[focusIndex + 1].current.focus();
        }
      }
    }
  };

  return /*#__PURE__*/react.createElement("div", _extends$1({
    // eslint-disable-line jsx-a11y/no-static-element-interactions
    onKeyDown: handleKeyDown,
    className: classnames(className, 'ffe-accordion', {
      'ffe-accordion--focus': isHeadingFocused
    })
  }, rest), react.Children.map(children, function (child, index) {
    return /*#__PURE__*/react.cloneElement(child, {
      headingLevel: headingLevel,
      ref: refs[index],
      onFocus: handleFocus,
      onBlur: handleBlur
    });
  }));
};

Accordion.propTypes = {
  /** Accordion items */
  children: propTypes.node,

  /** The level of headings in the AccordionItems */
  headingLevel: propTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,

  /** Class assigned the container */
  className: propTypes.string
};
var Accordion$1 = Accordion;

var _excluded = ["children", "heading", "defaultOpen", "isOpen", "className", "onToggleOpen", "ariaLabel"],
    _excluded2 = ["headingLevel", "onFocus", "onBlur", "forwardedRef"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AccordionItem = function AccordionItem(_ref) {
  var children = _ref.children,
      heading = _ref.heading,
      defaultOpen = _ref.defaultOpen,
      isOpen = _ref.isOpen,
      className = _ref.className,
      _ref$onToggleOpen = _ref.onToggleOpen,
      onToggleOpen = _ref$onToggleOpen === void 0 ? Function.prototype : _ref$onToggleOpen,
      ariaLabel = _ref.ariaLabel,
      accordionProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = react.useState(defaultOpen),
      _useState2 = _slicedToArray(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];

  var _useState3 = react.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isAnimating = _useState4[0],
      setIsAnimating = _useState4[1];

  var buttonId = react.useRef(v4());
  var contentId = react.useRef(v4());
  react.useEffect(function () {
    if (isOpen != null) {
      setIsAnimating(true);
      setIsExpanded(isOpen);
    }
  }, [isOpen]);

  var handleOnClick = function handleOnClick() {
    onToggleOpen(!isExpanded);

    if (isOpen == null) {
      setIsAnimating(true);
      setIsExpanded(!isExpanded);
    }
  };

  var headingLevel = accordionProps.headingLevel,
      onFocus = accordionProps.onFocus,
      onBlur = accordionProps.onBlur,
      forwardedRef = accordionProps.forwardedRef,
      rest = _objectWithoutProperties(accordionProps, _excluded2);

  var collapseHidden = !isExpanded && !isAnimating;
  return /*#__PURE__*/react.createElement("div", _extends({
    className: classnames(className, 'ffe-accordion-item', {
      'ffe-accordion-item--open': isExpanded
    })
  }, rest), /*#__PURE__*/react.createElement("h".concat(headingLevel), {
    className: 'ffe-h6'
  }, /*#__PURE__*/react.createElement("button", {
    type: "button",
    id: buttonId.current,
    ref: forwardedRef,
    "aria-expanded": isExpanded ? 'true' : 'false',
    "aria-controls": contentId.current,
    "aria-label": ariaLabel,
    className: classnames('ffe-accordion__heading-button', {
      'ffe-accordion__heading-button--open': isExpanded
    }),
    onClick: handleOnClick,
    onFocus: onFocus,
    onBlur: onBlur
  }, /*#__PURE__*/react.createElement("span", {
    className: "ffe-accordion__heading-button-content"
  }, heading, /*#__PURE__*/react.createElement(ChevronIkon, {
    className: "ffe-accordion__heading-icon"
  })))), /*#__PURE__*/react.createElement(__pika_web_default_export_for_treeshaking__, {
    isOpen: isExpanded,
    onRest: function onRest() {
      return setIsAnimating(false);
    },
    id: contentId.current,
    "aria-labelledby": buttonId.current,
    hidden: collapseHidden,
    role: "region"
  }, !collapseHidden && /*#__PURE__*/react.createElement("div", {
    className: "ffe-accordion-body"
  }, children)));
};

AccordionItem.propTypes = {
  /** The heading */
  heading: propTypes.node.isRequired,

  /** The content to appear when expanded */
  children: propTypes.node.isRequired,

  /** Should it be open by default */
  defaultOpen: propTypes.bool,

  /** Is the item open or collapsed? Used for overriding default behaviour */
  isOpen: propTypes.bool,

  /** Class assigned the container */
  className: propTypes.string,

  /** Callback when the item is open/closed */
  onToggleOpen: propTypes.func,

  /** aria-label for the button */
  ariaLabel: propTypes.string
};
var AccordionItem$1 = /*#__PURE__*/react.forwardRef(function (props, ref) {
  return /*#__PURE__*/react.createElement(AccordionItem, _extends({}, props, {
    forwardedRef: ref
  }));
});

export { Accordion$1 as Accordion, AccordionItem$1 as AccordionItem };
