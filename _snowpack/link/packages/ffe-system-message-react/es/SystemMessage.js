function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded = ["animationLengthMs", "children", "className", "icon", "locale", "modifier"];

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

import React, { Component } from '../../../../pkg/react.js';
import { func, string, number, node, oneOf } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import KryssIkon from '../../ffe-icons-react/lib/kryss-ikon.js';

var SystemMessage = /*#__PURE__*/function (_Component) {
  _inherits(SystemMessage, _Component);

  var _super = _createSuper(SystemMessage);

  function SystemMessage() {
    var _this;

    _classCallCheck(this, SystemMessage);

    _this = _super.call(this);
    _this.close = _this.close.bind(_assertThisInitialized(_this));
    _this.state = {
      closed: false
    };
    return _this;
  }

  _createClass(SystemMessage, [{
    key: "close",
    value: function close(event) {
      var _this2 = this;

      var _this$props = this.props,
          animationLengthMs = _this$props.animationLengthMs,
          onClose = _this$props.onClose;
      var self = this._self;
      self.style.height = "".concat(self.offsetHeight, "px");
      setTimeout(function () {
        self.style.height = 0;
      }, 0);
      setTimeout(function () {
        _this2.setState({
          closed: true
        }, function () {
          onClose(event);
        });
      }, animationLengthMs);
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          animationLengthMs = _this$props2.animationLengthMs,
          children = _this$props2.children,
          className = _this$props2.className,
          icon = _this$props2.icon,
          locale = _this$props2.locale,
          modifier = _this$props2.modifier,
          rest = _objectWithoutProperties(_this$props2, _excluded);

      if (this.state.closed) {
        return null;
      }

      return /*#__PURE__*/React.createElement("div", _extends({
        className: classNames('ffe-system-message-wrapper', "ffe-system-message-wrapper--".concat(modifier), className),
        ref: function ref(_self) {
          _this3._self = _self;
        },
        style: {
          transition: "height ".concat(animationLengthMs / 1000, "s")
        }
      }, rest), /*#__PURE__*/React.createElement("div", {
        className: "ffe-system-message"
      }, /*#__PURE__*/React.createElement("span", {
        className: "ffe-system-message__icon"
      }, icon), /*#__PURE__*/React.createElement("p", {
        className: "ffe-system-message__content"
      }, children), /*#__PURE__*/React.createElement("button", {
        "aria-label": locale === 'en' ? 'Close' : 'Lukk',
        className: "ffe-system-message__close",
        onClick: this.close,
        type: "button"
      }, /*#__PURE__*/React.createElement(KryssIkon, {
        "aria-hidden": "true"
      }))));
    }
  }]);

  return SystemMessage;
}(Component);

SystemMessage.defaultProps = {
  animationLengthMs: 300,
  locale: 'nb',
  onClose: function onClose(f) {
    return f;
  }
};
SystemMessage.propTypes = {
  animationLengthMs: number,

  /** The content of the system message */
  children: node.isRequired,

  /** Additional classes added to the surrounding div */
  className: string,

  /** Override the default icon - use with caution! */
  icon: node.isRequired,

  /** 'nb', 'nn', or 'en' */
  locale: oneOf(['en', 'nb', 'nn']),

  /**
   * The type of system message. Used internally only-
   * @ignore
   **/
  modifier: oneOf(['error', 'info', 'success', 'news']),

  /** Callback for when the system message has been closed (after animation ends) */
  onClose: func
};
export default SystemMessage;