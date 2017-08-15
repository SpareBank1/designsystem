import React, { Component } from 'react';
import { bool, func, string, shape } from 'prop-types';
import classNames from 'classnames';
import KalenderIkon from 'ffe-icons-react/kalender-ikon';

export default class FFEDateInput extends Component {

  focus() {
    this._input.focus();
  }

  render() {
    const {
      inputProps = {},
    } = this.props;

    return (
      <div className="ffe-dateinput">
        <input
          type="text"
          maxLength="10"
          value={ this.props.value }
          onFocus={ this.props.onFocus }
          onBlur={ this.props.onBlur }
          onChange={ this.props.onChange }
          onKeyPress={ this.props.onKeyDown }
          onKeyDown={ this.props.onKeyDown }
          ref={ c => { this._input = c; } }
          aria-invalid={ this.props.ariaInvalid }
          { ...inputProps }
          className={ classNames(
            'ffe-dateinput__field',
            'ffe-input-field',
            givenInputProps.className
          ) }
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
