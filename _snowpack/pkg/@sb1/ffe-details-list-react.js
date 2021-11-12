import { r as react } from '../common/index-09a9c4ff.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import { G as Grid, a as GridRow, b as GridCol } from '../common/GridCol-bc3c4fd1.js';
import { c as classnames } from '../common/index-5100710e.js';
import '../common/_commonjsHelpers-4f955397.js';

var DetailList = function DetailList(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react.createElement(Grid, null, children);
};

DetailList.propTypes = {
  /**
   * A set of `Detail` components where each will be rendered as a row item
   */
  children: propTypes.node.isRequired
};
var DetailList$1 = DetailList;

function Detail(props) {
  var children = props.children,
      label = props.label;
  var childCount = react.Children.count(children);
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(GridRow, null, /*#__PURE__*/react.createElement(GridCol, {
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
  }, /*#__PURE__*/react.createElement("div", {
    className: "ffe-h6 ffe-h6--no-margin"
  }, label)), react.Children.map(children, function (child, index) {
    return /*#__PURE__*/react.cloneElement(child, {
      childCount: childCount,
      index: index
    });
  })), /*#__PURE__*/react.createElement(GridRow, null, /*#__PURE__*/react.createElement(GridCol, {
    sm: 12,
    md: {
      cols: 8,
      offset: 2
    },
    bottomPadding: false
  }, /*#__PURE__*/react.createElement("hr", {
    className: "ffe-divider-line"
  }))));
}
Detail.propTypes = {
  /**
   * A set of `DetailsContent` components to render for this row
   */
  children: propTypes.node.isRequired,

  /**
   * A label for the data
   */
  label: propTypes.string.isRequired
};

var _excluded = ["childCount", "children", "index", "className", "cta"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var getColCount = function getColCount(total, current) {
  if (total === 1) {
    return 7;
  }

  if (total < 3 && current === total - 1) {
    return 4;
  }

  return 2;
};

function DetailContent(props) {
  var childCount = props.childCount,
      children = props.children,
      index = props.index,
      className = props.className,
      cta = props.cta,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react.createElement(GridCol, _extends({
    className: classnames(className, 'ffe-details-list-react__content', {
      'ffe-details-list-react__content--action': cta
    }),
    sm: 12,
    md: {
      cols: 8,
      offset: 2
    },
    lg: {
      cols: getColCount(childCount, index),
      offset: 0
    },
    bottomPadding: false
  }, rest), children);
}
DetailContent.propTypes = {
  /**
   * Internal prop used for knowing the total amount of columns, provided by `Detail`
   * @ignore
   */
  childCount: propTypes.number,

  /**
   * The contents of the column
   */
  children: propTypes.node.isRequired,

  /**
   * Internal prop used for knowing which column is being rendered, provided by `Detail`
   * @ignore
   */
  index: propTypes.number,

  /**
   * Any CSS classes that should be included on the rendered content
   */
  className: propTypes.string,

  /**
   * Indicate if this should be rendered as a call to action and moved to the end of the row
   * @ignore
   */
  cta: propTypes.bool
};

export { Detail, DetailContent, DetailList$1 as DetailList };
