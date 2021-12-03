function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import PilNedIkon from '../../../ffe-icons-react/lib/pil-ned-ikon.js';
import classNames from '../../../../../pkg/classnames.js';
import equal from '../../../../../pkg/deep-equal.js';
import PropTypes from '../../../../../pkg/prop-types.js';
import React, { Component } from '../../../../../pkg/react.js';
import Table from '../Table.js';
import sortData from './sort-data.js';
import memoize from '../../../../../pkg/memoize-one.js';

var SortableTable = /*#__PURE__*/function (_Component) {
  _inherits(SortableTable, _Component);

  var _super = _createSuper(SortableTable);

  function SortableTable(props) {
    var _this;

    _classCallCheck(this, SortableTable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "sortTableData", memoize(function (columns, data, sortBy, descending) {
      return sortBy ? sortData(columns, data, sortBy, descending) : data;
    }));

    var _sortBy = props.sortBy,
        _descending = props.descending;
    _this.state = {
      sortBy: _sortBy,
      descending: _descending
    };
    return _this;
  }

  _createClass(SortableTable, [{
    key: "sortStateHasChanged",
    value: function sortStateHasChanged(nextState) {
      return nextState.sortBy !== this.state.sortBy || nextState.descending !== this.state.descending;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !equal(nextProps, this.props) || this.sortStateHasChanged(nextState);
    }
  }, {
    key: "tableHeaderClicked",
    value: function tableHeaderClicked(columnKey) {
      var _this2 = this;

      var _this$props = this.props,
          columns = _this$props.columns,
          data = _this$props.data;
      this.setState(function (prevState, currentProps) {
        var descending = columnKey === prevState.sortBy ? !prevState.descending : false;
        return {
          sortBy: columnKey,
          descending: descending
        };
      }, function () {
        return _this2.props.onSort({
          sortBy: columnKey,
          descending: _this2.state.descending,
          tableData: _this2.sortTableData(columns, data, columnKey, _this2.state.descending)
        });
      });
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(columnKey, event) {
      if (event.key === 'Enter' || event.key === ' ') {
        this.tableHeaderClicked(columnKey);
        event.preventDefault();
      }
    }
  }, {
    key: "getAriaSort",
    value: function getAriaSort(column) {
      if (this.state.sortBy !== column.key) {
        return 'none';
      }

      return this.state.descending ? 'descending' : 'ascending';
    }
  }, {
    key: "decorateSortableTableHeader",
    value: function decorateSortableTableHeader(column) {
      var _this3 = this;

      if (column.header === '') {
        return /*#__PURE__*/React.createElement("span", {
          className: "ffe-sortable-table__header"
        });
      }

      if (column.notSortable) {
        return column.header;
      }

      return /*#__PURE__*/React.createElement("span", {
        tabIndex: "0",
        onKeyDown: function onKeyDown(event) {
          return _this3.handleKeyPress(column.key, event);
        },
        className: classNames('ffe-sortable-table__header', {
          'ffe-sortable-table__header--active': this.state.sortBy === column.key
        }),
        role: "button",
        onClick: this.tableHeaderClicked.bind(this, column.key)
      }, column.header, /*#__PURE__*/React.createElement(PilNedIkon, {
        className: classNames('icon', 'ffe-sortable-table__sort-arrow', {
          'ffe-sortable-table__sort-arrow--descending': this.state.sortBy === column.key && this.state.descending
        })
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var sortableColumns = this.props.columns.map(function (column) {
        return _objectSpread(_objectSpread({}, column), {}, {
          ariaSort: _this4.getAriaSort(column),
          header: _this4.decorateSortableTableHeader(column)
        });
      });
      var caption = this.props.caption;
      var _this$props2 = this.props,
          expandedContentMapper = _this$props2.expandedContentMapper,
          condensed = _this$props2.condensed,
          columnLayoutMobile = _this$props2.columnLayoutMobile,
          smallHeader = _this$props2.smallHeader,
          alignLeft = _this$props2.alignLeft,
          breakpoint = _this$props2.breakpoint,
          limit = _this$props2.limit,
          offset = _this$props2.offset,
          srOnlyCaption = _this$props2.srOnlyCaption,
          className = _this$props2.className,
          rowRender = _this$props2.rowRender,
          headerRender = _this$props2.headerRender,
          footerRender = _this$props2.footerRender,
          columns = _this$props2.columns,
          data = _this$props2.data;
      var _this$state = this.state,
          sortBy = _this$state.sortBy,
          descending = _this$state.descending;

      if (srOnlyCaption && sortBy) {
        caption = caption.concat(' ', sortBy, ' ', descending ? 'descending' : 'ascending');
      }

      var tableData = this.sortTableData(columns, data, sortBy, descending);
      return /*#__PURE__*/React.createElement(Table, {
        caption: caption,
        srOnlyCaption: srOnlyCaption,
        expandedContentMapper: expandedContentMapper,
        columnLayoutMobile: columnLayoutMobile,
        columns: sortableColumns,
        data: tableData,
        condensed: condensed,
        smallHeader: smallHeader,
        alignLeft: alignLeft,
        breakpoint: breakpoint,
        limit: limit,
        offset: offset,
        sort: {
          sortBy: sortBy,
          descending: descending
        },
        className: className,
        rowRender: rowRender,
        headerRender: headerRender,
        footerRender: footerRender
      });
    }
  }]);

  return SortableTable;
}(Component);

SortableTable.propTypes = {
  caption: PropTypes.node,
  srOnlyCaption: PropTypes.bool,
  expandedContentMapper: PropTypes.func,
  offset: PropTypes.number,
  limit: PropTypes.number,
  columnLayoutMobile: PropTypes.bool,
  condensed: PropTypes.bool,
  smallHeader: PropTypes.bool,
  alignLeft: PropTypes.bool,
  breakpoint: PropTypes.oneOf(['sm', 'none']),
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortBy: PropTypes.string,
  descending: PropTypes.bool,
  onSort: PropTypes.func,
  rowRender: PropTypes.func,
  headerRender: PropTypes.func,
  footerRender: PropTypes.func,
  className: PropTypes.string
};
SortableTable.defaultProps = {
  descending: false,
  onSort: function onSort() {}
};
export default SortableTable;