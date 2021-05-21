import React from 'react';
import { arrayOf, object, shape, string } from 'prop-types';

import { Paragraph } from '@sb1/ffe-core-react';
import { getNotMatchText } from './translations';

const NoMatch = ({ noMatch, noMatchMessageId, listToRender }) => (
    <div>
        {noMatch.text ? (
            <div className="ffe-searchable-dropdown__no-match">
                <Paragraph id={noMatchMessageId}>{noMatch.text}</Paragraph>
            </div>
        ) : (
            listToRender.length === 0 && (
                <Paragraph
                    id={noMatchMessageId}
                    className="ffe-screenreader-only"
                >
                    {getNotMatchText()}
                </Paragraph>
            )
        )}
    </div>
);

NoMatch.propTypes = {
    noMatch: shape({
        text: string,
        dropdownList: arrayOf(object),
    }),
    noMatchMessageId: string,
    listToRender: arrayOf(object).isRequired,
};

export default NoMatch;
