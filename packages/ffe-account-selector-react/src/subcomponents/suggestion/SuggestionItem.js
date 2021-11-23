import React from 'react';
import { bool, func, object, string } from 'prop-types';

function SuggestionItem(props) {
    const {
        item,
        id,
        isHighlighted,
        render,
        onSelect,
        refHighlightedSuggestion,
    } = props;
    return (
        <li
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
            tabIndex={-1}
        >
            {render(item)}
        </li>
    );
}

SuggestionItem.propTypes = {
    item: object.isRequired,
    id: string.isRequired,
    isHighlighted: bool.isRequired,
    render: func.isRequired,
    onSelect: func.isRequired,
    refHighlightedSuggestion: func.isRequired,
};

export default SuggestionItem;
