import React from 'react';
import { number, bool } from 'prop-types';
import {Scrollbars} from 'react-custom-scrollbars';
import ListContainer from "./ListContainer";

class ScrollContainer extends React.Component {
    constructor(props) {
        super(props);
        this.refHighlightedListItem = this.refHighlightedListItem.bind(this);
    }

    refHighlightedListItem(listItem) {
        this.highlightedItemHeight = listItem.clientHeight;
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
        this._setScrollPos(highlightedIndex * this.highlightedItemHeight);
    }

    setScrollPosPrevious() {
        const {highlightedIndex} = this.props;
        this._setScrollPos((highlightedIndex * this.highlightedItemHeight) - this.highlightedItemHeight);
    }

    render() {
        const {heightMax, autoHeight} = this.props;
        return (
            <div
                className='ffe-searchable-dropdown__scroll-container'
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
                    <ListContainer refHighlightedListItem={this.refHighlightedListItem} {...this.props}/>
                </Scrollbars>
            </div>
        );
    }
}

ScrollContainer.propTypes = {
    highlightedIndex: number.isRequired,
    heightMax: number,
    autoHeight: bool,
};

ScrollContainer.defaultProps = {
    heightMax: 300,
    autoHeight: true,
};

export default ScrollContainer;
