import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { U as UtropstegnIkon, I as InfoIkon, H as HakeIkon } from '../common/info-ikon-9695e109.js';
import { c as classnames } from '../common/index-5100710e.js';
import { K as KryssIkon } from '../common/kryss-ikon-691c0bd1.js';
import '../common/_commonjsHelpers-4f955397.js';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _excluded$1 = ["animationLengthMs", "children", "className", "icon", "locale", "modifier"];

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
          rest = _objectWithoutProperties$1(_this$props2, _excluded$1);

      if (this.state.closed) {
        return null;
      }

      return /*#__PURE__*/react.createElement("div", _extends$4({
        className: classnames('ffe-system-message-wrapper', "ffe-system-message-wrapper--".concat(modifier), className),
        ref: function ref(_self) {
          _this3._self = _self;
        },
        style: {
          transition: "height ".concat(animationLengthMs / 1000, "s")
        }
      }, rest), /*#__PURE__*/react.createElement("div", {
        className: "ffe-system-message"
      }, /*#__PURE__*/react.createElement("span", {
        className: "ffe-system-message__icon"
      }, icon), /*#__PURE__*/react.createElement("p", {
        className: "ffe-system-message__content"
      }, children), /*#__PURE__*/react.createElement("button", {
        "aria-label": locale === 'en' ? 'Close' : 'Lukk',
        className: "ffe-system-message__close",
        onClick: this.close,
        type: "button"
      }, /*#__PURE__*/react.createElement(KryssIkon, {
        "aria-hidden": "true"
      }))));
    }
  }]);

  return SystemMessage;
}(react.Component);

SystemMessage.defaultProps = {
  animationLengthMs: 300,
  locale: 'nb',
  onClose: function onClose(f) {
    return f;
  }
};
SystemMessage.propTypes = {
  animationLengthMs: propTypes.number,

  /** The content of the system message */
  children: propTypes.node.isRequired,

  /** Additional classes added to the surrounding div */
  className: propTypes.string,

  /** Override the default icon - use with caution! */
  icon: propTypes.node.isRequired,

  /** 'nb', 'nn', or 'en' */
  locale: propTypes.oneOf(['en', 'nb', 'nn']),

  /**
   * The type of system message. Used internally only-
   * @ignore
   **/
  modifier: propTypes.oneOf(['error', 'info', 'success', 'news']),

  /** Callback for when the system message has been closed (after animation ends) */
  onClose: propTypes.func
};

var _excluded = ["alert"];

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function SystemErrorMessage(props) {
  var alert = props.alert,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react.createElement(SystemMessage, _extends$3({
    modifier: "error",
    icon: /*#__PURE__*/react.createElement(UtropstegnIkon, {
      "aria-hidden": "true"
    }),
    role: alert ? 'alert' : false
  }, rest));
}
SystemErrorMessage.defaultProps = {
  animationLengthMs: 300,
  locale: 'nb',
  onClose: function onClose(f) {
    return f;
  },
  alert: true
};
SystemErrorMessage.propTypes = {
  animationLengthMs: propTypes.number,

  /** The content of the system message */
  children: propTypes.node.isRequired,

  /** Additional classes added to the surrounding div */
  className: propTypes.string,

  /** Override the default icon - use with caution! */
  icon: propTypes.node,

  /** 'nb', 'nn', or 'en' */
  locale: propTypes.oneOf(['en', 'nb', 'nn']),

  /**
   * The type of system message. Used internally only-
   * @ignore
   **/
  modifier: propTypes.oneOf(['error', 'info', 'success', 'news']),

  /** Callback for when the system message has been closed (after animation ends) */
  onClose: propTypes.func,

  /** When false, role is not set to alert, avoids message from being read up immediately after page load. Default value is true. */
  alert: propTypes.bool
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
function SystemInfoMessage(props) {
  return /*#__PURE__*/react.createElement(SystemMessage, _extends$2({
    modifier: "info",
    icon: /*#__PURE__*/react.createElement(InfoIkon, null)
  }, props));
}

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
function SystemNewsMessage(props) {
  return /*#__PURE__*/react.createElement(SystemMessage, _extends$1({
    modifier: "news",
    icon: /*#__PURE__*/react.createElement(InfoIkon, null)
  }, props));
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function SystemSuccessMessage(props) {
  return /*#__PURE__*/react.createElement(SystemMessage, _extends({
    modifier: "success",
    icon: /*#__PURE__*/react.createElement(HakeIkon, null)
  }, props));
}

export { SystemErrorMessage, SystemInfoMessage, SystemNewsMessage, SystemSuccessMessage };
