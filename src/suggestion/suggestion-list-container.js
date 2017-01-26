import React, { PropTypes } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import SuggestionList from './suggestion-list';
import { KeyCodes } from '../util/types';

class SuggestionListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.setHiglightedIndex = this.setHiglightedIndex.bind(this);
    this.state = {
      highlightedIndex: -1,
    };
  }

  nextHighlightedIndex() {
    return this.state.highlightedIndex === this.props.suggestions.length - 1 ?
      0 : this.state.highlightedIndex + 1;
  }

  previousHighlightedIndex() {
    return this.state.highlightedIndex === 0 ?
    this.props.suggestions.length - 1 : this.state.highlightedIndex - 1;
  }

  setHiglightedIndex(highlightedIndex) {
    this.setState({highlightedIndex})
  }

  onKeyDown(evt) {
    const {suggestions, onClose, onBlur, onSelect} = this.props;
    const {highlightedIndex} = this.state;
    switch (evt.which) {
      case KeyCodes.DOWN:
        evt.preventDefault();
        this.setHiglightedIndex(this.nextHighlightedIndex());
        break;
      case KeyCodes.UP:
        evt.preventDefault();
        this.setHiglightedIndex(this.previousHighlightedIndex());
        break;
      case KeyCodes.HOME:
        this.setHiglightedIndex(0);
        break;
      case KeyCodes.END:
        this.setHiglightedIndex(suggestions.length - 1);
        break;
      case KeyCodes.ESC:
        onClose();
        break;
      case KeyCodes.ENTER:
        onSelect(suggestions[highlightedIndex]);
        break;
      case KeyCodes.TAB:
        onBlur(suggestions[highlightedIndex]);
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className='nfe-account-selector__dropdown'
           onKeyDown={this.onKeyDown}
           onFocus={ this.props.onFocus }
           onBlur={ this.props.onBlur }
      >
        <Scrollbars style={{width: '100%', height: 300}}>
          <SuggestionList highlightedIndex={this.state.highlightedIndex} {...this.props}/>
        </Scrollbars>
      </div>
    );
  }
}

SuggestionListContainer.propTypes = {
  suggestions: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  renderSuggestion: PropTypes.func.isRequired,
  renderNoSuggestion: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  onBlur: PropTypes.func,
};

SuggestionListContainer.defaultProps = {
  onClose: () => {},
  onBlur: () => {}
};

export default SuggestionListContainer;

