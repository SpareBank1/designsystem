import React, { PropTypes } from 'react';
import classNames from 'classnames';
import KalenderIkon from 'ffe-icons-react/kalender-ikon';

export default function FFEDateInput(props) {
  const givenInputProps = props.inputProps || {};

  const inputProps = {
    ...givenInputProps,
    className: classNames('ffe-dateinput__field', 'ffe-input-field', givenInputProps.className),
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
