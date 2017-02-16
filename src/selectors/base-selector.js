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
    this.globalClickHandler = this.globalClickHandler.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
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
    const {onChange} = this.props;
    this.showHideSuggestions(true);
    onChange(input);
  }

  globalClickHandler(evt) {
    if (!this.self.contains(evt.target)) {
      const {shouldSelectFocusedSuggestionOnTab, suggestions} = this.props;
      const {highlightedSuggestionIndex} = this.state;
      if (shouldSelectFocusedSuggestionOnTab) {
        const selectedAccount = suggestions[highlightedSuggestionIndex];
        if (selectedAccount) {
          this.onSuggestionSelect(selectedAccount);
        }
      }
    }
  }

  addGlobalEventListeners() {
    window.addEventListener('mousedown', this.globalClickHandler);
  }

  removeGlobalEventListeners() {
    window.removeEventListener('mousedown', this.globalClickHandler);
  }

  onChangeFocusedSuggestion(index) {
    this.setState({highlightedSuggestionIndex: index});
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
    //Calling setState causes a rerender which removes SuggestionList from the DOM.
    //onSelect is thus never called when a SuggestionItem is clicked.
    this.state = {...this.state, showSuggestions: false};
    this.props.onBlur();
    this.removeGlobalEventListeners();
  }

  hasFocus() {
    const {inputHasFocus, highlightedSuggestionIndex} = this.state;
    return inputHasFocus || highlightedSuggestionIndex !== -1;
  }

  onInputFocus(event) {
    event.stopPropagation();
    if (!this.hasFocus()) {
      this.onFocus();
    }
    this.state = {...this.state, inputHasFocus: true};
  }

  onInputBlur(event) {
    event.stopPropagation();
    setTimeout(()=> {
      if (!this.hasFocus()) {
        this.onBlur();
      }
    });
    this.state = {...this.state, inputHasFocus: false};
  }

  showHideSuggestions(show, cb = ()=> {
  }) {
    const nextState = show ? {showSuggestions: show} : {showSuggestions: false, highlightedSuggestionIndex: -1};
    this.setState(nextState, cb);
  }

  onSelect(suggestion) {
    const {onSelect, shouldSetFocusToInputOnSelect} = this.props;
    onSelect(suggestion);
    if (shouldSetFocusToInputOnSelect) {
      this.setState({
        inputHasFocus: true,
        showSuggestions: false,
        highlightedSuggestionIndex: -1
      }, ()=> this.input.focus());
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
    if(this.state.showSuggestions){
      this.setState({showSuggestions : false});
      return;
    }
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
    const {showSuggestions} = this.state;
    const {which, altKey} = event;
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
      // case KeyCodes.ENTER:
      //   onSelect(suggestions[highlightedIndex]);
      //   break;
      // case KeyCodes.TAB:
      //   if (evt.shiftKey) {
      //     evt.preventDefault();
      //     onSelect(suggestions[highlightedIndex]);
      //     break;
      //   }
      //   if (shouldSelectFocusedSuggestionOnTab) {
      //     onSelect(suggestions[highlightedIndex]);
      //     break;
      //   }
      //   onBlur();

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
          onBlur={this.onInputBlur}
          onFocus={this.onInputFocus}
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
