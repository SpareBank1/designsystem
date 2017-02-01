import React, { PropTypes } from 'react';
import Input from './input-field';
import SuggestionsList from '../suggestion/suggestion-list-container';
import { KeyCodes } from '../util/types';

class BaseSelector extends React.Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.showHideSuggestions = this.showHideSuggestions.bind(this);
    this.onSuggestionSelect = this.onSuggestionSelect.bind(this);
    this.onInputReset = this.onInputReset.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.globalClickHandler = this.globalClickHandler.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.onChangeFocusedSuggestion = this.onChangeFocusedSuggestion.bind(this);

    this.state = {
      showSuggestions: false,
      focusedSuggestionIndex: -1,
    };
  }

  onInputChange(input) {
    const {onChange} = this.props;
    this.showHideSuggestions(true);
    onChange(input);
  }

  globalClickHandler(evt) {
    console.log("GLOB")
    if (!this.self.contains(evt.target)) {
      const {shouldSelectFocusedSuggestionOnTab, suggestions} = this.props;
      const {focusedSuggestionIndex} = this.state;
      if (shouldSelectFocusedSuggestionOnTab) {
        const selectedAccount = suggestions[focusedSuggestionIndex];
        if (selectedAccount) {
          this.onSuggestionSelect(selectedAccount);
        }
      }
      this.onBlur();
      return;
    }

    if (this.input === evt.target) {
      if (this.state.focusedSuggestionIndex !== -1) {
        this.setState({showSuggestions: false, focusedSuggestionIndex: -1}, ()=> this.input.focus());
      }
    }
  }

  addGlobalEventListeners() {
    window.addEventListener('click', this.globalClickHandler);
  }

  removeGlobalEventListeners() {
    window.removeEventListener('click', this.globalClickHandler);
  }

  onChangeFocusedSuggestion(index) {
    this.setState({focusedSuggestionIndex: index});
  }

  onFocus() {
    this.setState({
      showSuggestions: true
    }, () => {
      this.props.onFocus();
      this.addGlobalEventListeners();
    });
  }

  onBlur() {
    this.setState({showSuggestions: false}, () => {
      this.props.onBlur();
      this.removeGlobalEventListeners();
    });
  }

  hasFocus() {
    const {inputHasFocus, focusedSuggestionIndex} = this.state;
    return inputHasFocus || focusedSuggestionIndex !== -1;
  }

  onInputFocus(event) {
    event.stopPropagation();
    if (!this.hasFocus()) {
      this.onFocus();
    }
    this.setState({inputHasFocus: true});
  }

  onInputBlur(event) {
    event.stopPropagation();
    setTimeout(()=> {
      if (!this.hasFocus()) {
        this.onBlur();
      }
    });
    this.setState({inputHasFocus: false});
  }

  showHideSuggestions(show, cb = ()=> {}) {
    const nextState = show ? {showSuggestions: show} : {...this.state, showSuggestions: false, focusedSuggestionIndex: -1};
    this.setState(nextState, cb);
  }

  onSelect(suggestion) {
    const {onSelect, shouldSetFocusToInputOnSelect} = this.props;
    onSelect(suggestion);
    if (shouldSetFocusToInputOnSelect) {
      this.setState({inputHasFocus: true}, ()=> this.input.focus())
    }
  }

  onSuggestionSelect(suggestion) {
    const {shouldHideSuggestionsOnSelect} = this.props;
    if (shouldHideSuggestionsOnSelect) {
      this.showHideSuggestions(false, ()=> this.onSelect(suggestion));
      return;
    }

    this.onSelect(suggestion);
  }

  onInputReset() {
    const {onReset} = this.props;
    onReset();
    this.input.focus();
  }

  onInputKeyDown({which, altKey}) {
    const {showSuggestions} = this.state;
    switch (which) {
      case KeyCodes.DOWN :
        if (altKey && !showSuggestions) {
          this.showHideSuggestions(true);
        }
        if (showSuggestions) {
          this.setState({focusedSuggestionIndex: 0})
        }
        break;
      case KeyCodes.UP :
        if (altKey && showSuggestions) {
          this.showHideSuggestions(false);
        }
        break;
      case KeyCodes.ESC:
        this.onInputReset();
        break;
    }
  }

  render() {
    const {
      value,
      placeholder,
      suggestions,
      renderSuggestion,
      renderNoMatches,
      suggestionFilter,
      shouldSelectFocusedSuggestionOnTab,
      suggestionsHeightMax,
      id,
    } = this.props;
    const {showSuggestions, focusedSuggestionIndex} = this.state;
    return (
      <div
        ref={(self)=> {
          if (self) {
            this.self = self;
          }
        }}
        className='base-selector'
      >
        <Input
          inputFieldRef={(input)=> {
            this.input = input
          }}
          value={value}
          onChange={this.onInputChange}
          onReset={this.onInputReset}
          resetLabel={''}
          onKeyDown={this.onInputKeyDown}
          isSuggestionsShowing={showSuggestions}
          id={id}
          placeholder={placeholder}
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
        />
        {showSuggestions &&
        <SuggestionsList
          onChangeFocused={this.onChangeFocusedSuggestion}
          focusedIndex={focusedSuggestionIndex}
          suggestions={suggestions.filter(suggestionFilter(value))}
          heightMax={suggestionsHeightMax}
          renderSuggestion={renderSuggestion}
          renderNoMatches={renderNoMatches}
          onSelect={this.onSuggestionSelect}
          onClose={()=> this.showHideSuggestions(false)}
          onBlur={this.onBlur}
          shouldSelectFocusedSuggestionOnTab={shouldSelectFocusedSuggestionOnTab}
        />}
      </div>
    );
  }
}

BaseSelector.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  suggestionFilter: PropTypes.func.isRequired,
  suggestionsHeightMax: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onReset: PropTypes.func,
  value: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  shouldSetFocusToInputOnSelect: PropTypes.bool.isRequired,
  shouldHideSuggestionsOnSelect: PropTypes.bool.isRequired,
  id: PropTypes.string,
};

BaseSelector.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onReset: ()=> {},
  ariaInvalid: false,
};

export default BaseSelector;
