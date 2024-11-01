import React from 'react';
import { txt } from './i18n/texts';

export type Thumb = 'THUMB_UP' | 'THUMB_DOWN';

interface FeedbackThumbsProps {
    locale: 'nb' | 'nn' | 'en';
    onClick: (thumb: Thumb) => void;
    headingId: string;
}

export const FeedbackThumbs: React.FC<FeedbackThumbsProps> = ({
    locale,
    onClick,
    headingId,
}) => {
    return (
        <div>
            <button
                aria-label={txt[locale].ARIA_LABEL_THUMB_UP}
                aria-describedby={headingId}
                className="ffe-feedback__thumb"
                onClick={() => onClick('THUMB_UP')}
                type="button"
            >
                <span className="ffe-icons ffe-icons--xl" />
            </button>
            <button
                aria-label={txt[locale].ARIA_LABEL_THUMB_DOWN}
                aria-describedby={headingId}
                className="ffe-feedback__thumb ffe-feedback__thumb--down"
                onClick={() => onClick('THUMB_DOWN')}
                type="button"
            >
                <span className="ffe-icons ffe-icons--xl" />
            </button>
        </div>
    );
};
