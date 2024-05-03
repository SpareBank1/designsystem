/* eslint jsx-a11y/no-static-element-interactions:0 */
import React from 'react';
import { bool, func, number } from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars-2';

import SuggestionList from './SuggestionList';

class SuggestionListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.refHighlightedSuggestion =
            this.refHighlightedSuggestion.bind(this);
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

    render() {
        const { heightMax = 300, autoHeight = true } = this.props;
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
                >
                    <SuggestionList
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
    renderSuggestion: func.isRequired,
};

export default SuggestionListContainer;
