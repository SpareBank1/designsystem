import React from 'react';
import { func, arrayOf, number, string, object, bool } from 'prop-types';
import Spinner from '@sb1/ffe-spinner-react';

import SuggestionItem from './SuggestionItem';

export default function SuggestionList(props) {
    const {
        suggestions,
        highlightedIndex,
        renderSuggestion,
        renderNoMatches = () => {},
        id,
        isLoading = false,
    } = props;
    return isLoading ? (
        <Spinner center={true} large={true} />
    ) : (
        <ul
            className="ffe-base-selector__suggestion-container-list"
            role="listbox"
            id={id}
        >
            {suggestions.length > 0 ? (
                suggestions.map((item, index) => (
                    <SuggestionItem
                        {...props}
                        key={index}
                        item={item}
                        id={`suggestion-item-${index}`}
                        isHighlighted={index === highlightedIndex}
                        render={renderSuggestion}
                    />
                ))
            ) : (
                <li>{renderNoMatches()}</li>
            )}
        </ul>
    );
}

SuggestionList.propTypes = {
    suggestions: arrayOf(object).isRequired,
    highlightedIndex: number.isRequired,
    renderSuggestion: func.isRequired,
    renderNoMatches: func,
    id: string.isRequired,
    isLoading: bool,
};
