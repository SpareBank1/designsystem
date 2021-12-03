var _excluded = ["isExpanded"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, func, node, oneOfType, object, shape } from '../../../../pkg/prop-types.js';
import ChevronIkon from '../../ffe-icons-react/lib/chevron-ikon.js';
import InlineButton from './InlineBaseButton.js';

var InlineExpandButton = function InlineExpandButton(props) {
  var isExpanded = props.isExpanded,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/React.createElement(InlineButton, _extends({
    buttonType: "expand",
    type: "button",
    rightIcon: /*#__PURE__*/React.createElement(ChevronIkon, {
      style: {
        marginLeft: '8px',
        transform: isExpanded ? 'rotateZ(180deg)' : 'none'
      }
    })
  }, rest));
};

InlineExpandButton.propTypes = {
  /** Text that should reflect the isExpanded state. */
  children: node,

  /** Ref-setting function, or ref created by useRef, passed to the button element */
  innerRef: oneOfType([func, shape({
    current: object
  })]),

  /** When true it will indicate the button is in its open state */
  isExpanded: bool.isRequired,

  /** Listen for clicks to toggle the isExpanded state. */
  onClick: func.isRequired
};
export default InlineExpandButton;