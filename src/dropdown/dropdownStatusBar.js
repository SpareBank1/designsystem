import React, { PropTypes } from 'react';
import KeyCode from '../util/keyCode';

const DropdownStatusBar = ({onDone, renderSelectionStatus, labelDoneButton}) => {

  const onKeyDown = (evt) => {
    if (evt.which === KeyCode.TAB && !evt.shiftKey) {
      onDone();
    }
  };

  return (
    <div className="nfe-account-selector__dropdown-statusbar">
      <div className="nfe-account-selector__selection-status">{renderSelectionStatus()}</div>
      <button
        type="button"
        className="ffe-primary-button nfe-account-selector__statusbar-button"
        tabIndex="0"
        onClick={onDone}
        onKeyDown={onKeyDown}
      >
        {labelDoneButton}
      </button>
    </div>
  );
};

DropdownStatusBar.propTypes = {
  onDone: PropTypes.func.isRequired,
  renderSelectionStatus: PropTypes.func.isRequired,
  labelDoneButton: PropTypes.string.isRequired,
};

export default DropdownStatusBar;
