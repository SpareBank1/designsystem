import React, { Component } from 'react';
import { bool, func, string, shape } from 'prop-types';
import classNames from 'classnames';
import KalenderIkon from 'ffe-icons-react/kalender-ikon';

export default class FFEDateInput extends Component {

  focus() {
    this._input.focus();
  }

  inputClassNames(extraClassNames) {
    return classNames(
      'ffe-dateinput__field',
      'ffe-input-field',
      extraClassNames
    );
  }

  render() {
    const {
      ariaInvalid,
      inputProps = {},
      onBlur,
      onChange,
      onFocus,
      onKeyDown,
      value,
    } = this.props;

    return (
      <div className="ffe-dateinput">
        <input
          aria-invalid={ ariaInvalid }
          maxLength="10"
          onFocus={ onFocus }
          onBlur={ onBlur }
          onChange={ onChange }
          onKeyPress={ onKeyDown }
          onKeyDown={ onKeyDown }
          ref={ c => { this._input = c; } }
          value={ value }
          { ...inputProps }
          className={ this.inputClassNames(inputProps.className) }
        />
        <KalenderIkon className="ffe-dateinput__icon" />
      </div>
    );
  }
}

FFEDateInput.propTypes = {
  ariaInvalid: bool,
  inputProps: shape({
    className: string,
  }),
  onBlur: func,
  onChange: func.isRequired,
  onFocus: func,
  onKeyDown: func,
  value: string.isRequired,
};
