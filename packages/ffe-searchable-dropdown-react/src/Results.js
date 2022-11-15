import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {
    arrayOf,
    any,
    bool,
    func,
    number,
    object,
    oneOf,
    shape,
    string,
} from 'prop-types';

import { locales } from './translations';
import ListItemContainer from './ListItemContainer';
import NoMatch from './NoMatch';

const Results = ({
    isNoMatch,
    noMatch,
    listToRender,
    noMatchMessageId,
    ListItemBodyElement,
    refs,
    highlightedIndex,
    dropdownAttributes,
    locale,
    onChange,
}) => {
    return (
        <Scrollbars autoHeight={true} autoHeightMax={335}>
            {isNoMatch && (
                <NoMatch
                    noMatch={noMatch}
                    noMatchMessageId={noMatchMessageId}
                    listToRender={listToRender}
                />
            )}
            {listToRender.map((item, index) => (
                <ListItemContainer
                    key={Object.values(item).join('-')}
                    ref={refs[index]}
                    isHighlighted={highlightedIndex === index}
                    onClick={() => {
                        onChange(item);
                    }}
                    item={item}
                >
                    {props => (
                        <ListItemBodyElement
                            {...props}
                            dropdownAttributes={dropdownAttributes}
                            locale={locale}
                        />
                    )}
                </ListItemContainer>
            ))}
        </Scrollbars>
    );
};

Results.propTypes = {
    listToRender: arrayOf(object).isRequired,
    noMatch: shape({
        text: string,
        dropdownList: arrayOf(object),
    }),
    noMatchMessageId: string,
    ListItemBodyElement: func,
    highlightedIndex: number,
    dropdownAttributes: arrayOf(string).isRequired,
    locale: oneOf(Object.values(locales)).isRequired,
    refs: arrayOf(any).isRequired,
    onChange: func.isRequired,
    isNoMatch: bool.isRequired,
};

export default Results;
