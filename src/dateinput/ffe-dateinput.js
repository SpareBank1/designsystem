import React, { PropTypes } from 'react';
import classNames from 'classnames';
import KalenderIkon from 'ffe-icons-react/kalender-ikon';

export default class FFEDateInput extends React.Component {

  focus() {
    this._input.focus();
  }

  render() {
    const givenInputProps = this.props.inputProps || {};
    const inputProps = {
      ...givenInputProps,
      className: classNames('ffe-dateinput__field', 'ffe-input-field', givenInputProps.className),
    };
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
        />
        <KalenderIkon className="ffe-dateinput__icon" />
      </div>
    );
  }
}

FFEDateInput.propTypes = {
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  value: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  ariaInvalid: PropTypes.bool,
};
