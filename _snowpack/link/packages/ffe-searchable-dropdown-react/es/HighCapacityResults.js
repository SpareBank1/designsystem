function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

import { CellMeasurer, CellMeasurerCache, List as VirtualizedList, AutoSizer } from '../../../../pkg/react-virtualized.js';
import React from '../../../../pkg/react.js';
import { Scrollbars } from '../../../../pkg/react-custom-scrollbars.js';
import { arrayOf, any, bool, func, number, object, oneOf, shape, string } from '../../../../pkg/prop-types.js';
import { locales } from './translations.js';
import ListItemContainer from './ListItemContainer.js';
import NoMatch from './NoMatch.js';

var HighCapacityResults = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(HighCapacityResults, _React$PureComponent);

  var _super = _createSuper(HighCapacityResults);

  function HighCapacityResults(props, context) {
    var _this;

    _classCallCheck(this, HighCapacityResults);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "state", {
      optionHeight: 40
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function (event) {
      var _event$target = event.target,
          scrollTop = _event$target.scrollTop,
          scrollLeft = _event$target.scrollLeft;
      var Grid = _this.listRef.current.Grid;
      Grid.handleScrollEvent({
        scrollTop: scrollTop,
        scrollLeft: scrollLeft
      });
    });

    _this._cache = new CellMeasurerCache({
      fixedWidth: true,
      minHeight: 10
    });
    _this.rowRenderer = _this.rowRenderer.bind(_assertThisInitialized(_this));
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    _this.listRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(HighCapacityResults, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      requestAnimationFrame(function () {
        var _this2$listRef$curren, _this2$listRef$curren2, _this2$listRef$curren3;

        var firstOption = (_this2$listRef$curren = _this2.listRef.current) === null || _this2$listRef$curren === void 0 ? void 0 : (_this2$listRef$curren2 = _this2$listRef$curren.Grid) === null || _this2$listRef$curren2 === void 0 ? void 0 : (_this2$listRef$curren3 = _this2$listRef$curren2._scrollingContainer) === null || _this2$listRef$curren3 === void 0 ? void 0 : _this2$listRef$curren3.querySelector('[role="option"]');

        if (firstOption !== null && firstOption !== void 0 && firstOption.offsetHeight) {
          _this2.setState(_objectSpread(_objectSpread({}, _this2.state), {}, {
            optionHeight: firstOption.offsetHeight
          }));
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          isNoMatch = _this$props.isNoMatch,
          noMatch = _this$props.noMatch,
          listToRender = _this$props.listToRender,
          noMatchMessageId = _this$props.noMatchMessageId;
      var optionHeight = this.state.optionHeight;
      var maxHeight = 300;
      var heightOfAllOptions = optionHeight * listToRender.length + (isNoMatch && noMatch.text ? optionHeight : 0);
      var height = heightOfAllOptions > maxHeight ? maxHeight : heightOfAllOptions;
      return /*#__PURE__*/React.createElement(AutoSizer, {
        disableHeight: true
      }, function (_ref) {
        var width = _ref.width;
        return /*#__PURE__*/React.createElement(Scrollbars, {
          onScroll: _this3.handleScroll,
          style: {
            height: height,
            width: width
          }
        }, isNoMatch && /*#__PURE__*/React.createElement(NoMatch, {
          noMatch: noMatch,
          noMatchMessageId: noMatchMessageId,
          listToRender: listToRender
        }), /*#__PURE__*/React.createElement(VirtualizedList, {
          ref: _this3.listRef,
          deferredMeasurementCache: _this3._cache,
          height: height,
          overscanRowCount: 10 // Required to make Scrollbars work
          ,
          style: {
            overflowX: false,
            overflowY: false
          },
          rowCount: listToRender.length,
          rowHeight: _this3._cache.rowHeight,
          rowRenderer: _this3.rowRenderer,
          width: width
        }));
      });
    }
  }, {
    key: "rowRenderer",
    value: function rowRenderer(_ref2) {
      var index = _ref2.index,
          parent = _ref2.parent,
          style = _ref2.style;
      var _this$props2 = this.props,
          ListItemBodyElement = _this$props2.ListItemBodyElement,
          listToRender = _this$props2.listToRender,
          highlightedIndex = _this$props2.highlightedIndex,
          dropdownAttributes = _this$props2.dropdownAttributes,
          locale = _this$props2.locale,
          refs = _this$props2.refs,
          onChange = _this$props2.onChange;
      var item = listToRender[index];
      var itemKey = Object.values(item).join('-');
      return /*#__PURE__*/React.createElement(CellMeasurer, {
        cache: this._cache,
        columnIndex: 0,
        key: itemKey,
        rowIndex: index,
        parent: parent
      }, function (_ref3) {
        var registerChild = _ref3.registerChild;
        return /*#__PURE__*/React.createElement("div", {
          ref: registerChild,
          style: style
        }, /*#__PURE__*/React.createElement(ListItemContainer, {
          key: itemKey,
          ref: refs[index],
          isHighlighted: highlightedIndex === index,
          onClick: function onClick() {
            onChange(item);
          },
          item: item
        }, function (props) {
          return /*#__PURE__*/React.createElement(ListItemBodyElement, _extends({}, props, {
            dropdownAttributes: dropdownAttributes,
            locale: locale
          }));
        }));
      });
    }
  }]);

  return HighCapacityResults;
}(React.PureComponent);

export { HighCapacityResults as default };
HighCapacityResults.propTypes = {
  listToRender: arrayOf(object).isRequired,
  noMatch: shape({
    text: string,
    dropdownList: arrayOf(object)
  }),
  noMatchMessageId: string,
  ListItemBodyElement: func,
  highlightedIndex: number,
  dropdownAttributes: arrayOf(string).isRequired,
  locale: oneOf(Object.values(locales)).isRequired,
  refs: arrayOf(any).isRequired,
  onChange: func.isRequired,
  isNoMatch: bool.isRequired
};