var _excluded = ["inputId", "children", "className", "extraMargin", "description", "label", "fieldMessage", "tooltip", "onTooltipToggle", "labelId"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState } from '../../../../pkg/react.js';
import { bool, func, node, oneOfType, string } from '../../../../pkg/prop-types.js';
import { v4 as uuid } from '../../../../pkg/uuid.js';
import Tooltip from './Tooltip.js';
import Label from './Label.js';
import classNames from '../../../../pkg/classnames.js';
import ErrorFieldMessage from './ErrorFieldMessage.js';

var InputGroup = function InputGroup(_ref) {
  var inputId = _ref.inputId,
      children = _ref.children,
      className = _ref.className,
      _ref$extraMargin = _ref.extraMargin,
      extraMargin = _ref$extraMargin === void 0 ? true : _ref$extraMargin,
      description = _ref.description,
      label = _ref.label,
      fieldMessage = _ref.fieldMessage,
      tooltip = _ref.tooltip,
      onTooltipToggle = _ref.onTooltipToggle,
      labelId = _ref.labelId,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(inputId ? inputId : "input-".concat(uuid())),
      _useState2 = _slicedToArray(_useState, 1),
      id = _useState2[0];

  var descriptionId = description ? "".concat(id, "-description") : undefined;
  var fieldMessageReturn = typeof fieldMessage === 'function' ? fieldMessage("".concat(id, "-fieldmessage")) : null;

  if (React.Children.count(children) > 1) {
    throw new Error('This element does not support more than one child. If you need more than one element inside your ' + 'InputGroup, please use the function-as-a-child pattern outlined in the documentation.');
  }

  var getFieldMessageId = function getFieldMessageId() {
    var _fieldMessage$props;

    if (fieldMessage !== null && fieldMessage !== void 0 && (_fieldMessage$props = fieldMessage.props) !== null && _fieldMessage$props !== void 0 && _fieldMessage$props.id) {
      return fieldMessage.props.id;
    } else if (typeof fieldMessage === 'string' || fieldMessageReturn) {
      return "".concat(id, "-fieldmessage");
    }
  };

  var fieldMessageId = getFieldMessageId();

  if (onTooltipToggle && typeof tooltip !== 'boolean' && typeof tooltip !== 'string') {
    throw new Error('Only use the "onTooltipToggle" prop if you\'re not sending a component of type ' + '<Tooltip /> in the "tooltip" prop. If you are, use "onClick" on that component instead');
  }

  if (tooltip && description) {
    throw new Error('Don\'t use both "tooltip" and "description" on an <InputGroup />, pick one of them');
  }

  var isInvalid = !!fieldMessage && (typeof fieldMessage === 'string' || fieldMessage.type === ErrorFieldMessage || !!fieldMessageReturn);
  var hasMessage = !!fieldMessage;
  var ariaDescribedBy = "".concat(fieldMessageId || '', " ").concat(descriptionId || '').trim() || undefined;
  var extraProps = {
    id: id,
    'aria-invalid': String(isInvalid),
    'aria-describedby': ariaDescribedBy
  };
  var modifiedChildren = typeof children === 'function' ? children(extraProps) : /*#__PURE__*/React.cloneElement(children, extraProps);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('ffe-input-group', {
      'ffe-input-group--no-extra-margin': !extraMargin
    }, {
      'ffe-input-group--message': hasMessage
    }, className)
  }, rest), typeof label === 'string' && /*#__PURE__*/React.createElement(Label, {
    htmlFor: id,
    id: labelId
  }, label), /*#__PURE__*/React.isValidElement(label) && /*#__PURE__*/React.cloneElement(label, {
    htmlFor: id,
    id: labelId
  }), typeof tooltip === 'string' && /*#__PURE__*/React.createElement(Tooltip, {
    onClick: onTooltipToggle
  }, tooltip), tooltip === true && /*#__PURE__*/React.createElement(Tooltip, {
    onClick: onTooltipToggle
  }), /*#__PURE__*/React.isValidElement(tooltip) && tooltip, description && /*#__PURE__*/React.createElement("div", {
    className: "ffe-small-text",
    id: descriptionId
  }, description), modifiedChildren, typeof fieldMessage === 'string' && /*#__PURE__*/React.createElement(ErrorFieldMessage, {
    element: "p",
    id: fieldMessageId
  }, fieldMessage), /*#__PURE__*/React.isValidElement(fieldMessage) && /*#__PURE__*/React.cloneElement(fieldMessage, {
    id: fieldMessageId
  }), fieldMessageReturn);
};

InputGroup.propTypes = {
  /** The id that will be used on the input child if you don't want a generated one */
  inputId: string,

  /** The id used on the label in this component. Could be necessary if your component needs a aria-labelledby. */
  labelId: string,

  /** Unless you only have one element in your `InputGroup` you will have to use the function-as-a-child pattern. */
  children: oneOfType([func, node]).isRequired,
  className: string,

  /** Reserve space for showing `fieldMessage`s so content below don't move
   *  vertically if an errormessage shows up. Note that this will only reserve
   *  space for one line of content, so keep messages short.
   */
  extraMargin: bool,

  /** Use the ErrorFieldMessage component if you need more flexibility in how the content is rendered. */
  fieldMessage: oneOfType([string, node, func]),

  /** To just render a static, always visible tooltip, use this. */
  description: string,

  /** Use the Label component if you need more flexibility in how the content is rendered. */
  label: oneOfType([node, string]),
  onTooltipToggle: func,

  /** Use the Tooltip component if you need more flexibility in how the content is rendered. */
  tooltip: oneOfType([bool, node])
};
export default InputGroup;