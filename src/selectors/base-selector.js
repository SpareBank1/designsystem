import React, {PropTypes, Component} from 'react';
import Input from './input-field';
import SuggestionsList from '../suggestion/suggestion-list-container';
import {KeyCodes} from '../util/types';

class BaseSelector extends Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.showHideSuggestions = this.showHideSuggestions.bind(this);
    this.onSuggestionClick = this.onSuggestionClick.bind(this);
    this.onInputResetClick = this.onInputResetClick.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.filterSuggestions = this.filterSuggestions.bind(this);

    this.state = {
      showSuggestions: false,
      highlightedSuggestionIndex: -1,
      suggestionListId: "account-selector-suggestion-list"
    };

    /*
     Used for controlling the calling of props.onFocus and props.onBlur.
     This is necessary for maintaining focus in the input field for mouseClick events
     on the clearInput button and suggestion items.
     */
    this.didPerformClickAction = false;
  }

  filterSuggestions() {
    const {suggestions, suggestionFilter, value} = this.props;
    return suggestions.filter(suggestionFilter(value));
  }

  onInputChange(value) {
    this.setState({showSuggestions : true, highlightedSuggestionIndex : -1}, () => this.props.onChange(value));
  }

  onFocus() {
    if (this.didPerformClickAction) {
      this.didPerformClickAction = false;
      return;
    }

    this.showHideSuggestions(true, this.props.onFocus);
  }

  onBlur() {
    if (this.didPerformClickAction) {
      this.input.focus();
      return;
    }

    this.showHideSuggestions(false, this.props.onBlur);
  }

  onSuggestionSelect(suggestion) {
    if (suggestion) {
      const {shouldHideSuggestionsOnSelect, onSelect} = this.props;
      if (shouldHideSuggestionsOnSelect) {
        this.showHideSuggestions(false, () => onSelect(suggestion));
        return;
      }
      onSelect(suggestion);
    }
  }

  onSuggestionClick(suggestion) {
    this.didPerformClickAction = true;
    this.onSuggestionSelect(suggestion);
  }

  onInputResetClick() {
    this.didPerformClickAction = true;
    this.onInputReset();
  }

  onInputReset() {
    this.showHideSuggestions(false, this.props.onReset);
  }

  showHideSuggestions(show, cb = () => {}) {
    const nextState = show ? {showSuggestions: show} : {showSuggestions: false, highlightedSuggestionIndex: -1};
    this.setState(nextState, cb);
  }

  setNextHighlighted() {
    const {highlightedSuggestionIndex} = this.state;
    const suggestions = this.filterSuggestions();
    const nextHighlightedSuggestionIndex = highlightedSuggestionIndex === suggestions.length - 1 ? 0 : highlightedSuggestionIndex + 1;
    this.setState({highlightedSuggestionIndex: nextHighlightedSuggestionIndex});

    if (nextHighlightedSuggestionIndex === 0) {
      this.suggestionList.setScrollPosStart();
      return;
    }
    this.suggestionList.setScrollPosNext();
  }

  setPreviousHighlighted() {
    const {highlightedSuggestionIndex} = this.state;
    const suggestions = this.filterSuggestions();
    const nextHighlightedSuggestionIndex = highlightedSuggestionIndex === 0 ? suggestions.length - 1 : highlightedSuggestionIndex - 1;
    this.setState({highlightedSuggestionIndex: nextHighlightedSuggestionIndex});

    if (nextHighlightedSuggestionIndex === suggestions.length - 1) {
      this.suggestionList.setScrollPosEnd();
      return;
    }
    this.suggestionList.setScrollPosPrevious();
  }

  setFirstHighlighted() {
    this.setState({highlightedSuggestionIndex: 0});
    this.suggestionList.setScrollPosStart();
  }

  setLastHighlighted() {
    this.setState({highlightedSuggestionIndex: this.filterSuggestions().length - 1});
    this.suggestionList.setScrollPosEnd();
  }

  onInputKeyDown(event) {
    const {showSuggestions, highlightedSuggestionIndex} = this.state;
    const {suggestions, shouldSelectHighlightedOnTab} = this.props;
    const {which, altKey} = event;
    switch (which) {
      case KeyCodes.DOWN :
        if (altKey && !showSuggestions) {
          this.showHideSuggestions(true);
          break;
        }
        if (showSuggestions) {
          this.setNextHighlighted();
          event.preventDefault();
        }
        break;
      case KeyCodes.UP :
        if (altKey && showSuggestions) {
          this.showHideSuggestions(false);
          break;
        }
        if (showSuggestions) {
          this.setPreviousHighlighted();
          event.preventDefault();
        }
        break;
      case KeyCodes.ESC:
        this.onInputReset();
        break;
      case KeyCodes.HOME:
        if (showSuggestions) {
          this.setFirstHighlighted();
          event.preventDefault();
        }
        break;
      case KeyCodes.END:
        if (showSuggestions) {
          this.setLastHighlighted();
          event.preventDefault();
        }
        break;
      case KeyCodes.ENTER:
        this.onSuggestionSelect(suggestions[highlightedSuggestionIndex]);
        break;
      case KeyCodes.TAB:
        if (showSuggestions && shouldSelectHighlightedOnTab) {
          this.onSuggestionSelect(suggestions[highlightedSuggestionIndex]);
        }
    }
  }

  getFocusedOptionId() {
    const filteredResults = this.filterSuggestions();
    const {highlightedSuggestionIndex} = this.state;
    if (filteredResults.length > 0 && highlightedSuggestionIndex > -1 && filteredResults.length > highlightedSuggestionIndex) {
      return `option-${filteredResults[highlightedSuggestionIndex].id}`;
    }
    return null;
  }

  render() {
    const {
      value,
      placeholder,
      suggestionsHeightMax,
      id,
    } = this.props;
    const {showSuggestions, highlightedSuggestionIndex, suggestionListId} = this.state;
    return (
      <div
        className='base-selector'
      >
        <Input
          inputFieldRef={(input) => {
            this.input = input;
          }}
          value={value}
          onChange={this.onInputChange}
          onReset={this.onInputResetClick}
          resetLabel={''}
          onKeyDown={this.onInputKeyDown}
          isSuggestionsShowing={showSuggestions}
          id={id}
          placeholder={placeholder}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          highlightedId={highlightedSuggestionIndex}
          suggestionListId={suggestionListId}
        />
        {showSuggestions &&
        <SuggestionsList
          {...this.props}
          ref={(suggestionList) => {
            this.suggestionList = suggestionList;
          }}
          highlightedIndex={highlightedSuggestionIndex}
          suggestions={this.filterSuggestions()}
          heightMax={suggestionsHeightMax}
          onSelect={this.onSuggestionClick}
          id={this.state.suggestionListId}
        />}
      </div>
    );
  }
}

BaseSelector.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  suggestionFilter: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  shouldHideSuggestionsOnSelect: PropTypes.bool.isRequired,
  shouldSelectHighlightedOnTab: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onReset: PropTypes.func,
  onFocus: PropTypes.func,
  id: PropTypes.string,
  placeholder : PropTypes.string,
  suggestionsHeightMax : PropTypes.number,
};

BaseSelector.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onReset: () => {},
  ariaInvalid: false,
  placeholder : '',
};

export default BaseSelector;
