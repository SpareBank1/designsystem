import { bool, func, object, string } from 'prop-types';
import React from 'react';

function SuggestionItem(props) {
    const {
        item,
        id,
        isHighlighted,
        render,
        onSelect,
        refHighlightedSuggestion,
        style,
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
            style={style}
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
    style: object,
};

export default SuggestionItem;
