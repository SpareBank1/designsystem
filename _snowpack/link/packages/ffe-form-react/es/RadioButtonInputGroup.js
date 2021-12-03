var _excluded = ["aria-invalid", "children", "className", "extraMargin", "description", "fieldMessage", "inline", "label", "name", "selectedValue", "tooltip"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../../../pkg/react.js';
import { bool, func, oneOfType, oneOf, node, string, number } from '../../../../pkg/prop-types.js';
import classNames from '../../../../pkg/classnames.js';
import ErrorFieldMessage from './ErrorFieldMessage.js';
import Tooltip from './Tooltip.js';

var RadioButtonInputGroup = function RadioButtonInputGroup(props) {
  var ariaInvalid = props['aria-invalid'],
      children = props.children,
      className = props.className,
      extraMargin = props.extraMargin,
      description = props.description,
      fieldMessage = props.fieldMessage,
      inline = props.inline,
      label = props.label,
      name = props.name,
      selectedValue = props.selectedValue,
      tooltip = props.tooltip,
      rest = _objectWithoutProperties(props, _excluded);

  if (tooltip && description) {
    throw new Error('Don\'t use both "tooltip" and "description" on an <RadioButtonInputGroup />, pick one of them');
  }

  var buttonProps = {
    'aria-invalid': ariaInvalid || String(!!fieldMessage),
    inline: inline,
    name: name,
    onChange:
    /* istanbul ignore next */
    function onChange(f) {
      return f;
    },
    selectedValue: selectedValue
  };
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    className: classNames('ffe-fieldset', 'ffe-input-group', {
      'ffe-fieldset--no-extra-margin': !extraMargin
    }, {
      'ffe-fieldset--error': !!fieldMessage
    }, className)
  }, rest), label && /*#__PURE__*/React.createElement("legend", {
    className: classNames('ffe-form-label', 'ffe-form-label--block')
  }, label, typeof tooltip === 'string' && /*#__PURE__*/React.createElement(Tooltip, null, tooltip), /*#__PURE__*/React.isValidElement(tooltip) && tooltip), typeof description === 'string' && /*#__PURE__*/React.createElement("div", {
    className: "ffe-small-text"
  }, description), /*#__PURE__*/React.isValidElement(description) && description, children(_objectSpread({}, buttonProps)), typeof fieldMessage === 'string' && /*#__PURE__*/React.createElement(ErrorFieldMessage, {
    element: "p"
  }, fieldMessage), /*#__PURE__*/React.isValidElement(fieldMessage) && fieldMessage);
};

RadioButtonInputGroup.propTypes = {
  /**
   * Indicates whether the radio buttons inside this radio button group is
   * invalid or not. Propagated to all children.
   * */
  'aria-invalid': oneOf(['true', 'false']),

  /**
   * Function receiving props relevant to each radio button as an object
   * argument. Expected to return a set of radio buttons, which should get
   * these properties applied to them.
   * */
  children: func.isRequired,

  /** Additional class names applied to the fieldset */
  className: string,

  /** To just render a static, always visible tooltip, use this. */
  description: oneOfType([node, string]),

  /** Reserve space for showing `fieldMessage`s so content below don't move
   *  vertically if an errormessage shows up. Note that this will only reserve
   *  space for one line of content, so keep messages short.
   */
  extraMargin: bool,

  /** String or ErrorFieldMessage component with message */
  fieldMessage: oneOfType([node, string]),

  /**
   * Indicates whether the radio buttons inside this radio button group is
   * rendered inline or as a block.
   * */
  inline: bool,

  /**
   * The text describing the radio button set. Note that if you don't use this
   * prop but provide your own label you should make sure your solution passes
   * acessibility validation using a tool such as aXe DevTools.
   */
  label: oneOfType([node, string]),

  /** The name of the radio button, required to avoid missing name */
  name: string.isRequired,

  /** Change handler, receives value of selected radio button */
  onChange: func,

  /** The currently selected value */
  selectedValue: oneOfType([bool, string, number]),

  /**
   * String or Tooltip component with further detail about the radio button
   * set
   * */
  tooltip: oneOfType([node, string])
};
RadioButtonInputGroup.defaultProps = {
  extraMargin: true
};
export default RadioButtonInputGroup;