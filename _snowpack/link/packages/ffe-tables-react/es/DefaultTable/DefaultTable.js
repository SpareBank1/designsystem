function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

import React, { Component } from '../../../../../pkg/react.js';
import PropTypes from '../../../../../pkg/prop-types.js';
import classNames from '../../../../../pkg/classnames.js';
import TableHeaders from '../TableParts/TableHeaders.js';
import TableFooter from '../TableParts/TableFooter.js';
import TableRow from '../TableParts/TableRow.js';
import TableRowExpandable from '../TableParts/TableRowExpandable.js';

var DefaultTable = /*#__PURE__*/function (_Component) {
  _inherits(DefaultTable, _Component);

  var _super = _createSuper(DefaultTable);

  function DefaultTable() {
    _classCallCheck(this, DefaultTable);

    return _super.apply(this, arguments);
  }

  _createClass(DefaultTable, [{
    key: "renderTableCaption",
    value: function renderTableCaption() {
      var _this$props = this.props,
          caption = _this$props.caption,
          srOnlyCaption = _this$props.srOnlyCaption;

      if (!caption) {
        return null;
      }

      if (srOnlyCaption) {
        return /*#__PURE__*/React.createElement("caption", {
          className: "ffe-screenreader-only",
          "aria-live": "polite"
        }, caption);
      }

      return /*#__PURE__*/React.createElement("caption", {
        className: "ffe-table__caption"
      }, caption);
    }
  }, {
    key: "renderTableHeaders",
    value: function renderTableHeaders() {
      var _this$props2 = this.props,
          columns = _this$props2.columns,
          headerRender = _this$props2.headerRender;

      if (!columns.length) {
        return null;
      }

      var renderColumns = _toConsumableArray(columns);

      if (this.props.expandedContentMapper) {
        renderColumns.push({
          key: 'expandIcon',
          header: '',
          alignRight: true
        });
      }

      return /*#__PURE__*/React.createElement(TableHeaders, {
        columns: renderColumns,
        headerRender: headerRender,
        dataWindow: this.getData()
      });
    }
  }, {
    key: "renderTableFooter",
    value: function renderTableFooter() {
      var _this$props3 = this.props,
          columns = _this$props3.columns,
          footerRender = _this$props3.footerRender;

      if (!columns.some(function (column) {
        return column.footer;
      })) {
        return null;
      }

      return /*#__PURE__*/React.createElement(TableFooter, {
        columns: columns,
        footerRender: footerRender,
        dataWindow: this.getData()
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this$props4 = this.props,
          data = _this$props4.data,
          offset = _this$props4.offset,
          limit = _this$props4.limit;

      if (!offset && !limit) {
        return data;
      }

      return data.slice(offset, limit ? offset + limit : data.length);
    }
  }, {
    key: "renderTableBody",
    value: function renderTableBody() {
      var _this$props5 = this.props,
          columns = _this$props5.columns,
          expandedContentMapper = _this$props5.expandedContentMapper,
          sort = _this$props5.sort,
          rowRender = _this$props5.rowRender;
      var data = this.getData();

      if (!data.length) {
        return null;
      }

      var renderColumns = _toConsumableArray(columns);

      if (expandedContentMapper) {
        renderColumns.push({
          key: 'expandIcon',
          header: '',
          alignRight: true
        });
        return data.map(function (row, index) {
          var key = row.id || row.id === 0 ? row.id.toString() : index;
          var expandedContent = expandedContentMapper(row);
          var rowProps = {
            cells: row,
            columns: renderColumns,
            sort: sort,
            rowRender: rowRender,
            rowIndex: index,
            defaultExpanded: row.defaultExpanded,
            scrollToOnMount: row.scrollToOnMount
          };
          return expandedContent ? /*#__PURE__*/React.createElement(TableRowExpandable, _extends({
            key: key
          }, rowProps), expandedContent) : /*#__PURE__*/React.createElement("tbody", {
            key: key
          }, /*#__PURE__*/React.createElement(TableRow, rowProps));
        });
      }

      return /*#__PURE__*/React.createElement("tbody", null, data.map(function (row, index) {
        var key = row.id || row.id === 0 ? row.id.toString() : index;
        return /*#__PURE__*/React.createElement(TableRow, {
          cells: row,
          columns: columns,
          key: key,
          rowRender: rowRender,
          rowIndex: index
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
          alignLeft = _this$props6.alignLeft,
          condensed = _this$props6.condensed,
          smallHeader = _this$props6.smallHeader,
          columnLayoutMobile = _this$props6.columnLayoutMobile,
          breakpoint = _this$props6.breakpoint,
          className = _this$props6.className;
      return /*#__PURE__*/React.createElement("table", {
        className: classNames('ffe-table', {
          'ffe-table--condensed': condensed
        }, {
          'ffe-table--small-header': smallHeader
        }, {
          'ffe-table--columns-sm': columnLayoutMobile
        }, {
          'ffe-table--text-left': alignLeft
        }, _defineProperty({}, "ffe-table--breakpoint-".concat(breakpoint), !!breakpoint), className)
      }, this.renderTableCaption(), this.renderTableHeaders(), this.renderTableFooter(), this.renderTableBody());
    }
  }]);

  return DefaultTable;
}(Component);

DefaultTable.propTypes = {
  alignLeft: PropTypes.bool,
  columnLayoutMobile: PropTypes.bool,
  caption: PropTypes.node,
  srOnlyCaption: PropTypes.bool,
  expandedContentMapper: PropTypes.func,
  condensed: PropTypes.bool,
  smallHeader: PropTypes.bool,
  sort: PropTypes.object,
  offset: PropTypes.number,
  limit: PropTypes.number,
  breakpoint: PropTypes.oneOf(['sm', 'none']),
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.node.isRequired,
    key: PropTypes.string.isRequired
  }).isRequired),
  rowRender: PropTypes.func,
  headerRender: PropTypes.func,
  footerRender: PropTypes.func,
  className: PropTypes.string
};
DefaultTable.defaultProps = {
  columns: [],
  data: [],
  offset: 0,
  limit: 0
};
export default DefaultTable;