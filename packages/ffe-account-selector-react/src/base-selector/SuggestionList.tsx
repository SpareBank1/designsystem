import React from 'react';
import { Spinner } from '@sb1/ffe-spinner-react';
import { SuggestionItem } from './SuggestionItem';

interface SuggestionListProps<Suggestion> {
    suggestions: Suggestion[];
    highlightedIndex: number;
    renderSuggestion: (suggestion: Suggestion) => React.ReactNode;
    renderNoMatches: () => React.ReactNode;
    id?: string;
    isLoading?: boolean;
    refHighlightedSuggestion: React.RefCallback<HTMLLIElement>;
    onSelect: (suggestion: Suggestion) => void;
}

export function SuggestionList<Suggestion>(
    props: SuggestionListProps<Suggestion>,
) {
    const {
        suggestions,
        highlightedIndex,
        renderSuggestion,
        renderNoMatches,
        id,
        isLoading = false,
        refHighlightedSuggestion,
        onSelect,
    } = props;
    return isLoading ? (
        <Spinner large={true} />
    ) : (
        <ul
            className="ffe-base-selector__suggestion-container-list"
            role="listbox"
            id={id}
        >
            {suggestions.length > 0 ? (
                suggestions.map((suggestion, index) => (
                    <SuggestionItem<Suggestion>
                        key={index}
                        suggestion={suggestion}
                        id={`suggestion-item-${index}`}
                        isHighlighted={index === highlightedIndex}
                        render={renderSuggestion}
                        refHighlightedSuggestion={refHighlightedSuggestion}
                        onSelect={onSelect}
                    />
                ))
            ) : (
                <li>{renderNoMatches()}</li>
            )}
        </ul>
    );
}
