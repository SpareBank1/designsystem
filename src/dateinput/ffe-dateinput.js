import React, { PropTypes } from 'react';
import KalenderIkon from 'ffe-icons-react/kalender-ikon';

function FFEDateInput(props) {
  const defaultProps = props.inputProps || {};
  const defaultClassName = defaultProps.className || '';
  const inputProps = { ...defaultProps,
    className: `ffe-dateinput__field ffe-input-field ${defaultClassName}`,
  };

  return (
    <div className="ffe-dateinput">
      <input
        type="text"
        value={ props.value }
        onFocus={ props.onFocus }
        onChange={ props.onChange }
        onKeyPress={ props.onKeyDown }
        { ...inputProps }
      />
      <KalenderIkon className="ffe-dateinput__icon" />
    </div>
  );
}

FFEDateInput.propTypes = {
  onFocus: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  value: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
};

export default FFEDateInput;
