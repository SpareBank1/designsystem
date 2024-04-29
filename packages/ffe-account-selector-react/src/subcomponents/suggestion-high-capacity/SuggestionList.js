import Spinner from '@sb1/ffe-spinner-react';
import {
    arrayOf,
    bool,
    func,
    number,
    object,
    shape,
    string,
    array,
} from 'prop-types';
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

Row.propTypes = {
    style: object,
    index: number,
    data: shape({
        forwardProps: object,
        suggestions: array,
        renderSuggestion: func,
        highlightedIndex: number,
    }),
};

export default function SuggestionList(props) {
    const {
        suggestions,
        highlightedIndex,
        renderSuggestion,
        renderNoMatches = () => {},
        id,
        isLoading = false,
        height = 300,
        itemSize = 55,
    } = props;
    return isLoading ? (
        <Spinner center={true} large={true} />
    ) : suggestions.length > 0 ? (
        <List
            height={
                suggestions.length * itemSize < height
                    ? suggestions.length * itemSize
                    : height
            }
            innerElementType={forwardRef((forwardProps, ref) => (
                <ul
                    ref={ref}
                    id={id}
                    className={'ffe-base-selector__suggestion-container-list'}
                    role="listbox"
                    {...forwardProps}
                />
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
        <ul
            className="ffe-base-selector__suggestion-container-list"
            role="listbox"
            id={id}
        >
            <li>{renderNoMatches()}</li>
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
    refList: object,
    height: number,
    itemSize: number,
};
