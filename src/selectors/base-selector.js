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
    this.setFocus = this.setFocus.bind(this);

    this.state = {
      showSuggestions: false,
      highlightedSuggestionIndex: -1,
      suggestionListId: 'suggestion-list'
    };

    /*
     Used for controlling the calling of props.onFocus and props.onBlur.
     This is necessary for maintaining focus in the input field for mouseClick events
     on the clearInput button and suggestion items.
     */
    this.shouldPreventBlurForNextFocusEvent = false;
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

  preventBlurForNextFocusEvent(prevent = true) {
    this.shouldPreventBlurForNextFocusEvent = prevent;
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
    const {suggestions, suggestionFilter, value} = this.props;
    return suggestions.filter(suggestionFilter(value));
  }

  onInputChange(value) {
    this.setState({showSuggestions: true, highlightedSuggestionIndex: -1}, () => {
      this.props.onChange(value);
      this._onSuggestionListChange();
    });
  }

  onFocus() {
    if (this.shouldPreventBlurForNextFocusEvent) {
      this.preventBlurForNextFocusEvent(false);
      return;
    }
    this.showHideSuggestions(true, this.props.onFocus);
  }

  onBlur() {
    if (this.shouldPreventBlurForNextFocusEvent) {
      this.setFocus();
      return;
    }

    if (this.props.shouldHideSuggestionsOnBlur) {
      this.showHideSuggestions(false, () => {
        this.props.onBlur();
      });
      return;
    }
    this.props.onBlur();
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
    this.preventBlurForNextFocusEvent();
    this.onSuggestionSelect(suggestion);
  }

  onInputResetClick() {
    this.preventBlurForNextFocusEvent();
    this.onInputReset();
  }

  onInputReset() {
    const shouldShowSuggestions = !this.props.shouldHideSuggestionsOnReset;
    this.showHideSuggestions(shouldShowSuggestions, this.props.onReset);
    setTimeout(this.setFocus);
  }

  showHideSuggestions(show, cb = () => {}) {
    const nextState = show ? {showSuggestions: show} : {showSuggestions: false, highlightedSuggestionIndex: -1};
    this.setState(nextState, cb);
    this._onSuggestionListChange();
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
    const {shouldSelectHighlightedOnTab} = this.props;
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
    const {showSuggestions, highlightedSuggestionIndex, suggestionListId} = this.state;
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
          onReset={this.onInputResetClick}
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
          onSelect={this.onSuggestionClick}
          id={suggestionListId}
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
  shouldHideSuggestionsOnBlur: PropTypes.bool.isRequired,
  shouldHideSuggestionsOnReset : PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onReset: PropTypes.func,
  onFocus: PropTypes.func,
  onSuggestionListChange: PropTypes.func, //provides the height of the suggestion list
  placeholder: PropTypes.string,
  ariaInvalid: PropTypes.bool,
  suggestionsHeightMax: PropTypes.number,
  id : PropTypes.string,
  name : PropTypes.string,
};

BaseSelector.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onReset: () => {},
  onSuggestionListChange: () => {},
  ariaInvalid: false,
  placeholder: '',
  value : '',
};

export default BaseSelector;
