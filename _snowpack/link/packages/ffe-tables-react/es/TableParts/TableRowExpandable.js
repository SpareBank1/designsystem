function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

import ChevronIkon from '../../../ffe-icons-react/lib/chevron-ikon.js';
import classNames from '../../../../../pkg/classnames.js';
import PropTypes from '../../../../../pkg/prop-types.js';
import React, { Component } from '../../../../../pkg/react.js';
import { polyfill } from '../../../../../pkg/react-lifecycles-compat.js';
import shallowEqual from '../../../../../pkg/shallow-equals.js';
import TableRow from './TableRow.js';

var TableRowExpandable = /*#__PURE__*/function (_Component) {
  _inherits(TableRowExpandable, _Component);

  var _super = _createSuper(TableRowExpandable);

  function TableRowExpandable(props) {
    var _this;

    _classCallCheck(this, TableRowExpandable);

    _this = _super.call(this, props);
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.toggleExpand = _this.toggleExpand.bind(_assertThisInitialized(_this));
    _this.state = {
      expanded: !!props.defaultExpanded,
      sort: props.sort
    };
    _this.rowRef = /*#__PURE__*/React.createRef();
    return _this;
  }

  _createClass(TableRowExpandable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.scrollToOnMount && this.rowRef.current) {
        this.rowRef.current.scrollIntoView();
      }
    }
  }, {
    key: "toggleExpand",
    value: function toggleExpand() {
      this.setState(function (prevState) {
        return {
          expanded: !prevState.expanded
        };
      });
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      if ((event.key === 'Enter' || event.key === ' ') && event.target.tagName === 'TR') {
        this.setState(function (prevState) {
          return {
            expanded: !prevState.expanded
          };
        });
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cells = _this$props.cells,
          columns = _this$props.columns,
          children = _this$props.children,
          rowRender = _this$props.rowRender,
          rowIndex = _this$props.rowIndex;
      var unexpandable = !children;
      return /*#__PURE__*/React.createElement("tbody", {
        ref: this.rowRef
      }, /*#__PURE__*/React.createElement(TableRow, {
        cells: _objectSpread(_objectSpread({}, cells), {}, {
          expandIcon: unexpandable ? ' ' : /*#__PURE__*/React.createElement(ChevronIkon, {
            className: classNames('ffe-table__expand-icon', {
              'ffe-table__expand-icon--expanded': this.state.expanded
            })
          })
        }),
        trClasses: classNames({
          'ffe-table__row-expandable': !unexpandable
        }, {
          'ffe-table__row-expandable--expanded': this.state.expanded
        }),
        columns: columns,
        onClick: this.toggleExpand,
        onKeyDown: this.handleKeyPress,
        expandable: !unexpandable,
        expanded: this.state.expanded,
        rowRender: rowRender,
        rowIndex: rowIndex
      }), /*#__PURE__*/React.createElement("tr", {
        role: "presentation",
        "aria-hidden": String(!this.state.expanded),
        className: classNames('ffe-table__row', 'ffe-table__row-expandable-content', {
          'ffe-table__row-expandable-content--expanded': this.state.expanded
        }, {
          'ffe-table__row--collapsed': !this.state.expanded
        })
      }, /*#__PURE__*/React.createElement("td", {
        colSpan: columns.length,
        className: "ffe-table__cell-expandable-content"
      }, /*#__PURE__*/React.createElement("div", null, this.state.expanded && children))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!nextProps.children && prevState.expanded || !shallowEqual(nextProps.sort, prevState.sort)) {
        return {
          expanded: false,
          sort: nextProps.sort
        };
      }

      return null;
    }
  }]);

  return TableRowExpandable;
}(Component);

TableRowExpandable.propTypes = {
  children: PropTypes.node,
  cells: PropTypes.object.isRequired,
  columns: PropTypes.array.isRequired,
  sort: PropTypes.object,
  rowRender: PropTypes.func,
  headerRender: PropTypes.func,
  footerRender: PropTypes.func,
  rowIndex: PropTypes.number,
  defaultExpanded: PropTypes.bool,
  scrollToOnMount: PropTypes.bool
};
polyfill(TableRowExpandable);
export default TableRowExpandable;