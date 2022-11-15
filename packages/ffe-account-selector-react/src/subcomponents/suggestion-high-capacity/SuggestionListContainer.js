/* eslint jsx-a11y/no-static-element-interactions:0 */
import React from 'react';
import { bool, number } from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars-2';

import SuggestionList from './SuggestionList';

class SuggestionListContainer extends React.Component {
    listRef = React.createRef();

    constructor(props) {
        super(props);
        this.refHighlightedSuggestion = this.refHighlightedSuggestion.bind(
            this,
        );
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
        const { highlightedIndex } = this.props;
        this._setScrollPos(highlightedIndex * this.highlightedSuggestionHeight);
    }

    setScrollPosPrevious() {
        const { highlightedIndex } = this.props;
        this._setScrollPos(
            highlightedIndex * this.highlightedSuggestionHeight -
                this.highlightedSuggestionHeight,
        );
    }

    handleScroll = ({ target }) => {
        const { scrollTop } = target;

        this.listRef.current.scrollTo(scrollTop);
    };

    render() {
        const { heightMax, autoHeight } = this.props;
        return (
            <div
                className="ffe-base-selector__suggestion-container"
                onKeyDown={this.onKeyDown}
            >
                <Scrollbars
                    autoHeight={autoHeight}
                    autoHeightMax={heightMax}
                    ref={scrollbars => {
                        if (scrollbars) {
                            this.scrollbars = scrollbars;
                        }
                    }}
                    onScroll={this.handleScroll}
                >
                    <SuggestionList
                        height={heightMax}
                        refList={this.listRef}
                        refHighlightedSuggestion={this.refHighlightedSuggestion}
                        {...this.props}
                    />
                </Scrollbars>
            </div>
        );
    }
}

SuggestionListContainer.propTypes = {
    highlightedIndex: number.isRequired,
    heightMax: number,
    autoHeight: bool,
};

SuggestionListContainer.defaultProps = {
    heightMax: 300,
    autoHeight: true,
};

export default SuggestionListContainer;
