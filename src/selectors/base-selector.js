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
    this.onSuggestionsBlur = this.onSuggestionsBlur.bind(this);
    this.onSuggestionsFocus = this.onSuggestionsFocus.bind(this);
    this.onChangeFocusedSuggestion = this.onChangeFocusedSuggestion.bind(this);

    this.state = {
      showSuggestions: false,
      focusedSuggestionIndex: -1,
    };
  }

  onInputChange(input) {
    const {onChange} = this.props;
    this.setState({
      showSuggestions: true,
    });
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
    const nextState = index === -1 ? {...this.state, focusedSuggestionIndex: index, showSuggestions: false} : {focusedSuggestionIndex: index};
    this.setState(nextState);
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
    const {inputHasFocus, suggestionsHasFocus} = this.state;
    return inputHasFocus || suggestionsHasFocus;
  }

  onInputFocus(event) {
    //console.log("inFocus")
    event.stopPropagation();
    if (!this.hasFocus()) {
      this.onFocus();
    }
    this.setState({inputHasFocus: true});
  }

  onSuggestionsFocus(event) {
    event.stopPropagation();
    //console.log("sugfocus")
    if (!this.hasFocus()) {
      this.props.onFocus();
    }
    this.setState({suggestionsHasFocus: true});
  }

  onInputBlur(event) {
    //console.log("inblur")
    event.stopPropagation();
    this.setState({inputHasFocus: false});
    setTimeout(()=> {
      if (!this.hasFocus()) {
        this.onBlur();
      }
    });
  }

  onSuggestionsBlur(event) {
    // event.stopPropagation();
    this.setState({suggestionsHasFocus: false});
    setTimeout(()=> {
      if (!this.hasFocus()) {
        this.onBlur();
      }
    });
  }

  showHideSuggestions(show, cb = ()=> {
  }) {
    const nextState = show ? {showSuggestions: show} : {...this.state, showSuggestions: show, focusedSuggestionIndex: -1};
    this.setState(nextState, cb);
  }

  onSelect(suggestion) {
    const {onSelect, shouldSetFocusToInputOnSelect} = this.props;
    onSelect(suggestion);
    if (shouldSetFocusToInputOnSelect) {
      this.setState({suggestionsHasFocus: false, inputHasFocus: true}, ()=> this.input.focus())
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
    ////console.log("render")
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
          ref={(suggestionList)=> {
            this.suggestionList = suggestionList
          }}
          onChangeFocused={this.onChangeFocusedSuggestion}
          focusedIndex={focusedSuggestionIndex}
          suggestions={suggestions.filter(suggestionFilter(value))}
          heightMax={suggestionsHeightMax}
          renderSuggestion={renderSuggestion}
          renderNoMatches={renderNoMatches}
          onSelect={this.onSuggestionSelect}
          onClose={()=> this.showHideSuggestions(false)}
          onFocus={this.onSuggestionsFocus}
          onShiftTab={() => this.input.focus()}
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
  onReset : ()=> {},
  ariaInvalid: false,
};

export default BaseSelector;
