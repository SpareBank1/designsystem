import React from '../../../../pkg/react.js';
import { node } from '../../../../pkg/prop-types.js';
import { Grid } from '../../ffe-grid-react/es/index.js';

var DetailList = function DetailList(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Grid, null, children);
};

DetailList.propTypes = {
  /**
   * A set of `Detail` components where each will be rendered as a row item
   */
  children: node.isRequired
};
export default DetailList;