function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint jsx-a11y/no-static-element-interactions:0 */
import React from '../../../../../../pkg/react.js';
import { bool, number } from '../../../../../../pkg/prop-types.js';
import { Scrollbars } from '../../../../../../pkg/react-custom-scrollbars.js';
import SuggestionList from './SuggestionList.js';

var SuggestionListContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(SuggestionListContainer, _React$Component);

  var _super = _createSuper(SuggestionListContainer);

  function SuggestionListContainer(props) {
    var _this;

    _classCallCheck(this, SuggestionListContainer);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "listRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (_ref) {
      var target = _ref.target;
      var scrollTop = target.scrollTop;

      _this.listRef.current.scrollTo(scrollTop);
    });

    _this.refHighlightedSuggestion = _this.refHighlightedSuggestion.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SuggestionListContainer, [{
    key: "refHighlightedSuggestion",
    value: function refHighlightedSuggestion(suggestionEl) {
      this.highlightedSuggestionHeight = suggestionEl.clientHeight;
    }
  }, {
    key: "_setScrollPos",
    value: function _setScrollPos(pos) {
      this.scrollbars.scrollTop(pos);
    }
  }, {
    key: "setScrollPosStart",
    value: function setScrollPosStart() {
      this._setScrollPos(0);
    }
  }, {
    key: "setScrollPosEnd",
    value: function setScrollPosEnd() {
      this._setScrollPos(this.scrollbars.getScrollHeight());
    }
  }, {
    key: "setScrollPosNext",
    value: function setScrollPosNext() {
      var highlightedIndex = this.props.highlightedIndex;

      this._setScrollPos(highlightedIndex * this.highlightedSuggestionHeight);
    }
  }, {
    key: "setScrollPosPrevious",
    value: function setScrollPosPrevious() {
      var highlightedIndex = this.props.highlightedIndex;

      this._setScrollPos(highlightedIndex * this.highlightedSuggestionHeight - this.highlightedSuggestionHeight);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          heightMax = _this$props.heightMax,
          autoHeight = _this$props.autoHeight;
      return /*#__PURE__*/React.createElement("div", {
        className: "ffe-base-selector__suggestion-container",
        onKeyDown: this.onKeyDown
      }, /*#__PURE__*/React.createElement(Scrollbars, {
        autoHeight: autoHeight,
        autoHeightMax: heightMax,
        ref: function ref(scrollbars) {
          if (scrollbars) {
            _this2.scrollbars = scrollbars;
          }
        },
        onScroll: this.handleScroll
      }, /*#__PURE__*/React.createElement(SuggestionList, _extends({
        height: heightMax,
        refList: this.listRef,
        refHighlightedSuggestion: this.refHighlightedSuggestion
      }, this.props))));
    }
  }]);

  return SuggestionListContainer;
}(React.Component);

SuggestionListContainer.propTypes = {
  highlightedIndex: number.isRequired,
  heightMax: number,
  autoHeight: bool
};
SuggestionListContainer.defaultProps = {
  heightMax: 300,
  autoHeight: true
};
export default SuggestionListContainer;