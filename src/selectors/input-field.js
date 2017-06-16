import React, { Component } from 'react';
import { func, string, bool, number } from 'prop-types';
import KryssIkon from 'ffe-icons-react/kryss-ikon';

class Input extends Component {

  constructor(props) {
    super(props);

    /*
     IE11 can drop characters when typing fast.
     This is a known issue with React 15 and IE11 and will be fixed in React 16
     See bugreport: https://github.com/facebook/react/issues/7027
     As discussed in the React bugreport, a workaround for this is to use "onInput" instead of "onChange" in IE11.
     In order to achieve this we use a very dirty, but workable, browser testing regex:
     https://github.com/faisalman/ua-parser-js/blob/master/src/ua-parser.js#L261
     */
    this.isIE11 = window.navigator.userAgent.match(/(trident).+rv[:\s]([\w.]+).+like\sgecko/i) !== null;
  }

  onChangeHandler(handler) {
    return this.isIE11 ? { onInput: handler }: { onChange: handler };
  }

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
      onBlur,
      onReset,
      inputFieldRef,
      highlightedIndex,
      suggestionListId,
      name,
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
          className='ffe-input-field ffe-dropdown ffe-base-selector__input-field'
          onKeyDown={ onKeyDown }
          autoComplete='off'
          value={ value }
          id={ id }
          placeholder={ placeholder }
          ref={inputFieldRef}
          aria-invalid={ ariaInvalid }
          aria-autocomplete='list'
          name={ name }
          {...this.onChangeHandler((e) => onChange(e.target.value))}
        />
        { value.length > 0 &&
        <button
          className='ffe-base-selector__reset-button'
          onMouseDown={ (e) => {
            e.preventDefault();
            onReset();
          } }
          tabIndex={-1}
          type="button"
        >
          <KryssIkon className='ffe-base-selector__reset-button-icon'/>
        </button>
        }
      </div>
    );
  }
}

Input.propTypes = {
  onChange: func.isRequired,
  onKeyDown: func.isRequired,
  value: string.isRequired,
  onReset: func.isRequired,
  isSuggestionsShowing: bool.isRequired,
  id: string.isRequired,
  placeholder: string,
  onBlur: func,
  onFocus: func,
  ariaInvalid: bool,
  inputFieldRef: func,
  highlightedIndex: number,
  suggestionListId: string,
  name: string,
};

Input.defaultProps = {
  onBlur: () => {},
  onFocus: () => {},
  inputFieldRef: () => {},
  ariaInvalid: false,
};

export default Input;
