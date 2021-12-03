function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["aria-controls", "aria-label", "children", "className", "onClick", "tabIndex"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from '../../../../pkg/react.js';
import { bool, func, node, string, number } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import Collapse from '../../ffe-collapse-react/es/index.js';
import { v4 as uuid } from '../../../../pkg/uuid.js';

var Tooltip = /*#__PURE__*/function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  var _super = _createSuper(Tooltip);

  function Tooltip(_ref) {
    var _this;

    var isOpen = _ref.isOpen;

    _classCallCheck(this, Tooltip);

    _this = _super.call(this);
    _this.state = {
      isOpen: !!isOpen
    };
    _this.onToggle = _this.onToggle.bind(_assertThisInitialized(_this));
    _this.tooltipId = uuid();
    _this.tooltipButtonId = uuid();
    return _this;
  }

  _createClass(Tooltip, [{
    key: "onToggle",
    value: function onToggle(evt) {
      this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });

      if (this.props.onClick) {
        this.props.onClick(evt);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ariaControls = _this$props['aria-controls'],
          ariaLabel = _this$props['aria-label'],
          children = _this$props.children,
          className = _this$props.className,
          onClick = _this$props.onClick,
          tabIndex = _this$props.tabIndex,
          rest = _objectWithoutProperties(_this$props, _excluded);

      var isOpen = this.state.isOpen;
      return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
        className: classNames('ffe-tooltip', {
          'ffe-tooltip--open': isOpen
        })
      }), /*#__PURE__*/React.createElement("button", {
        "aria-expanded": isOpen,
        "aria-controls": children ? this.tooltipId : ariaControls,
        "aria-label": ariaLabel,
        className: "ffe-tooltip__icon",
        onClick: this.onToggle,
        type: "button",
        tabIndex: tabIndex,
        id: this.tooltipButtonId
      }, /*#__PURE__*/React.createElement("span", {
        "aria-hidden": true
      }, "?")), children && /*#__PURE__*/React.createElement(Collapse, {
        className: "ffe-tooltip__text",
        id: this.tooltipId,
        isOpen: isOpen
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames('ffe-small-text', className),
        role: isOpen ? 'status' : 'none'
      }, children)));
    }
  }]);

  return Tooltip;
}(React.Component);

Tooltip.propTypes = {
  /** Provide the id of the controlled element *unless* you're sending in children */
  'aria-controls': string,

  /** Descriptive text for the Tooltip expand icon */
  'aria-label': string,

  /** The children are rendered in the expanded tooltip. */
  children: node,

  /** The className is set on the root node of the expanded tooltip. */
  className: string,
  isOpen: bool,

  /** Optional listener for clicks on the tooltip button. Is passed the event object. */
  onClick: func,

  /** Sets the tabIndex of the tooltip button. */
  tabIndex: number
};
Tooltip.defaultProps = {
  'aria-label': 'Vis hjelpetekst'
};
export default Tooltip;