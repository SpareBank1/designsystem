function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from '../../../../../pkg/react.js';
import PropTypes from '../../../../../pkg/prop-types.js';
import classNames from '../../../../../pkg/classnames.js';
import TableCell from './TableCell.js';

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
    return /*#__PURE__*/React.createElement(TableCell, {
      alignRight: column.alignRight,
      alignTop: column.alignTop,
      columnHeader: column.header,
      key: index,
      tdClasses: classNames({
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

  var trprops = _objectSpread(_objectSpread({
    className: classNames('ffe-table__row', trClasses)
  }, expandableProps), {}, {
    onClick: onClick,
    children: rowContent
  });

  if (typeof rowRender === 'function') {
    return rowRender(trprops, props, rowIndex);
  }

  return /*#__PURE__*/React.createElement("tr", trprops, rowContent);
};

TableRow.propTypes = {
  cells: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    alignRight: PropTypes.bool,
    alignTop: PropTypes.bool,
    header: PropTypes.any,
    hideOnDesktop: PropTypes.bool,
    hideOnMobile: PropTypes.bool,
    hideOnSmallTablet: PropTypes.bool,
    hideOnTablet: PropTypes.bool,
    key: PropTypes.string,
    cellRender: PropTypes.func
  })).isRequired,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool,
  onClick: PropTypes.func,
  rowRender: PropTypes.func,
  headerRender: PropTypes.func,
  footerRender: PropTypes.func,
  onKeyDown: PropTypes.func,
  trClasses: PropTypes.string,
  rowIndex: PropTypes.number
};
export default TableRow;