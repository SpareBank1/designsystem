import React, {PropTypes} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import SuggestionList from './suggestion-list';

class SuggestionListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.refHighlightedSuggestion = this.refHighlightedSuggestion.bind(this);

  }

  refHighlightedSuggestion(suggestionEl) {
    this.highlightedSuggestionHeight = suggestionEl.clientHeight;
  }

  _setScrollPos(pos) {
    this.scrollbars.scrollTop(pos);
  }

  setScrollPosStart() {
    this._setScrollPos(0);
  }

  setScrollPosEnd() {
    this._setScrollPos(this.scrollbars.getScrollHeight());
  }

  setScrollPosNext() {
    const {highlightedIndex} = this.props;
    this._setScrollPos(highlightedIndex * this.highlightedSuggestionHeight);
  }

  setScrollPosPrevious() {
    const {highlightedIndex} = this.props;
    this._setScrollPos((highlightedIndex * this.highlightedSuggestionHeight) - this.highlightedSuggestionHeight);
  }

  render() {
    const {heightMax, autoHeight} = this.props;
    return (
      <div
        className='container-suggestion'
        onKeyDown={this.onKeyDown}
      >
        <Scrollbars
          autoHeight={autoHeight}
          autoHeightMax={heightMax}
          ref={(scrollbars) => {
            if (scrollbars) {
              this.scrollbars = scrollbars;
            }
          }}
        >
          <SuggestionList refHighlightedSuggestion={this.refHighlightedSuggestion} {...this.props}/>
        </Scrollbars>
      </div>
    );
  }
}

SuggestionListContainer.propTypes = {
  highlightedIndex: PropTypes.number.isRequired,
  heightMax: PropTypes.number,
  autoHeight: PropTypes.bool,
};

SuggestionListContainer.defaultProps = {
  heightMax: 300,
  autoHeight: true,
};

export default SuggestionListContainer;

