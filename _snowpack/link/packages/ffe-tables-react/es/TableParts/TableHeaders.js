function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../../../../pkg/react.js';
import PropTypes from '../../../../../pkg/prop-types.js';
import classNames from '../../../../../pkg/classnames.js';

var TableHeaders = function TableHeaders(_ref) {
  var columns = _ref.columns,
      headerRender = _ref.headerRender,
      dataWindow = _ref.dataWindow;
  var headerContent = columns.map(function (column, index) {
    if (column === null) {
      return /*#__PURE__*/React.createElement("th", {
        key: index
      });
    }

    var thProps = {
      key: index,
      className: classNames('ffe-table__heading', {
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
      className: classNames('ffe-table__content', {
        'ffe-table__content--text-right': column.alignRight
      })
    };
    var thContentDefault = /*#__PURE__*/React.createElement("span", spanProps, column.header);

    if (typeof column.columnHeaderRender === "function") {
      return column.columnHeaderRender(column.header, dataWindow, spanProps, thProps, columns, index);
    }

    return /*#__PURE__*/React.createElement("th", _extends({
      key: thProps.key
    }, thProps), thContentDefault);
  });
  var trProps = {
    className: "ffe-table__row",
    children: headerContent
  };
  var trDefault = /*#__PURE__*/React.createElement("tr", trProps);
  var headerRendered = typeof headerRender === "function" ? headerRender(trProps, columns) : trDefault;
  return /*#__PURE__*/React.createElement("thead", {
    className: "ffe-table__head"
  }, headerRendered);
};

TableHeaders.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape({
    alignRight: PropTypes.bool,
    header: PropTypes.node.isRequired,
    hideOnDesktop: PropTypes.bool,
    hideOnMobile: PropTypes.bool,
    hideOnSmallTablet: PropTypes.bool,
    hideOnTablet: PropTypes.bool,
    key: PropTypes.string.isRequired
  })),
  headerRender: PropTypes.func,
  dataWindow: PropTypes.array
};
export default TableHeaders;