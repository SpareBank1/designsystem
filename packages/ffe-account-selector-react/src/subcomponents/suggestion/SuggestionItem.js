import classNames from 'classnames';
import { bool, func, object, string } from 'prop-types';
import React, { Component } from 'react';

class SuggestionItem extends Component {
    render() {
        const {
            item,
            id,
            isHighlighted,
            render,
            onSelect,
            refHighlightedSuggestion,
            style,
        } = this.props;
        return (
            <div
                ref={itemRef => {
                    if (itemRef && isHighlighted) {
                        refHighlightedSuggestion(itemRef);
                    }
                }}
                role="option"
                aria-selected={isHighlighted}
                id={id}
                onMouseDown={e => {
                    e.preventDefault();
                    onSelect(item);
                }}
                className={classNames('ffe-account-suggestion', {
                    'ffe-account-suggestion--highlighted': isHighlighted,
                })}
                tabIndex={-1}
                style={style}
            >
                {render(item)}
            </div>
        );
    }
}

SuggestionItem.propTypes = {
    item: object.isRequired,
    id: string.isRequired,
    isHighlighted: bool.isRequired,
    render: func.isRequired,
    onSelect: func.isRequired,
    refHighlightedSuggestion: func.isRequired,
    style: object,
};

export default SuggestionItem;
