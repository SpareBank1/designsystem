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

import React, { Component } from '../../../../../../pkg/react.js';
import { func, bool, number, string, arrayOf, object } from '../../../../../../pkg/prop-types.js';
import autoBind from '../../../../../../pkg/react-auto-bind.js';
import Input from '../../subcomponents/input-field/index.js';
import { SuggestionListContainer } from '../../subcomponents/suggestion/index.js';
import { SuggestionListContainer as SuggestionListContainerHighCapacity } from '../../subcomponents/suggestion-high-capacity/index.js';
import { KeyCodes, Locale } from '../../util/types.js';

var BaseSelector = /*#__PURE__*/function (_Component) {
  _inherits(BaseSelector, _Component);

  var _super = _createSuper(BaseSelector);

  function BaseSelector(props) {
    var _this;

    _classCallCheck(this, BaseSelector);

    _this = _super.call(this, props);
    autoBind(_assertThisInitialized(_this));
    _this.state = {
      showSuggestions: false,
      highlightedSuggestionIndex: -1,
      suggestionListId: 'suggestion-list'
    };
    return _this;
  }

  _createClass(BaseSelector, [{
    key: "_onSuggestionListChange",
    value: function _onSuggestionListChange() {
      var _this2 = this;

      setTimeout(function () {
        _this2.props.onSuggestionListChange(_this2.getSuggestionListHeight());
      });
    }
  }, {
    key: "getSuggestionListHeight",
    value: function getSuggestionListHeight() {
      if (this.suggestionList) {
        return this.suggestionList.scrollbars.getClientHeight();
      }

      return 0;
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      this.input.focus();
    }
  }, {
    key: "getInputHeight",
    value: function getInputHeight() {
      if (this.input) {
        return this.input.getBoundingClientRect().height;
      }

      return 0;
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(val) {
      var _this3 = this;

      if (val !== this.props.value) {
        this.setState({
          showSuggestions: true,
          highlightedSuggestionIndex: -1
        }, function () {
          _this3.props.onChange(val);

          _this3._onSuggestionListChange();
        });
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      var _this$props = this.props,
          shouldShowSuggestionsOnFocus = _this$props.shouldShowSuggestionsOnFocus,
          onFocus = _this$props.onFocus;
      this.showOrHideSuggestions(shouldShowSuggestionsOnFocus, onFocus);
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.showOrHideSuggestions(false, this.props.onBlur);
    }
  }, {
    key: "onClick",
    value: function onClick() {
      var onClick = this.props.onClick;
      this.showOrHideSuggestions(true, onClick);
    }
  }, {
    key: "onInputReset",
    value: function onInputReset() {
      var shouldShowSuggestions = !this.props.shouldHideSuggestionsOnReset;
      this.showOrHideSuggestions(shouldShowSuggestions, this.props.onReset);
      setTimeout(this.setFocus);
    }
  }, {
    key: "showOrHideSuggestions",
    value: function showOrHideSuggestions(show) {
      var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var nextState = show ? {
        showSuggestions: show
      } : {
        showSuggestions: false,
        highlightedSuggestionIndex: -1
      };
      this.setState(nextState, cb);

      this._onSuggestionListChange();
    }
  }, {
    key: "setNextHighlighted",
    value: function setNextHighlighted() {
      var highlightedSuggestionIndex = this.state.highlightedSuggestionIndex;
      var suggestions = this.props.suggestions;
      var nextHighlightedSuggestionIndex = highlightedSuggestionIndex === suggestions.length - 1 ? 0 : highlightedSuggestionIndex + 1;
      this.setState({
        highlightedSuggestionIndex: nextHighlightedSuggestionIndex
      });

      if (nextHighlightedSuggestionIndex === 0) {
        this.suggestionList.setScrollPosStart();
        return;
      }

      this.suggestionList.setScrollPosNext();
    }
  }, {
    key: "setPreviousHighlighted",
    value: function setPreviousHighlighted() {
      var highlightedSuggestionIndex = this.state.highlightedSuggestionIndex;
      var suggestions = this.props.suggestions;
      var nextHighlightedSuggestionIndex = highlightedSuggestionIndex === 0 ? suggestions.length - 1 : highlightedSuggestionIndex - 1;
      this.setState({
        highlightedSuggestionIndex: nextHighlightedSuggestionIndex
      });

      if (nextHighlightedSuggestionIndex === suggestions.length - 1) {
        this.suggestionList.setScrollPosEnd();
        return;
      }

      this.suggestionList.setScrollPosPrevious();
    }
  }, {
    key: "setFirstHighlighted",
    value: function setFirstHighlighted() {
      this.setState({
        highlightedSuggestionIndex: 0
      });
      this.suggestionList.setScrollPosStart();
    }
  }, {
    key: "setLastHighlighted",
    value: function setLastHighlighted() {
      this.setState({
        highlightedSuggestionIndex: this.props.suggestions.length - 1
      });
      this.suggestionList.setScrollPosEnd();
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      var _this$state = this.state,
          showSuggestions = _this$state.showSuggestions,
          highlightedSuggestionIndex = _this$state.highlightedSuggestionIndex;
      var _this$props2 = this.props,
          shouldSelectHighlightedOnTab = _this$props2.shouldSelectHighlightedOnTab,
          suggestions = _this$props2.suggestions,
          onSuggestionSelect = _this$props2.onSuggestionSelect;
      var which = event.which,
          altKey = event.altKey;

      switch (which) {
        case KeyCodes.DOWN:
          if (altKey && !showSuggestions) {
            this.showOrHideSuggestions(true);
            break;
          }

          if (showSuggestions) {
            this.setNextHighlighted();
            event.preventDefault();
          }

          break;

        case KeyCodes.UP:
          if (altKey && showSuggestions) {
            this.showOrHideSuggestions(false);
            break;
          }

          if (showSuggestions) {
            this.setPreviousHighlighted();
            event.preventDefault();
          }

          break;

        case KeyCodes.ESC:
          this.onInputReset();
          break;

        case KeyCodes.HOME:
          if (showSuggestions && suggestions.length !== 0) {
            this.setFirstHighlighted();
            event.preventDefault();
          }

          break;

        case KeyCodes.END:
          if (showSuggestions && suggestions.length !== 0) {
            this.setLastHighlighted();
            event.preventDefault();
          }

          break;

        case KeyCodes.ENTER:
          if (showSuggestions) {
            event.preventDefault();
          }

          onSuggestionSelect(suggestions[highlightedSuggestionIndex]);
          break;

        case KeyCodes.TAB:
          if (showSuggestions && shouldSelectHighlightedOnTab) {
            onSuggestionSelect(suggestions[highlightedSuggestionIndex]);
          }

      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props3 = this.props,
          value = _this$props3.value,
          placeholder = _this$props3.placeholder,
          suggestionsHeightMax = _this$props3.suggestionsHeightMax,
          ariaInvalid = _this$props3.ariaInvalid,
          id = _this$props3.id,
          name = _this$props3.name,
          suggestions = _this$props3.suggestions,
          onSuggestionSelect = _this$props3.onSuggestionSelect,
          readOnly = _this$props3.readOnly,
          locale = _this$props3.locale,
          highCapacity = _this$props3.highCapacity;
      var _this$state2 = this.state,
          showSuggestions = _this$state2.showSuggestions,
          highlightedSuggestionIndex = _this$state2.highlightedSuggestionIndex,
          suggestionListId = _this$state2.suggestionListId;
      return /*#__PURE__*/React.createElement("div", {
        className: "ffe-base-selector ffe-input-group ffe-input-group--no-extra-margin"
      }, /*#__PURE__*/React.createElement(Input, {
        inputFieldRef: function inputFieldRef(input) {
          _this4.input = input;
        },
        value: value,
        onChange: this.onInputChange,
        onReset: this.onInputReset,
        onKeyDown: this.onInputKeyDown,
        isSuggestionsShowing: showSuggestions,
        placeholder: placeholder,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        onClick: this.onClick,
        highlightedIndex: highlightedSuggestionIndex,
        suggestionListId: suggestionListId,
        ariaInvalid: ariaInvalid,
        id: id,
        name: name,
        readOnly: readOnly,
        locale: locale
      }), showSuggestions && !highCapacity && /*#__PURE__*/React.createElement(SuggestionListContainer, _extends({}, this.props, {
        ref: function ref(suggestionList) {
          _this4.suggestionList = suggestionList;
        },
        highlightedIndex: highlightedSuggestionIndex,
        suggestions: suggestions,
        heightMax: suggestionsHeightMax,
        onSelect: onSuggestionSelect,
        id: suggestionListId
      })), showSuggestions && highCapacity && /*#__PURE__*/React.createElement(SuggestionListContainerHighCapacity, _extends({}, this.props, {
        ref: function ref(suggestionList) {
          _this4.suggestionList = suggestionList;
        },
        highlightedIndex: highlightedSuggestionIndex,
        suggestions: suggestions,
        heightMax: suggestionsHeightMax,
        onSelect: onSuggestionSelect,
        id: suggestionListId
      })));
    }
  }]);

  return BaseSelector;
}(Component);

BaseSelector.propTypes = {
  suggestions: arrayOf(object).isRequired,
  suggestionFilter: func.isRequired,
  onSelect: func.isRequired,
  value: string.isRequired,
  locale: Locale.isRequired,
  shouldHideSuggestionsOnSelect: bool.isRequired,
  shouldSelectHighlightedOnTab: bool.isRequired,
  shouldHideSuggestionsOnBlur: bool.isRequired,
  shouldHideSuggestionsOnReset: bool.isRequired,
  shouldShowSuggestionsOnFocus: bool,
  onSuggestionSelect: func.isRequired,
  onChange: func,
  onBlur: func,
  onClick: func,
  onReset: func,
  onFocus: func,
  onSuggestionListChange: func,
  //provides the height of the suggestion list
  placeholder: string,
  ariaInvalid: bool,
  suggestionsHeightMax: number,
  id: string,
  name: string,
  readOnly: bool,
  highCapacity: bool
};
BaseSelector.defaultProps = {
  onChange: Function.prototype,
  onBlur: Function.prototype,
  onClick: Function.prototype,
  onFocus: Function.prototype,
  onReset: Function.prototype,
  onSuggestionListChange: Function.prototype,
  ariaInvalid: false,
  placeholder: '',
  value: '',
  shouldShowSuggestionsOnFocus: true,
  highCapacity: false
};
export default BaseSelector;