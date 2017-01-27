import React, { PropTypes } from 'react';
import Input from './input-field';
import SuggestionsList from '../suggestion/suggestion-list-container';
import { KeyCodes } from '../util/types';

class BaseSelector extends React.Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputOrSuggestionsBlur = this.onInputOrSuggestionsBlur.bind(this);
    this.onInputOrSuggestionsFocus = this.onInputOrSuggestionsFocus.bind(this);
    this.showHideSuggestions = this.showHideSuggestions.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onInputReset = this.onInputReset.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);

    this.state = {
      showSuggestions: false,
      hasFocus: false,
      onFocusJustCalled: false,
    };
  }

  onInputChange(input) {
    const {onChange} = this.props;
    this.setState({
      showSuggestions: true,
    });
    onChange(input);
  }

  onInputOrSuggestionsFocus(event) {
    event.stopPropagation();
    if (!this.state.hasFocus) {
      this.setState({
        hasFocus: true,
        showSuggestions: true
      }, ()=> {
        this.props.onFocus();
      });
    }
    this.setState({
      onFocusJustCalled: true,
    });
  }

  onInputOrSuggestionsBlur(event) {
    event.stopPropagation();
    //In the case where onFocus is called right before onBlur, the timeout callback is executed when the onFocus is fully resolved.
    //This insures that onBlur is not called when focus is moved within this component
    setTimeout(()=> {
      if (!this.state.onFocusJustCalled) {
        this.setState({hasFocus: false, showSuggestions: false}, this.props.onBlur);
      }
    });

    this.setState({
      onFocusJustCalled: false,
    });
  }

  showHideSuggestions(show, cb = ()=> {}) {
    this.setState({showSuggestions: show}, cb);
  }

  onSelect(suggestion) {
    const {onSelect, shouldSetFocusToInputOnSelect, shouldHideSuggestionsOnSelect} = this.props;

    const _onSelect = ()=> {
      onSelect(suggestion);
      if (shouldSetFocusToInputOnSelect) {
        this.input.focus();
      }
    };

    if (shouldHideSuggestionsOnSelect) {
      this.showHideSuggestions(false, _onSelect);
      return;
    }

    _onSelect();
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
          this.suggestionList.setHiglightedIndex(0);
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
      shouldSelectHighlightedSuggestionOnTab,
      suggestionsHeightMax,
      id,
    } = this.props;
    const {showSuggestions} = this.state;
    return (
      <div>
        <Input
          inputFieldRef={(input)=> {this.input = input}}
          value={value}
          onChange={this.onInputChange}
          onReset={this.onInputReset}
          resetLabel={''}
          onKeyDown={this.onInputKeyDown}
          isSuggestionsShowing={showSuggestions}
          id={id}
          placeholder={placeholder}
          onBlur={this.onInputOrSuggestionsBlur}
          onFocus={this.onInputOrSuggestionsFocus}
        />
        {showSuggestions &&
        <SuggestionsList
          ref={(suggestionList)=> {this.suggestionList = suggestionList}}
          suggestions={suggestions.filter(suggestionFilter(value))}
          heightMax={suggestionsHeightMax}
          renderSuggestion={renderSuggestion}
          renderNoMatches={renderNoMatches}
          onSelect={this.onSelect}
          onClose={()=> this.showHideSuggestions(false)}
          onFocus={this.onInputOrSuggestionsFocus}
          onBlur={this.onInputOrSuggestionsBlur}
          onShiftTab={() => this.input.focus()}
          shouldSelectHighlightedSuggestionOnTab={shouldSelectHighlightedSuggestionOnTab}
        />}
      </div>
    );
  }
}

BaseSelector.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  suggestionFilter: PropTypes.func.isRequired,
  suggestionsHeightMax : PropTypes.number,
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
