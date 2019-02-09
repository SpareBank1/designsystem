import Spinner from '@sb1/ffe-spinner-react';
import { arrayOf, bool, func, number, object, string } from 'prop-types';
import React, { forwardRef } from 'react';
import { FixedSizeList as List } from 'react-window';

import SuggestionItem from './SuggestionItem';

const Row = props => {
    const {
        style,
        index,
        data: { forwardProps, suggestions, renderSuggestion, highlightedIndex },
    } = props;

    return (
        <SuggestionItem
            {...forwardProps}
            item={suggestions[index]}
            id={`suggestion-item-${index}`}
            isHighlighted={index === highlightedIndex}
            render={renderSuggestion}
            style={style}
        />
    );
};

export default function SuggestionList(props) {
    const {
        suggestions,
        highlightedIndex,
        renderSuggestion,
        renderNoMatches,
        id,
        isLoading,
        height,
        itemSize,
    } = props;

    return isLoading ? (
        <Spinner center={true} large={true} />
    ) : suggestions.length > 0 ? (
        <List
            height={height}
            innerElementType={forwardRef((forwardProps, ref) => (
                <div ref={ref} id={id} role="listbox" {...forwardProps} />
            ))}
            itemCount={suggestions.length}
            itemSize={itemSize}
            itemData={{
                forwardProps: props,
                renderSuggestion,
                highlightedIndex,
                suggestions,
            }}
            ref={props.refList}
            style={{ overflow: false }}
        >
            {Row}
        </List>
    ) : (
        <li>{renderNoMatches()}</li>
    );
}

SuggestionList.propTypes = {
    suggestions: arrayOf(object).isRequired,
    highlightedIndex: number.isRequired,
    renderSuggestion: func.isRequired,
    renderNoMatches: func,
    id: string.isRequired,
    isLoading: bool,
    refList: object,
    height: number,
    itemSize: number,
};

SuggestionList.defaultProps = {
    renderNoMatches: () => {},
    isLoading: false,
    height: 300,
    itemSize: 55,
};
