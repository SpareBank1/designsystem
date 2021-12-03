var _excluded = ["className", "leftLabel", "leftValue", "leftInnerRef", "rightLabel", "rightValue", "rightInnerRef", "condensed", "aria-invalid"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment } from '../../../../pkg/react.js';
import { bool, oneOf, oneOfType, string, number, func, object, shape } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import BaseRadioButton from './BaseRadioButton.js';

var RadioSwitch = function RadioSwitch(props) {
  var className = props.className,
      leftLabel = props.leftLabel,
      leftValue = props.leftValue,
      leftInnerRef = props.leftInnerRef,
      rightLabel = props.rightLabel,
      rightValue = props.rightValue,
      rightInnerRef = props.rightInnerRef,
      condensed = props.condensed,
      ariaInvalid = props['aria-invalid'],
      rest = _objectWithoutProperties(props, _excluded);

  var noneSelected = [null, undefined, ''].includes(props.selectedValue);
  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(BaseRadioButton, _extends({
    className: classNames('ffe-radio-switch', className, {
      'ffe-radio-switch--condensed': condensed
    }),
    value: leftValue,
    innerRef: leftInnerRef,
    "aria-invalid": String(ariaInvalid === 'true' && (props.selectedValue === leftValue || noneSelected))
  }, rest), leftLabel), /*#__PURE__*/React.createElement(BaseRadioButton, _extends({
    className: classNames('ffe-radio-switch', className, {
      'ffe-radio-switch--condensed': condensed
    }),
    value: rightValue,
    innerRef: rightInnerRef,
    "aria-invalid": String(ariaInvalid === 'true' && (props.selectedValue === rightValue || noneSelected))
  }, rest), rightLabel));
};

RadioSwitch.propTypes = {
  /** Additional class names applied to both radio buttons */
  className: string,

  /** The label of the choice to the left */
  leftLabel: string.isRequired,

  /** The value of the choice to the left */
  leftValue: oneOfType([bool, string, number]).isRequired,

  /** Ref-setting function, or ref created by useRef, passed to the input element */
  leftInnerRef: oneOfType([func, shape({
    current: object
  })]),

  /** The label of the choice to the right */
  rightLabel: string.isRequired,

  /** The value of the choice to the right */
  rightValue: oneOfType([bool, string, number]).isRequired,

  /** Ref-setting function, or ref created by useRef, passed to the input element */
  rightInnerRef: oneOfType([func, shape({
    current: object
  })]),

  /** The selected value of the radio button set */
  selectedValue: oneOfType([bool, string, number]),

  /** Condensed modifier. Use in condensed designs */
  condensed: bool,

  /**
   * Indicates whether the radio buttons inside this radio button group is
   * invalid or not. Propagated to all children.
   * */
  'aria-invalid': oneOf(['true', 'false'])
};
export default RadioSwitch;