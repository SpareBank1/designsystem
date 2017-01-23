import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import ChevronIkon from 'ffe-icons-react/chevron-ikon';
import i18n from '../i18n/i18n';
import KryssIkon from 'ffe-icons-react/kryss-ikon';

import KeyCode from '../util/keyCode';

class BaseSelector extends Component {

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  };


  onKeyDown({which, altKey}) {
    const {onShowSuggestions, onHideSuggestions} = this.props;
    if (which === KeyCode.DOWN && altKey) {
      return onShowSuggestions();
    }

    if (which === KeyCode.UP && altKey) {
      onHideSuggestions();
    }
  }

  render() {
    const {onFocus, onChange, value, id, placeholder, isSuggestionsShowing, ariaInvalid} = this.props;

    const inputClassName = () => { //TODO class function
      return classNames('ffe-input-field nfe-account-selector__search',
        {'nfe-account-selector__search--open': isSuggestionsShowing}
      );
    };

    const dropdownIconClassName = () => { //TODO class function
      return classNames('nfe-account-selector__dropdown-icon',
        {'nfe-account-selector__dropdown-icon--reverse': isSuggestionsShowing}
      );
    };

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
          className={ inputClassName() }
          onKeyDown={ this.onKeyDown }
          autoComplete='off'
          value={ value }
          id={ id }
          placeholder={ placeholder }
          ref={(el) => {
            this.inputField = el
          }}
          aria-invalid={ ariaInvalid } // add aria with hoc?
          aria-autocomplete='list'
        />
        { value.length > 0 &&
        <button
          aria-label={ i18n[this.props.locale].RESET_SEARCH }
          className='nfe-account-selector__reset-button'
          onMouseDown={ () => onChange('') }
          tabIndex={-1}
        >
          <KryssIkon className='nfe-account-selector__reset-icon'/>
        </button>
        }
        <div onClick={() => this.inputField.focus()} className={dropdownIconClassName()}>
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
  ariaInvalid: PropTypes.bool
};

BaseSelector.defaultProps = {
  onBlur: () => {},
  onFocus: () => {},
  value: '',
};

export default BaseSelector;
