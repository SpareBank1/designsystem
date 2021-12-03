import React, { Fragment } from '../../../../pkg/react.js';
import { node, string } from '../../../../pkg/prop-types.js';
import { GridCol, GridRow } from '../../ffe-grid-react/es/index.js';
export default function Detail(props) {
  var children = props.children,
      label = props.label;
  var childCount = React.Children.count(children);
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(GridRow, null, /*#__PURE__*/React.createElement(GridCol, {
    sm: 12,
    md: {
      cols: 8,
      offset: 2
    },
    lg: {
      cols: 2,
      offset: 2
    },
    className: "ffe-details-list-react__content",
    bottomPadding: false
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-h6 ffe-h6--no-margin"
  }, label)), React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.cloneElement(child, {
      childCount: childCount,
      index: index
    });
  })), /*#__PURE__*/React.createElement(GridRow, null, /*#__PURE__*/React.createElement(GridCol, {
    sm: 12,
    md: {
      cols: 8,
      offset: 2
    },
    bottomPadding: false
  }, /*#__PURE__*/React.createElement("hr", {
    className: "ffe-divider-line"
  }))));
}
Detail.propTypes = {
  /**
   * A set of `DetailsContent` components to render for this row
   */
  children: node.isRequired,

  /**
   * A label for the data
   */
  label: string.isRequired
};