import React from 'react';
import { txt } from './i18n/texts';
import { ThumbUp, ThumbUpFill, ThumbDown, ThumbDownFill } from './icons';

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
                <ThumbUp className="ffe-feedback__thumb-icon" />
                <ThumbUpFill className="ffe-feedback__thumb-icon--fill" />
            </button>
            <button
                aria-label={txt[locale].ARIA_LABEL_THUMB_DOWN}
                aria-describedby={headingId}
                className="ffe-feedback__thumb"
                onClick={() => onClick('THUMB_DOWN')}
                type="button"
            >
                <ThumbDown className="ffe-feedback__thumb-icon" />
                <ThumbDownFill className="ffe-feedback__thumb-icon--fill" />
            </button>
        </div>
    );
};
