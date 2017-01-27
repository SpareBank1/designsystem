import React, { PropTypes } from 'react';
import Input from './input-field';
import SuggestionsList from '../suggestion/suggestion-list-container';
import { Locale, KeyCodes } from '../util/types';

class BaseSelector extends React.Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
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

  onFocus(event) {
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

  onBlur(event) {
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
    const {onSelect, giveInputFocusOnSelect, hideSuggestionsOnSelect} = this.props;

    const _onSelect = ()=> {
      onSelect(suggestion);
      if (giveInputFocusOnSelect) {
        this.input.focus();
      }
    };

    if (hideSuggestionsOnSelect) {
      this.showHideSuggestions(false, _onSelect);
      return;
    }

    _onSelect();
  }

  onInputReset() {
    const {onChange, giveInputFocusOnReset} = this.props;
    onChange('');
    if (giveInputFocusOnReset) {
      this.input.focus();
    }
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

  onShiftTab(evt) {
    this.input.focus();
  }


  render() {
    const {
      value,
      placeholder,
      suggestions,
      renderSuggestion,
      renderNoMatches,
      suggestionFilter,
      shouldSelectOnTab,
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
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
        {showSuggestions &&
        <SuggestionsList
          ref={(suggestionList)=> {this.suggestionList = suggestionList}}
          suggestions={suggestions.filter(suggestionFilter(value))}
          renderSuggestion={renderSuggestion}
          renderNoMatches={renderNoMatches}
          onSelect={this.onSelect}
          onClose={()=> this.showHideSuggestions(false)}
          onFocus={this.onFocus}
          onShiftTab={(e) => this.onShiftTab(e)}
          selectOnTab={selectOnTab}
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
  giveInputFocusOnSelect: PropTypes.bool.isRequired,
  shouldSetFocusToInputOnSelect: PropTypes.bool.isRequired,
  giveInputFocusOnReset: PropTypes.bool.isRequired,
  hideSuggestionsOnSelect: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  shouldSelectOnTab: PropTypes.bool
};

BaseSelector.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  ariaInvalid: false,
  onFocus: () => {},
};

export default BaseSelector;
