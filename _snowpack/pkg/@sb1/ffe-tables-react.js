import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { c as classnames } from '../common/index-5100710e.js';
import { C as ChevronIkon } from '../common/chevron-ikon-e4f7de91.js';
import { p as polyfill$3 } from '../common/react-lifecycles-compat.es-bd71b1aa.js';
import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from '../common/_commonjsHelpers-4f955397.js';
import { m as memoizeOne } from '../common/memoize-one.esm-d455d955.js';

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

var TableHeaders = function TableHeaders(_ref) {
  var columns = _ref.columns,
      headerRender = _ref.headerRender,
      dataWindow = _ref.dataWindow;
  var headerContent = columns.map(function (column, index) {
    if (column === null) {
      return /*#__PURE__*/react.createElement("th", {
        key: index
      });
    }

    var thProps = {
      key: index,
      className: classnames('ffe-table__heading', {
        'ffe-table--hide-sm': column.hideOnMobile
      }, {
        'ffe-table--hide-md': column.hideOnSmallTablet
      }, {
        'ffe-table--hide-lg': column.hideOnTablet
      }, {
        'ffe-table--hide-xlg': column.hideOnDesktop
      }),
      'aria-sort': column.ariaSort,
      scope: "col"
    };
    var spanProps = {
      className: classnames('ffe-table__content', {
        'ffe-table__content--text-right': column.alignRight
      })
    };
    var thContentDefault = /*#__PURE__*/react.createElement("span", spanProps, column.header);

    if (typeof column.columnHeaderRender === "function") {
      return column.columnHeaderRender(column.header, dataWindow, spanProps, thProps, columns, index);
    }

    return /*#__PURE__*/react.createElement("th", _extends$1({
      key: thProps.key
    }, thProps), thContentDefault);
  });
  var trProps = {
    className: "ffe-table__row",
    children: headerContent
  };
  var trDefault = /*#__PURE__*/react.createElement("tr", trProps);
  var headerRendered = typeof headerRender === "function" ? headerRender(trProps, columns) : trDefault;
  return /*#__PURE__*/react.createElement("thead", {
    className: "ffe-table__head"
  }, headerRendered);
};

TableHeaders.propTypes = {
  columns: propTypes.arrayOf(propTypes.shape({
    alignRight: propTypes.bool,
    header: propTypes.node.isRequired,
    hideOnDesktop: propTypes.bool,
    hideOnMobile: propTypes.bool,
    hideOnSmallTablet: propTypes.bool,
    hideOnTablet: propTypes.bool,
    key: propTypes.string.isRequired
  })),
  headerRender: propTypes.func,
  dataWindow: propTypes.array
};
var TableHeaders$1 = TableHeaders;

var TableCell = function TableCell(props) {
  var alignRight = props.alignRight,
      alignTop = props.alignTop,
      children = props.children,
      columnHeader = props.columnHeader,
      contentClasses = props.contentClasses,
      tdClasses = props.tdClasses;
  var dataTh = '';

  if (columnHeader) {
    if (typeof columnHeader === 'string') {
      dataTh = columnHeader;
    } else if (columnHeader.props && columnHeader.props.children) {
      dataTh = react.Children.toArray(columnHeader.props.children)[0];
    }
  }

  return /*#__PURE__*/react.createElement("td", {
    className: classnames('ffe-table__cell', {
      'ffe-table__cell--top': alignTop
    }, tdClasses),
    "data-th": dataTh
  }, /*#__PURE__*/react.createElement("span", {
    className: classnames('ffe-table__content', {
      'ffe-table__content--text-right': alignRight
    }, contentClasses)
  }, children));
};

TableCell.propTypes = {
  alignRight: propTypes.bool,
  alignTop: propTypes.bool,
  children: propTypes.any,
  columnHeader: propTypes.oneOfType([propTypes.string, propTypes.node]),
  contentClasses: propTypes.string,
  tdClasses: propTypes.string
};
var TableCell$1 = TableCell;

var TableFooter = function TableFooter(_ref) {
  var columns = _ref.columns,
      footerRender = _ref.footerRender,
      dataWindow = _ref.dataWindow;
  var footerContent = columns.map(function (column, index) {
    if (column === null) {
      return /*#__PURE__*/react.createElement("td", {
        key: index
      });
    }

    var className = classnames({
      'ffe-table--hide-sm': column.hideOnMobile
    }, {
      'ffe-table--hide-md': column.hideOnSmallTablet
    }, {
      'ffe-table--hide-lg': column.hideOnTablet
    }, {
      'ffe-table--hide-xlg': column.hideOnDesktop
    });
    var dataTh = '';
    var columnHeader = column.header;

    if (columnHeader) {
      if (typeof columnHeader === 'string') {
        dataTh = columnHeader;
      } else if (columnHeader.props && columnHeader.props.children) {
        dataTh = react.Children.toArray(columnHeader.props.children)[0];
      }
    }

    var tdProps = {
      className: classnames('ffe-table__cell', {
        'ffe-table__cell--top': column.alignTop
      }, className),
      'data-th': dataTh,
      key: index
    };
    var spanProps = {
      className: classnames('ffe-table__content', {
        'ffe-table__content--text-right': column.alignRight
      })
    };

    if (typeof column.columnFooterRender === "function") {
      return column.columnFooterRender(column.footer, dataWindow, tdProps, spanProps, columns, index);
    }

    return /*#__PURE__*/react.createElement(TableCell$1, {
      key: index,
      columnHeader: column.header,
      alignRight: column.alignRight,
      alignTop: column.alignTop,
      tdClasses: className
    }, column.footer);
  });
  var trProps = {
    className: "ffe-table__row",
    children: footerContent
  };
  var trDefault = /*#__PURE__*/react.createElement("tr", trProps);
  var footerRendered = typeof footerRender === "function" ? footerRender(trProps, columns) : trDefault;
  return /*#__PURE__*/react.createElement("tfoot", {
    className: "ffe-table__footer"
  }, footerRendered);
};

TableFooter.propTypes = {
  columns: propTypes.arrayOf(propTypes.shape({
    alignRight: propTypes.bool,
    alignTop: propTypes.bool,
    footer: propTypes.any,
    header: propTypes.node.isRequired,
    hideOnDesktop: propTypes.bool,
    hideOnMobile: propTypes.bool,
    hideOnSmallTablet: propTypes.bool,
    hideOnTablet: propTypes.bool
  })),
  footerRender: propTypes.func,
  dataWindow: propTypes.array
};
var TableFooter$1 = TableFooter;

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TableRow = function TableRow(props) {
  var cells = props.cells,
      columns = props.columns,
      onClick = props.onClick,
      onKeyDown = props.onKeyDown,
      trClasses = props.trClasses,
      expandable = props.expandable,
      expanded = props.expanded,
      rowRender = props.rowRender,
      rowIndex = props.rowIndex;
  var expandableProps = expandable && {
    'aria-expanded': expanded,
    onClick: onClick,
    onKeyDown: onKeyDown,
    role: 'button',
    tabIndex: '0'
  };
  var rowContent = columns.map(function (column, index) {
    return /*#__PURE__*/react.createElement(TableCell$1, {
      alignRight: column.alignRight,
      alignTop: column.alignTop,
      columnHeader: column.header,
      key: index,
      tdClasses: classnames({
        'ffe-table__cell--collapsed': column.key === 'expandIcon'
      }, {
        'ffe-table--hide-sm': column.hideOnMobile
      }, {
        'ffe-table--hide-md': column.hideOnSmallTablet
      }, {
        'ffe-table--hide-lg': column.hideOnTablet
      }, {
        'ffe-table--hide-xlg': column.hideOnDesktop
      })
    }, column.cellRender ? column.cellRender(cells[column.key], column, props, index) : cells[column.key]);
  });

  var trprops = _objectSpread$2(_objectSpread$2({
    className: classnames('ffe-table__row', trClasses)
  }, expandableProps), {}, {
    onClick: onClick,
    children: rowContent
  });

  if (typeof rowRender === 'function') {
    return rowRender(trprops, props, rowIndex);
  }

  return /*#__PURE__*/react.createElement("tr", trprops, rowContent);
};

TableRow.propTypes = {
  cells: propTypes.object.isRequired,
  columns: propTypes.arrayOf(propTypes.shape({
    alignRight: propTypes.bool,
    alignTop: propTypes.bool,
    header: propTypes.any,
    hideOnDesktop: propTypes.bool,
    hideOnMobile: propTypes.bool,
    hideOnSmallTablet: propTypes.bool,
    hideOnTablet: propTypes.bool,
    key: propTypes.string,
    cellRender: propTypes.func
  })).isRequired,
  expandable: propTypes.bool,
  expanded: propTypes.bool,
  onClick: propTypes.func,
  rowRender: propTypes.func,
  headerRender: propTypes.func,
  footerRender: propTypes.func,
  onKeyDown: propTypes.func,
  trClasses: propTypes.string,
  rowIndex: propTypes.number
};
var TableRow$1 = TableRow;

var shallowEquals = shallow;

function shallow(a, b, compare) {
  var aIsNull = a === null;
  var bIsNull = b === null;

  if (aIsNull !== bIsNull) return false

  var aIsArray = Array.isArray(a);
  var bIsArray = Array.isArray(b);

  if (aIsArray !== bIsArray) return false

  var aTypeof = typeof a;
  var bTypeof = typeof b;

  if (aTypeof !== bTypeof) return false
  if (flat(aTypeof)) return compare
    ? compare(a, b)
    : a === b

  return aIsArray
    ? shallowArray(a, b, compare)
    : shallowObject(a, b, compare)
}

function shallowArray(a, b, compare) {
  var l = a.length;
  if (l !== b.length) return false

  if (compare) {
    for (var i = 0; i < l; i++)
      if (!compare(a[i], b[i])) return false
  } else {
    for (var i = 0; i < l; i++) {
      if (a[i] !== b[i]) return false
    }
  }

  return true
}

function shallowObject(a, b, compare) {
  var ka = 0;
  var kb = 0;

  if (compare) {
    for (var key in a) {
      if (
        a.hasOwnProperty(key) &&
        !compare(a[key], b[key])
      ) return false

      ka++;
    }
  } else {
    for (var key in a) {
      if (
        a.hasOwnProperty(key) &&
        a[key] !== b[key]
      ) return false

      ka++;
    }
  }

  for (var key in b) {
    if (b.hasOwnProperty(key)) kb++;
  }

  return ka === kb
}

function flat(type) {
  return (
    type !== 'function' &&
    type !== 'object'
  )
}

function _typeof$2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$2(subClass, superClass); }

function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = _getPrototypeOf$2(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$2(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$2(this, result); }; }

function _possibleConstructorReturn$2(self, call) { if (call && (_typeof$2(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$2(self); }

function _assertThisInitialized$2(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$2(o) { _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$2(o); }

var TableRowExpandable = /*#__PURE__*/function (_Component) {
  _inherits$2(TableRowExpandable, _Component);

  var _super = _createSuper$2(TableRowExpandable);

  function TableRowExpandable(props) {
    var _this;

    _classCallCheck$2(this, TableRowExpandable);

    _this = _super.call(this, props);
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized$2(_this));
    _this.toggleExpand = _this.toggleExpand.bind(_assertThisInitialized$2(_this));
    _this.state = {
      expanded: !!props.defaultExpanded,
      sort: props.sort
    };
    _this.rowRef = /*#__PURE__*/react.createRef();
    return _this;
  }

  _createClass$2(TableRowExpandable, [{
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
      return /*#__PURE__*/react.createElement("tbody", {
        ref: this.rowRef
      }, /*#__PURE__*/react.createElement(TableRow$1, {
        cells: _objectSpread$1(_objectSpread$1({}, cells), {}, {
          expandIcon: unexpandable ? ' ' : /*#__PURE__*/react.createElement(ChevronIkon, {
            className: classnames('ffe-table__expand-icon', {
              'ffe-table__expand-icon--expanded': this.state.expanded
            })
          })
        }),
        trClasses: classnames({
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
      }), /*#__PURE__*/react.createElement("tr", {
        role: "presentation",
        "aria-hidden": String(!this.state.expanded),
        className: classnames('ffe-table__row', 'ffe-table__row-expandable-content', {
          'ffe-table__row-expandable-content--expanded': this.state.expanded
        }, {
          'ffe-table__row--collapsed': !this.state.expanded
        })
      }, /*#__PURE__*/react.createElement("td", {
        colSpan: columns.length,
        className: "ffe-table__cell-expandable-content"
      }, /*#__PURE__*/react.createElement("div", null, this.state.expanded && children))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!nextProps.children && prevState.expanded || !shallowEquals(nextProps.sort, prevState.sort)) {
        return {
          expanded: false,
          sort: nextProps.sort
        };
      }

      return null;
    }
  }]);

  return TableRowExpandable;
}(react.Component);

TableRowExpandable.propTypes = {
  children: propTypes.node,
  cells: propTypes.object.isRequired,
  columns: propTypes.array.isRequired,
  sort: propTypes.object,
  rowRender: propTypes.func,
  headerRender: propTypes.func,
  footerRender: propTypes.func,
  rowIndex: propTypes.number,
  defaultExpanded: propTypes.bool,
  scrollToOnMount: propTypes.bool
};
polyfill$3(TableRowExpandable);
var TableRowExpandable$1 = TableRowExpandable;

function _typeof$1(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray$1(arr) { return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1(); }

function _nonIterableSpread$1() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _iterableToArray$1(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles$1(arr) { if (Array.isArray(arr)) return _arrayLikeToArray$1(arr); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf$1(subClass, superClass); }

function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn$1(this, result); }; }

function _possibleConstructorReturn$1(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized$1(self); }

function _assertThisInitialized$1(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf$1(o) { _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf$1(o); }

var DefaultTable = /*#__PURE__*/function (_Component) {
  _inherits$1(DefaultTable, _Component);

  var _super = _createSuper$1(DefaultTable);

  function DefaultTable() {
    _classCallCheck$1(this, DefaultTable);

    return _super.apply(this, arguments);
  }

  _createClass$1(DefaultTable, [{
    key: "renderTableCaption",
    value: function renderTableCaption() {
      var _this$props = this.props,
          caption = _this$props.caption,
          srOnlyCaption = _this$props.srOnlyCaption;

      if (!caption) {
        return null;
      }

      if (srOnlyCaption) {
        return /*#__PURE__*/react.createElement("caption", {
          className: "ffe-screenreader-only",
          "aria-live": "polite"
        }, caption);
      }

      return /*#__PURE__*/react.createElement("caption", {
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

      var renderColumns = _toConsumableArray$1(columns);

      if (this.props.expandedContentMapper) {
        renderColumns.push({
          key: 'expandIcon',
          header: '',
          alignRight: true
        });
      }

      return /*#__PURE__*/react.createElement(TableHeaders$1, {
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

      return /*#__PURE__*/react.createElement(TableFooter$1, {
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

      var renderColumns = _toConsumableArray$1(columns);

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
          return expandedContent ? /*#__PURE__*/react.createElement(TableRowExpandable$1, _extends({
            key: key
          }, rowProps), expandedContent) : /*#__PURE__*/react.createElement("tbody", {
            key: key
          }, /*#__PURE__*/react.createElement(TableRow$1, rowProps));
        });
      }

      return /*#__PURE__*/react.createElement("tbody", null, data.map(function (row, index) {
        var key = row.id || row.id === 0 ? row.id.toString() : index;
        return /*#__PURE__*/react.createElement(TableRow$1, {
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
      return /*#__PURE__*/react.createElement("table", {
        className: classnames('ffe-table', {
          'ffe-table--condensed': condensed
        }, {
          'ffe-table--small-header': smallHeader
        }, {
          'ffe-table--columns-sm': columnLayoutMobile
        }, {
          'ffe-table--text-left': alignLeft
        }, _defineProperty$1({}, "ffe-table--breakpoint-".concat(breakpoint), !!breakpoint), className)
      }, this.renderTableCaption(), this.renderTableHeaders(), this.renderTableFooter(), this.renderTableBody());
    }
  }]);

  return DefaultTable;
}(react.Component);

DefaultTable.propTypes = {
  alignLeft: propTypes.bool,
  columnLayoutMobile: propTypes.bool,
  caption: propTypes.node,
  srOnlyCaption: propTypes.bool,
  expandedContentMapper: propTypes.func,
  condensed: propTypes.bool,
  smallHeader: propTypes.bool,
  sort: propTypes.object,
  offset: propTypes.number,
  limit: propTypes.number,
  breakpoint: propTypes.oneOf(['sm', 'none']),
  data: propTypes.arrayOf(propTypes.object),
  columns: propTypes.arrayOf(propTypes.shape({
    header: propTypes.node.isRequired,
    key: propTypes.string.isRequired
  }).isRequired),
  rowRender: propTypes.func,
  headerRender: propTypes.func,
  footerRender: propTypes.func,
  className: propTypes.string
};
DefaultTable.defaultProps = {
  columns: [],
  data: [],
  offset: 0,
  limit: 0
};
var DefaultTable$1 = DefaultTable;

var pilNedIkon = createCommonjsModule(function (module, exports) {
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;


var PropTypes = propTypes;
var svg = react.createElement("svg", { viewBox: "0 0 200 200" },
    react.createElement("path", { d: "M2.7808,62.531,92.401,152.2c3.7342,3.7361,9.9578,3.7361,14.937,0l89.62-89.667c6.2236-6.2269,2.4894-17.435-7.4683-17.435h-179.24c-8.7131-1.248-13.692,9.961-7.4683,17.433z" }));
var Icon = function (_a) {
    var desc = _a.desc, title = _a.title; _a.iconName; var rest = __rest(_a, ["desc", "title", "iconName"]);
    return (react.createElement("svg", __assign({}, svg.props, rest),
        title &&
            react.createElement("title", null, title),
        desc &&
            react.createElement("desc", null, desc),
        svg.props.children));
};
Icon.propTypes = {
    desc: propTypes.string,
    title: propTypes.string,
    focusable: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(["true", "false", "auto", "undefined"]),
    ]),
    iconName: propTypes.string
};
Icon.displayName = 'PilNedIkon';
exports["default"] = Icon;
});

var PilNedIkon = /*@__PURE__*/getDefaultExportFromCjs(pilNedIkon);

var toStr$4 = Object.prototype.toString;

var isArguments$1 = function isArguments(value) {
	var str = toStr$4.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr$4.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

var keysShim$1;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has$1 = Object.prototype.hasOwnProperty;
	var toStr$3 = Object.prototype.toString;
	var isArgs = isArguments$1; // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has$1.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim$1 = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr$3.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr$3.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has$1.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has$1.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has$1.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
var implementation$3 = keysShim$1;

var slice$1 = Array.prototype.slice;


var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : implementation$3;

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArguments$1(object)) {
					return originalKeys(slice$1.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

var objectKeys = keysShim;

/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams$1 = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

var shams = function hasToStringTagShams() {
	return shams$1() && !!Symbol.toStringTag;
};

var origSymbol = typeof Symbol !== 'undefined' && Symbol;


var hasSymbols$2 = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return shams$1();
};

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr$2 = Object.prototype.toString;
var funcType = '[object Function]';

var implementation$2 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$2.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var functionBind = Function.prototype.bind || implementation$2;

var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);

var undefined$1;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError$2 = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
	try {
		$gOPD$1({}, '');
	} catch (e) {
		$gOPD$1 = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError$2();
};
var ThrowTypeError = $gOPD$1
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD$1(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols$1 = hasSymbols$2();

var getProto$1 = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto$1(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined$1 : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols$1 ? getProto$1([][Symbol.iterator]()) : undefined$1,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined$1 : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined$1 : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols$1 ? getProto$1(getProto$1([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto$1(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$1 ? undefined$1 : getProto$1(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols$1 ? getProto$1(''[Symbol.iterator]()) : undefined$1,
	'%Symbol%': hasSymbols$1 ? Symbol : undefined$1,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError$2,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined$1 : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto$1(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};



var $concat = functionBind.call(Function.call, Array.prototype.concat);
var $spliceApply = functionBind.call(Function.apply, Array.prototype.splice);
var $replace = functionBind.call(Function.call, String.prototype.replace);
var $strSlice = functionBind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (src(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (src(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError$2('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

var getIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError$2('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError$2('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (src(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError$2('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined$1;
			}
			if ($gOPD$1 && (i + 1) >= parts.length) {
				var desc = $gOPD$1(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = src(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

var callBind = createCommonjsModule(function (module) {




var $apply = getIntrinsic('%Function.prototype.apply%');
var $call = getIntrinsic('%Function.prototype.call%');
var $reflectApply = getIntrinsic('%Reflect.apply%', true) || functionBind.call($call, $apply);

var $gOPD = getIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = getIntrinsic('%Object.defineProperty%', true);
var $max = getIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(functionBind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(functionBind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}
});

var $indexOf = callBind(getIntrinsic('String.prototype.indexOf'));

var callBound = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = getIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

var hasToStringTag$2 = shams();


var $toString$1 = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag$2 && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString$1(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString$1(value) !== '[object Array]' &&
		$toString$1(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

var isArguments = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr$1 = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr$1.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors$2 = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty$1 = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors$2) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = objectKeys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty$1(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors$2;

var defineProperties_1 = defineProperties;

var numberIsNaN = function (value) {
	return value !== value;
};

var implementation$1 = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};

var polyfill$2 = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation$1;
};

var shim$1 = function shimObjectIs() {
	var polyfill = polyfill$2();
	defineProperties_1(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};

var polyfill$1 = callBind(polyfill$2(), Object);

defineProperties_1(polyfill$1, {
	getPolyfill: polyfill$2,
	implementation: implementation$1,
	shim: shim$1
});

var objectIs = polyfill$1;

var hasToStringTag$1 = shams();
var has;
var $exec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag$1) {
	has = callBound('Object.prototype.hasOwnProperty');
	$exec = callBound('RegExp.prototype.exec');
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var $toString = callBound('Object.prototype.toString');
var gOPD$1 = Object.getOwnPropertyDescriptor;
var regexClass = '[object RegExp]';

var isRegex = hasToStringTag$1
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		var descriptor = gOPD$1(value, 'lastIndex');
		var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			$exec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};

var $Object = Object;
var $TypeError$1 = TypeError;

var implementation = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError$1('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};

var supportsDescriptors$1 = defineProperties_1.supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

var polyfill = function getPolyfill() {
	if (!supportsDescriptors$1) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};

var supportsDescriptors = defineProperties_1.supportsDescriptors;

var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

var shim = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill$1 = polyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill$1) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill$1
		});
	}
	return polyfill$1;
};

var flagsBound = callBind(implementation);

defineProperties_1(flagsBound, {
	getPolyfill: polyfill,
	implementation: implementation,
	shim: shim
});

var regexp_prototype_flags = flagsBound;

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = shams();

var isDateObject = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? objectIs(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? objectIs(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && regexp_prototype_flags(a) === regexp_prototype_flags(b);
  }

  if (isDateObject(a) && isDateObject(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

var deepEqual_1 = deepEqual;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sortData = (function (columns, data, sortBy, descending) {
  var sortedData = _toConsumableArray(data);

  var compare = function compare(data1, data2) {
    if (!isNaN(data1[sortBy])) {
      return data1[sortBy] - data2[sortBy];
    }

    if (!data1[sortBy]) {
      return data2[sortBy] ? 1 : 0;
    }

    return data1[sortBy].localeCompare(data2[sortBy]);
  };

  var column = columns.find(function (col) {
    return col.key === sortBy;
  });
  var customCompare = column && typeof column.compare === 'function' ? column.compare : null;

  if (customCompare) {
    compare = function compare(data1, data2) {
      return customCompare(data1[sortBy], data2[sortBy]);
    };
  }

  sortedData.sort(compare);

  if (descending) {
    sortedData.reverse();
  }

  return sortedData;
});

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

var SortableTable = /*#__PURE__*/function (_Component) {
  _inherits(SortableTable, _Component);

  var _super = _createSuper(SortableTable);

  function SortableTable(props) {
    var _this;

    _classCallCheck(this, SortableTable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "sortTableData", memoizeOne(function (columns, data, sortBy, descending) {
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
      return !deepEqual_1(nextProps, this.props) || this.sortStateHasChanged(nextState);
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
        return /*#__PURE__*/react.createElement("span", {
          className: "ffe-sortable-table__header"
        });
      }

      if (column.notSortable) {
        return column.header;
      }

      return /*#__PURE__*/react.createElement("span", {
        tabIndex: "0",
        onKeyDown: function onKeyDown(event) {
          return _this3.handleKeyPress(column.key, event);
        },
        className: classnames('ffe-sortable-table__header', {
          'ffe-sortable-table__header--active': this.state.sortBy === column.key
        }),
        role: "button",
        onClick: this.tableHeaderClicked.bind(this, column.key)
      }, column.header, /*#__PURE__*/react.createElement(PilNedIkon, {
        className: classnames('icon', 'ffe-sortable-table__sort-arrow', {
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
      return /*#__PURE__*/react.createElement(Table$1, {
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
}(react.Component);

SortableTable.propTypes = {
  caption: propTypes.node,
  srOnlyCaption: propTypes.bool,
  expandedContentMapper: propTypes.func,
  offset: propTypes.number,
  limit: propTypes.number,
  columnLayoutMobile: propTypes.bool,
  condensed: propTypes.bool,
  smallHeader: propTypes.bool,
  alignLeft: propTypes.bool,
  breakpoint: propTypes.oneOf(['sm', 'none']),
  columns: propTypes.arrayOf(propTypes.object).isRequired,
  data: propTypes.arrayOf(propTypes.object).isRequired,
  sortBy: propTypes.string,
  descending: propTypes.bool,
  onSort: propTypes.func,
  rowRender: propTypes.func,
  headerRender: propTypes.func,
  footerRender: propTypes.func,
  className: propTypes.string
};
SortableTable.defaultProps = {
  descending: false,
  onSort: function onSort() {}
};
var SortableTable$1 = SortableTable;

var _excluded = ["sortable"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Table = function Table(props) {
  var sortable = props.sortable,
      rest = _objectWithoutProperties(props, _excluded);

  if (sortable) {
    return /*#__PURE__*/react.createElement(SortableTable$1, rest);
  }

  return /*#__PURE__*/react.createElement(DefaultTable$1, rest);
};

Table.propTypes = {
  caption: propTypes.node,

  /** Make the caption only visible for screen readers */
  srOnlyCaption: propTypes.bool,

  /** A mapping function that returns a renderable node that will be rendered for each expandable row */
  expandedContentMapper: propTypes.func,
  sortable: propTypes.bool,

  /** A string reference to a column key to set an initial sort of the table */
  sortBy: propTypes.string,

  /** Used in conjunction with sortBy */
  descending: propTypes.bool,

  /** When paginated, lets you set the number of rows to offset from the beginning */
  offset: propTypes.number,

  /** Limits the number of rows to show on one page. Decides whether or not to paginate your table */
  limit: propTypes.number,

  /** Makes your table condensed - for pages that show a lot of data */
  condensed: propTypes.bool,

  /** Set to true if you want the row headings to be narrower on smalls screens */
  smallHeader: propTypes.bool,

  /** Removes left cell padding from the first column */
  alignLeft: propTypes.bool,

  /** Show your table as a regular column based table on small devices */
  columnLayoutMobile: propTypes.bool,

  /** Decide if your table rows should break into a vertical view on small or no devices */
  breakpoint: propTypes.oneOf(['sm', 'none']),

  /**
   * Override rendering of rows with a prop
   * rowRender={(props, rowcontent, trprops, index)=>{return <tr {...trprops}>{rowcontent}</tr>}}
   */
  rowRender: propTypes.func,

  /**
   * Override rendering of headers with a prop
   * headerRender={(props, rowcontent, trprops) => {return <tr {...trprops}>{rowcontent}</tr>}}
   */
  headerRender: propTypes.func,

  /**
   * Override rendering of footer with a prop
   * footerRender={(props, rowcontent, trprops) => {return <tr {...trprops}>{rowcontent}</tr>}}
   */
  footerRender: propTypes.func,

  /**
   * An array of objects with keys equal to the columns array's key value, and value equal to whatever you
   * want in your cell. These are basically an array of rows
   **/
  data: propTypes.arrayOf(propTypes.shape({
    /** A unique ID for each row of data. Required for sorting */
    id: propTypes.oneOfType([propTypes.string, propTypes.number])
  })),

  /** An array of objects with a key describing your column, and a header describing that column */
  columns: propTypes.arrayOf(propTypes.shape({
    /** The column header. Required, but may be an empty string. */
    header: propTypes.node.isRequired,

    /** The column key used in the `data` array's objects */
    key: propTypes.string.isRequired,

    /** Content shown in the table footer */
    footer: propTypes.node,
    alignRight: propTypes.bool,
    alignTop: propTypes.bool,
    hideOnDesktop: propTypes.bool,
    hideOnTablet: propTypes.bool,
    hideOnSmallTablet: propTypes.bool,
    hideOnMobile: propTypes.bool,

    /** Custom comparator function for sorting this column */
    compare: propTypes.func,

    /** Disable column from sorting. Not needed if heading is an empty string */
    notSortable: propTypes.bool,
    cellRender: propTypes.func,
    columnHeaderRender: propTypes.func,
    columnFooterRender: propTypes.func
  }).isRequired),

  /** Class names set in addition to the ffe tables classes. */
  className: propTypes.string
};
var Table$1 = Table;

export { Table$1 as default };
