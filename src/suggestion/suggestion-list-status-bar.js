import React from 'react';
import PropTypes from 'prop-types';
import {KeyCodes} from '../util/types';

const StatusBar = ({onDone, renderSelectionStatus, labelDoneButton, style}) => {

  const onKeyDown = (evt) => {
    if ((evt.which === KeyCodes.TAB && !evt.shiftKey) || evt.which === KeyCodes.ENTER) {
      onDone();
    }
  };

  return (
    <div className='ffe-account-selector__dropdown-statusbar' style={style}>
      <div className='ffe-account-selector__selection-status'>{renderSelectionStatus()}</div>
      <button
        type='button'
        className='ffe-primary-button ffe-account-selector__statusbar-button'
        tabIndex='0'
        onMouseDown={onDone}
        onKeyDown={onKeyDown}
      >
        {labelDoneButton}
      </button>
    </div>
  );
};

StatusBar.propTypes = {
  onDone: PropTypes.func.isRequired,
  renderSelectionStatus: PropTypes.func.isRequired,
  labelDoneButton: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
};

export default StatusBar;
