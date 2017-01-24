import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import ChevronIkon from 'ffe-icons-react/chevron-ikon';
import KryssIkon from 'ffe-icons-react/kryss-ikon';

import KeyCode from '../util/keyCode';

class BaseSelector extends Component {

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.inputClassName = this.inputClassName.bind(this);
    this.dropdownIconClassName = this.dropdownIconClassName.bind(this);
  }

  onKeyDown({which, altKey}) {
    const {onShowSuggestions, onHideSuggestions} = this.props;
    if (which === KeyCode.DOWN && altKey) {
      return onShowSuggestions();
    }

    if (which === KeyCode.UP && altKey) {
      onHideSuggestions();
    }
  }

  inputClassName() {
    return classNames('ffe-input-field nfe-account-selector__search',
      {'nfe-account-selector__search--open': this.props.isSuggestionsShowing}
    );
  }

  dropdownIconClassName() {
    return classNames('nfe-account-selector__dropdown-icon',
      {'nfe-account-selector__dropdown-icon--reverse': this.props.isSuggestionsShowing}
    );
  }

  render() {
    const {
      onFocus,
      onChange,
      value,
      id,
      placeholder,
      isSuggestionsShowing,
      ariaInvalid,
      resetLabel,
      onBlur,
      onReset
    } = this.props;

    return (
      <div
        className='nfe-account-selector'
        role='combobox'
        aria-expanded={ isSuggestionsShowing }
      >
        <input
          onFocus={ onFocus }
          onChange={ onChange }
          onBlur={ onBlur }
          className={ this.inputClassName() }
          onKeyDown={ this.onKeyDown }
          autoComplete='off'
          value={ value }
          id={ id }
          placeholder={ placeholder }
          ref={(el) => {
            this.inputField = el;
          }}
          aria-invalid={ ariaInvalid } // add aria with hoc?
          aria-autocomplete='list'
        />
        { value.length > 0 &&
        <button
          aria-label={ resetLabel }
          className='nfe-account-selector__reset-button'
          onClick={ onReset }
          tabIndex={-1}
          type="button"
        >
          <KryssIkon className='nfe-account-selector__reset-icon'/>
        </button>
        }
        <div onClick={() => this.inputField.focus()} className={this.dropdownIconClassName()}>
          <ChevronIkon focusable={ false }/>
        </div>
      </div>
    );
  }
}

BaseSelector.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onShowSuggestions: PropTypes.func.isRequired,
  onHideSuggestions: PropTypes.func.isRequired,
  isSuggestionsShowing: PropTypes.bool.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  ariaInvalid: PropTypes.bool,
  resetLabel: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
};

BaseSelector.defaultProps = {
  onBlur: () => {},
  onFocus: () => {},
  value: '',
};

export default BaseSelector;
