import React from '../../../../../pkg/react.js';
import PropTypes from '../../../../../pkg/prop-types.js';
import classNames from '../../../../../pkg/classnames.js';

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
      dataTh = React.Children.toArray(columnHeader.props.children)[0];
    }
  }

  return /*#__PURE__*/React.createElement("td", {
    className: classNames('ffe-table__cell', {
      'ffe-table__cell--top': alignTop
    }, tdClasses),
    "data-th": dataTh
  }, /*#__PURE__*/React.createElement("span", {
    className: classNames('ffe-table__content', {
      'ffe-table__content--text-right': alignRight
    }, contentClasses)
  }, children));
};

TableCell.propTypes = {
  alignRight: PropTypes.bool,
  alignTop: PropTypes.bool,
  children: PropTypes.any,
  columnHeader: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  contentClasses: PropTypes.string,
  tdClasses: PropTypes.string
};
export default TableCell;