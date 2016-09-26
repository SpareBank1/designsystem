import React, { PropTypes } from 'react';
import KeyCode from '../util/keyCode';
import i18n from '../i18n/i18n';

const DropdownStatusbar = ({onDone, renderSelectionStatus, locale}) => {

  const onKeyDown = (evt) => {
    if (evt.which === KeyCode.TAB && !evt.shiftKey) {
      onDone();
    }
  };

  return (
    <div className="nfe-account-selector__dropdown-statusbar">
      <div className="nfe-account-selector__selection-status">{renderSelectionStatus()}</div>
      <button
        className="ffe-primary-button nfe-account-selector__statusbar-button"
        tabIndex="0"
        onClick={onDone}
        onKeyDown={onKeyDown}
      >
        {i18n[locale].DROPDOWN_MULTISELECT_DONE}
      </button>
    </div>
  );
};

DropdownStatusbar.propTypes = {
  onDone: PropTypes.func.isRequired,
  renderSelectionStatus: PropTypes.func.isRequired,
  locale: PropTypes.oneOf(["nb", "nn", "en"]).isRequired,
};

export default DropdownStatusbar;
