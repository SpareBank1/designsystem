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
      this.setState({hasFocus: true}, ()=> {
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
    const {onSelect, giveInputFocusOnSelect} = this.props;
    this.showHideSuggestions(false, ()=> {
      onSelect(suggestion);
      if (giveInputFocusOnSelect) {
        this.input.focus();
      }
    });
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


  render() {
    const {
      value,
      placeholder,
      suggestions,
      renderSuggestion,
      renderNoMatches
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
          id='id'
          placeholder={placeholder}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />
        {showSuggestions &&
        <SuggestionsList
          ref={(suggestionList)=> {this.suggestionList = suggestionList}}
          suggestions={suggestions}
          renderSuggestion={renderSuggestion}
          renderNoMatches={renderNoMatches}
          onSelect={this.onSelect}
          onClose={()=> this.showHideSuggestions(false)}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
        />}
      </div>
    );
  }
}

BaseSelector.propTypes = {
  suggestions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSelect: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  renderSuggestion: PropTypes.func.isRequired,
  renderNoMatches: PropTypes.func,
  onChange: PropTypes.func,
  locale: Locale.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  ariaInvalid: PropTypes.bool,
  selectedAccount: PropTypes.object,
  giveInputFocusOnSelect: PropTypes.bool.isRequired,
  giveInputFocusOnReset: PropTypes.bool.isRequired,
};

BaseSelector.defaultProps = {
  onChange: () => {},
  locale: 'nb',
  onBlur: () => {},
  ariaInvalid: false,
  value: '',
  onFocus: () => {},
};

export default BaseSelector;
