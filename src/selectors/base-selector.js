import React, { Component } from 'react';
import { func, bool, number, string, arrayOf, object } from 'prop-types';
import Input from './input-field';
import SuggestionsList from '../suggestion/suggestion-list-container';
import { KeyCodes } from '../util/types';

class BaseSelector extends Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.showOrHideSuggestions = this.showOrHideSuggestions.bind(this);
    this.onSuggestionSelect = this.onSuggestionSelect.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onInputReset = this.onInputReset.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.filterSuggestions = this.filterSuggestions.bind(this);
    this.setFocus = this.setFocus.bind(this);

    this.state = {
      showSuggestions: false,
      highlightedSuggestionIndex: -1,
      suggestionListId: 'suggestion-list'
    };
  }

  _onSuggestionListChange() {
    setTimeout(() => {
      this.props.onSuggestionListChange(this.getSuggestionListHeight());
    });
  }

  getSuggestionListHeight() {
    if (this.suggestionList) {
      return this.suggestionList.scrollbars.getClientHeight();
    }
    return 0;
  }

  setFocus() {
    this.input.focus();
  }

  getInputHeight() {
    if (this.input) {
      return this.input.getBoundingClientRect().height;
    }
    return 0;
  }

  filterSuggestions() {
    const { suggestions, suggestionFilter, value } = this.props;
    return suggestions.filter(suggestionFilter(value));
  }

  onInputChange(value) {
    this.setState({ showSuggestions: true, highlightedSuggestionIndex: -1 }, () => {
      this.props.onChange(value);
      this._onSuggestionListChange();
    });
  }

  onFocus() {
    this.showOrHideSuggestions(true, this.props.onFocus);
  }

  onBlur() {
    this.showOrHideSuggestions(false, this.props.onBlur);
  }

  onSuggestionSelect(suggestion) {
    if (suggestion) {
      const { shouldHideSuggestionsOnSelect, onSelect } = this.props;
      if (shouldHideSuggestionsOnSelect) {
        this.showOrHideSuggestions(false, () => onSelect(suggestion));
        return;
      }
      onSelect(suggestion);
    }
  }

  onInputReset() {
    const shouldShowSuggestions = !this.props.shouldHideSuggestionsOnReset;
    this.showOrHideSuggestions(shouldShowSuggestions, this.props.onReset);
    setTimeout(this.setFocus);
  }

  showOrHideSuggestions(show, cb = () => {}) {
    const nextState = show ? { showSuggestions: show } : { showSuggestions: false, highlightedSuggestionIndex: -1 };
    this.setState(nextState, cb);
    this._onSuggestionListChange();
  }

  setNextHighlighted() {
    const { highlightedSuggestionIndex } = this.state;
    const suggestions = this.filterSuggestions();
    const nextHighlightedSuggestionIndex = highlightedSuggestionIndex === suggestions.length - 1 ? 0 : highlightedSuggestionIndex + 1;
    this.setState({ highlightedSuggestionIndex: nextHighlightedSuggestionIndex });

    if (nextHighlightedSuggestionIndex === 0) {
      this.suggestionList.setScrollPosStart();
      return;
    }
    this.suggestionList.setScrollPosNext();
  }

  setPreviousHighlighted() {
    const { highlightedSuggestionIndex } = this.state;
    const suggestions = this.filterSuggestions();
    const nextHighlightedSuggestionIndex = highlightedSuggestionIndex === 0 ? suggestions.length - 1 : highlightedSuggestionIndex - 1;
    this.setState({ highlightedSuggestionIndex: nextHighlightedSuggestionIndex });

    if (nextHighlightedSuggestionIndex === suggestions.length - 1) {
      this.suggestionList.setScrollPosEnd();
      return;
    }
    this.suggestionList.setScrollPosPrevious();
  }

  setFirstHighlighted() {
    this.setState({ highlightedSuggestionIndex: 0 });
    this.suggestionList.setScrollPosStart();
  }

  setLastHighlighted() {
    this.setState({ highlightedSuggestionIndex: this.filterSuggestions().length - 1 });
    this.suggestionList.setScrollPosEnd();
  }

  onInputKeyDown(event) {
    const { showSuggestions, highlightedSuggestionIndex } = this.state;
    const { shouldSelectHighlightedOnTab } = this.props;
    const { which, altKey } = event;
    switch (which) {
      case KeyCodes.DOWN :
        if (altKey && !showSuggestions) {
          this.showOrHideSuggestions(true);
          break;
        }
        if (showSuggestions) {
          this.setNextHighlighted();
          event.preventDefault();
        }
        break;
      case KeyCodes.UP :
        if (altKey && showSuggestions) {
          this.showOrHideSuggestions(false);
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
        if (showSuggestions) {
          event.preventDefault();
        }
        this.onSuggestionSelect(this.filterSuggestions()[highlightedSuggestionIndex]);
        break;
      case KeyCodes.TAB:
        if (showSuggestions && shouldSelectHighlightedOnTab) {
          this.onSuggestionSelect(this.filterSuggestions()[highlightedSuggestionIndex]);
        }
    }
  }

  render() {
    const {
      value,
      placeholder,
      suggestionsHeightMax,
      ariaInvalid,
      id,
      name,
    } = this.props;
    const { showSuggestions, highlightedSuggestionIndex, suggestionListId } = this.state;
    return (
      <div
        className='base-selector ffe-input-group'
      >
        <Input
          inputFieldRef={(input) => {
            this.input = input;
          }}
          value={value}
          onChange={this.onInputChange}
          onReset={this.onInputReset}
          onKeyDown={this.onInputKeyDown}
          isSuggestionsShowing={showSuggestions}
          placeholder={placeholder}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          highlightedIndex={highlightedSuggestionIndex}
          suggestionListId={suggestionListId}
          ariaInvalid={ariaInvalid}
          id={id}
          name={name}
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
          onSelect={this.onSuggestionSelect}
          id={suggestionListId}
        />}
      </div>
    );
  }
}

BaseSelector.propTypes = {
  suggestions: arrayOf(object).isRequired,
  suggestionFilter: func.isRequired,
  onSelect: func.isRequired,
  value: string.isRequired,
  shouldHideSuggestionsOnSelect: bool.isRequired,
  shouldSelectHighlightedOnTab: bool.isRequired,
  shouldHideSuggestionsOnBlur: bool.isRequired,
  shouldHideSuggestionsOnReset: bool.isRequired,
  onChange: func,
  onBlur: func,
  onReset: func,
  onFocus: func,
  onSuggestionListChange: func, //provides the height of the suggestion list
  placeholder: string,
  ariaInvalid: bool,
  suggestionsHeightMax: number,
  id: string,
  name: string,
};

BaseSelector.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onReset: () => {},
  onSuggestionListChange: () => {},
  ariaInvalid: false,
  placeholder: '',
  value: '',
};

export default BaseSelector;
