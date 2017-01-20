import React, { PropTypes } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import SuggestionList from './suggestion-list';

class SuggestionListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  /*
   componentDidUpdate() {
   if (this._suggestionList !== null && this.props.highlightedItem > -1) {
   this.resetNativeScrollPosition();
   this.scrollHighlightedItemIntoView();
   }
   }
   */

  /*
   verticalScrollBarStyle() {
   return {
   background: '#676767',
   borderRadius: '4px',
   width: '5px'
   };
   }

   verticalContainerStyle() {
   return {
   width: '6px',
   background: 'transparent',
   opacity: '1'
   };
   }

   scrollAreaStyle() {
   return {maxHeight: '240px'};
   }


   resetNativeScrollPosition() {
   if (this.state.nativeScrollContainer) {
   const nativeScrollContainer = this.state.nativeScrollContainer;
   nativeScrollContainer.scrollTop = 0;
   this.ignoreScrollEvents = true;
   }
   }

   scrollHighlightedItemIntoView() {
   const selectedItem = this._suggestionList.getSelectedDOM();
   const itemRect = selectedItem.getBoundingClientRect();

   const scrollContainer = ReactDOM.findDOMNode(this._scrollarea);
   const scrollContainerRect = scrollContainer.getBoundingClientRect();

   if (itemRect.bottom > scrollContainerRect.bottom) {
   this.scrollTo(selectedItem.offsetTop + selectedItem.offsetHeight - scrollContainer.offsetHeight);
   } else if (itemRect.top < scrollContainerRect.top) {
   this.scrollTo(selectedItem.offsetTop);
   }
   }

   scrollTo(offsetYAxis) {
   this._scrollarea.scrollArea.scrollYTo(offsetYAxis);
   }

   onScroll(evt) {
   if (!this.ignoreScrollEvents) {
   // Need reference to the native scroll container (div) to reset the native scroll position
   this.setState({
   nativeScrollContainer: evt.target
   });
   }
   this.ignoreScrollEvents = false;
   }
   */

  render() {
    return (
      <div className="nfe-account-selector__dropdown">
        <Scrollbars style={{ width: 500, height: 300 }}>
          {this.props.suggestions.length ? (
              <SuggestionList highlightedIndex={-1} {...this.props}/>)
            : null
          }
        </Scrollbars>
      </div>
    );
  }
}

SuggestionListContainer.propTypes = {
  suggestions: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  renderSuggestion: PropTypes.func.isRequired
};

export default SuggestionListContainer;

