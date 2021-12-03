/* Because we are missing aria-controls (http://www.heydonworks.com/article/aria-controls-is-poop): */

/* eslint jsx-a11y/role-has-required-aria-props:0 */
import React from '../../../../../../pkg/react.js';
import { func, string, bool, number } from '../../../../../../pkg/prop-types.js';
import { KryssIkon, ChevronIkon } from '../../../../ffe-icons-react/es/index.js';
import classNames from '../../../../../../pkg/classnames.js';
import txt from '../../i18n/i18n.js';
import { Locale } from '../../util/types.js';

var InputField = function InputField(props) {
  var onKeyDown = props.onKeyDown,
      id = props.id,
      placeholder = props.placeholder,
      isSuggestionsShowing = props.isSuggestionsShowing,
      ariaInvalid = props.ariaInvalid,
      onClick = props.onClick,
      inputFieldRef = props.inputFieldRef,
      highlightedIndex = props.highlightedIndex,
      suggestionListId = props.suggestionListId,
      name = props.name,
      readOnly = props.readOnly,
      locale = props.locale,
      value = props.value,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onChange = props.onChange,
      onReset = props.onReset;

  var handleChange = function handleChange(_ref) {
    var newValue = _ref.target.value;
    return onChange(newValue);
  };

  var handleReset = function handleReset(e) {
    e.preventDefault();
    onReset();
  };

  var onExpandOrCollapse = function onExpandOrCollapse(e) {
    e.preventDefault();

    if (isSuggestionsShowing) {
      onBlur();
    } else {
      e.currentTarget.previousElementSibling.focus();
      onFocus();
    }
  };

  var showReset = !readOnly && value.length > 0;
  return /*#__PURE__*/React.createElement("div", {
    role: "combobox",
    "aria-expanded": isSuggestionsShowing,
    onFocus: onFocus,
    onBlur: onBlur,
    "aria-activedescendant": highlightedIndex > -1 ? "suggestion-item-".concat(highlightedIndex) : null,
    "aria-owns": suggestionListId
  }, /*#__PURE__*/React.createElement("input", {
    className: "ffe-input-field ffe-base-selector__input-field",
    onKeyDown: onKeyDown,
    autoComplete: "off",
    value: value,
    id: id,
    placeholder: placeholder,
    ref: inputFieldRef,
    "aria-invalid": ariaInvalid,
    "aria-autocomplete": "list",
    name: name,
    onClick: onClick,
    onChange: handleChange,
    readOnly: readOnly
  }), showReset && /*#__PURE__*/React.createElement("button", {
    className: "ffe-base-selector__reset-button",
    onMouseDown: handleReset,
    tabIndex: -1,
    type: "button",
    "aria-label": txt[locale].RESET_SEARCH
  }, /*#__PURE__*/React.createElement(KryssIkon, {
    className: "ffe-base-selector__reset-button-icon"
  })), /*#__PURE__*/React.createElement("button", {
    className: "ffe-base-selector__expand-button",
    onMouseDown: onExpandOrCollapse,
    tabIndex: -1,
    type: "button",
    "aria-label": isSuggestionsShowing ? txt[locale].ACCOUNTSLIST_CLOSE : txt[locale].ACCOUNTSLIST_OPEN
  }, /*#__PURE__*/React.createElement(ChevronIkon, {
    className: classNames('ffe-base-selector__expand-button-icon ', {
      'ffe-base-selector__expand-button-icon--invalid': ariaInvalid
    })
  })));
};

InputField.propTypes = {
  onChange: func.isRequired,
  onKeyDown: func.isRequired,
  value: string.isRequired,
  onReset: func.isRequired,
  isSuggestionsShowing: bool.isRequired,
  id: string.isRequired,
  readOnly: bool,
  placeholder: string,
  onBlur: func,
  onFocus: func,
  onClick: func,
  ariaInvalid: bool,
  inputFieldRef: func,
  highlightedIndex: number,
  suggestionListId: string,
  name: string,
  locale: Locale.isRequired
};
InputField.defaultProps = {
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  inputFieldRef: function inputFieldRef() {},
  ariaInvalid: false,
  readOnly: false
};
export default InputField;