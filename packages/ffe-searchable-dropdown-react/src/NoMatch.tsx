import React from 'react';

import { Paragraph } from '@sb1/ffe-core-react';
import { getNotMatchText } from './translations.js';
import { Locale } from './types.js';

interface NoMatchProps<Item extends Record<string, any>> {
    noMatch: {
        text?: string;
        dropdownList?: Item[];
    };
    noMatchMessageId: string;
    listToRender: Item[];
    locale: Locale;
}

export function NoMatch<Item extends Record<string, any>>({
    noMatch,
    noMatchMessageId,
    listToRender,
    locale,
}: NoMatchProps<Item>) {
    return (
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
                        {getNotMatchText(locale)}
                    </Paragraph>
                )
            )}
        </div>
    );
}
