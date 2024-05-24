import React from 'react';

export interface SuggestionItemProps<Suggestion> {
    suggestion: Suggestion;
    id: string;
    isHighlighted: boolean;
    render: (suggestion: Suggestion) => React.ReactNode;
    onSelect: (suggestion: Suggestion) => void;
    refHighlightedSuggestion: React.RefCallback<HTMLLIElement>;
}

export function SuggestionItem<Suggestion>(
    props: SuggestionItemProps<Suggestion>,
) {
    const {
        suggestion,
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
                onSelect(suggestion);
            }}
            tabIndex={-1}
        >
            {render(suggestion)}
        </li>
    );
}
