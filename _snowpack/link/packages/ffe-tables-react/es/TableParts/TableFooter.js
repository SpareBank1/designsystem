import React from '../../../../../pkg/react.js';
import PropTypes from '../../../../../pkg/prop-types.js';
import TableCell from './TableCell.js';
import classNames from '../../../../../pkg/classnames.js';

var TableFooter = function TableFooter(_ref) {
  var columns = _ref.columns,
      footerRender = _ref.footerRender,
      dataWindow = _ref.dataWindow;
  var footerContent = columns.map(function (column, index) {
    if (column === null) {
      return /*#__PURE__*/React.createElement("td", {
        key: index
      });
    }

    var className = classNames({
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
        dataTh = React.Children.toArray(columnHeader.props.children)[0];
      }
    }

    var tdProps = {
      className: classNames('ffe-table__cell', {
        'ffe-table__cell--top': column.alignTop
      }, className),
      'data-th': dataTh,
      key: index
    };
    var spanProps = {
      className: classNames('ffe-table__content', {
        'ffe-table__content--text-right': column.alignRight
      })
    };

    if (typeof column.columnFooterRender === "function") {
      return column.columnFooterRender(column.footer, dataWindow, tdProps, spanProps, columns, index);
    }

    return /*#__PURE__*/React.createElement(TableCell, {
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
  var trDefault = /*#__PURE__*/React.createElement("tr", trProps);
  var footerRendered = typeof footerRender === "function" ? footerRender(trProps, columns) : trDefault;
  return /*#__PURE__*/React.createElement("tfoot", {
    className: "ffe-table__footer"
  }, footerRendered);
};

TableFooter.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    alignRight: PropTypes.bool,
    alignTop: PropTypes.bool,
    footer: PropTypes.any,
    header: PropTypes.node.isRequired,
    hideOnDesktop: PropTypes.bool,
    hideOnMobile: PropTypes.bool,
    hideOnSmallTablet: PropTypes.bool,
    hideOnTablet: PropTypes.bool
  })),
  footerRender: PropTypes.func,
  dataWindow: PropTypes.array
};
export default TableFooter;