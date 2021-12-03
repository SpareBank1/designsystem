import React from '../../../../../../pkg/react.js';
import { func, string, object } from '../../../../../../pkg/prop-types.js';
import { KeyCodes } from '../../util/types.js';

var StatusBar = function StatusBar(_ref) {
  var onDone = _ref.onDone,
      renderSelectionStatus = _ref.renderSelectionStatus,
      labelDoneButton = _ref.labelDoneButton,
      style = _ref.style;

  var onKeyDown = function onKeyDown(evt) {
    if (evt.which === KeyCodes.TAB && !evt.shiftKey || evt.which === KeyCodes.ENTER) {
      onDone();
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-selector-multi__dropdown-statusbar",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ffe-account-selector-multi__selection-status"
  }, renderSelectionStatus()), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ffe-button ffe-button--primary",
    tabIndex: "0",
    onMouseDown: onDone,
    onKeyDown: onKeyDown
  }, labelDoneButton));
};

StatusBar.propTypes = {
  onDone: func.isRequired,
  renderSelectionStatus: func.isRequired,
  labelDoneButton: string.isRequired,
  style: object.isRequired
};
export default StatusBar;