import React, {PropTypes} from 'react';
import Input from './input-field';
import SuggestionsList from '../suggestion/suggestion-list-container';
import {KeyCodes} from '../util/types';

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
    this.onChangeFocusedSuggestion = this.onChangeFocusedSuggestion.bind(this);
    this.filterSuggestions = this.filterSuggestions.bind(this);

    this.state = {
      showSuggestions: false,
      highlightedSuggestionIndex: -1,
    };
  }

  filterSuggestions() {
    const {suggestions, suggestionFilter, value} = this.props;
    return suggestions.filter(suggestionFilter(value));
  }

  onInputChange(input) {
    this.showHideSuggestions(true);
    this.props.onChange(input);
  }

  onChangeFocusedSuggestion(index) { //TODO focus
    this.setState({highlightedSuggestionIndex: index});
  }

  onFocus() {
    this.setState({showSuggestions: true}, this.props.onFocus);
  }

  onBlur() {
    this.props.onBlur();
  }

  showHideSuggestions(show, cb = ()=> {}) {
    const nextState = show ? {showSuggestions: show} : {showSuggestions: false, highlightedSuggestionIndex: -1};
    this.setState(nextState, cb);
  }

  onSuggestionSelect(suggestion) {
    const {shouldHideSuggestionsOnSelect, onSelect} = this.props;
    if (shouldHideSuggestionsOnSelect) {
      this.showHideSuggestions(false, ()=> onSelect(suggestion));
      return;
    }
    onSelect(suggestion);
  }

  onInputReset() {
    this.setState({showSuggestions: false});
    this.props.onReset();
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
    const {suggestions, shouldSelectFocusedSuggestionOnTab} = this.props;
    const {which, altKey, shiftKey} = event;
    switch (which) {
      case KeyCodes.DOWN :
        if (altKey && !showSuggestions) {
          this.showHideSuggestions(true);
        }
        if (showSuggestions) {
          this.setNextHighlighted();
        }
        break;
      case KeyCodes.UP :
        if (altKey && showSuggestions) {
          this.showHideSuggestions(false);
        }
        if (showSuggestions) {
          this.setPreviousHighlighted();
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
        if (shiftKey) {
          event.preventDefault();
          this.onSelect(suggestions[highlightedSuggestionIndex]);
          break;
        }
        if (shouldSelectFocusedSuggestionOnTab) {
          this.onSelect(suggestions[highlightedSuggestionIndex]);
          break;
        }
    }
  }

  render() {
    const {
      value,
      placeholder,
      renderSuggestion,
      renderNoMatches,
      shouldSelectFocusedSuggestionOnTab,
      suggestionsHeightMax,
      id,
    } = this.props;
    const {showSuggestions, highlightedSuggestionIndex} = this.state;
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
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
        {showSuggestions &&
        <SuggestionsList
          ref={(suggestionList) => {
            this.suggestionList = suggestionList
          }}
          onChangeFocused={this.onChangeFocusedSuggestion}
          highlightedIndex={highlightedSuggestionIndex}
          suggestions={this.filterSuggestions()}
          heightMax={suggestionsHeightMax}
          renderSuggestion={renderSuggestion}
          renderNoMatches={renderNoMatches}
          onSelect={this.onSuggestionSelect}
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
  shouldHideSuggestionsOnSelect: PropTypes.bool.isRequired,
  id: PropTypes.string,
};

BaseSelector.defaultProps = {
  onChange: () => {
  },
  onBlur: () => {
  },
  onFocus: () => {
  },
  onReset: ()=> {
  },
  ariaInvalid: false,
};

export default BaseSelector;
