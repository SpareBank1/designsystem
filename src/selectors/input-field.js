import React, { PropTypes, Component } from 'react';
import KryssIkon from 'ffe-icons-react/kryss-ikon';

class Input extends Component {
  render() {
    const {
      onFocus,
      onChange,
      onKeyDown,
      value,
      id,
      placeholder,
      isSuggestionsShowing,
      ariaInvalid,
      resetLabel,
      onBlur,
      onReset,
      inputFieldRef,
      highlightedIndex,
      suggestionListId
    } = this.props;
    return (
      <div
        role='combobox'
        aria-expanded={ isSuggestionsShowing }
        onFocus={ onFocus }
        onBlur={ onBlur }
        aria-activedescendant={highlightedIndex > -1 ? `suggestion-item-${highlightedIndex}` : null}
        aria-owns={suggestionListId}
      >
        <input
          onChange={ (e) => {onChange(e.target.value);}}
          className='ffe-input-field ffe-dropdown input-field'
          onKeyDown={ onKeyDown }
          autoComplete='off'
          value={ value }
          id={ id }
          placeholder={ placeholder }
          ref={inputFieldRef}
          aria-invalid={ ariaInvalid }
          aria-autocomplete='list'
        />
        { value.length > 0 &&
        <button
          aria-label={ resetLabel }
          className='reset-button'
          onMouseDown={ onReset }
          tabIndex={-1}
          type="button"
        >
          <KryssIkon className='reset-button-icon'/>
        </button>
        }
      </div>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  resetLabel: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  isSuggestionsShowing: PropTypes.bool.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  ariaInvalid: PropTypes.bool,
  inputFieldRef: PropTypes.func,
  highlightedIndex: PropTypes.number,
  suggestionListId: PropTypes.string,
};

Input.defaultProps = {
  onBlur: () => {},
  onFocus: () => {},
  inputFieldRef: () => {},
};

export default Input;
