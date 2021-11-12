export { G as Grid, b as GridCol, a as GridRow } from '../common/GridCol-bc3c4fd1.js';
import { r as react } from '../common/index-09a9c4ff.js';
import { c as classnames } from '../common/index-5100710e.js';
import { p as propTypes } from '../common/index-8de1816d.js';
import '../common/_commonjsHelpers-4f955397.js';

var _excluded = ["className", "element"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function InlineGrid(_ref) {
  var className = _ref.className,
      Element = _ref.element,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react.createElement(Element, _extends({
    className: classnames(className, 'ffe-grid', 'ffe-grid--inline')
  }, rest));
}
InlineGrid.propTypes = {
  /** Any children of a InlineGrid must be a GridRow */
  children: propTypes.node,

  /** Any extra classes are attached to the root node, in addition to ffe-grid classes */
  className: propTypes.string,

  /** Specify the DOM element being used to create the Grid */
  element: propTypes.string
};
InlineGrid.defaultProps = {
  element: 'div'
};

export { InlineGrid };
