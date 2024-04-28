import React from 'react';
import i18n from './i18n/i18n';
import { func, oneOf, string } from 'prop-types';
import { ThumbUp, ThumbUpFill, ThumbDown, ThumbDownFill } from './icons';

export const Thumbs = {
    UP: 'THUMB_UP',
    DOWN: 'THUMB_DOWN',
};

const FeedbackThumbs = ({ language = 'nb', onClick, headingId }) => {
    return (
        <div>
            <button
                aria-label={i18n[language].ARIA_LABEL_THUMB_UP}
                aria-describedby={headingId}
                className="ffe-feedback__thumb"
                onClick={() => onClick(Thumbs.UP)}
                type="button"
            >
                <ThumbUp className="ffe-feedback__thumb-icon" />
                <ThumbUpFill className="ffe-feedback__thumb-icon--fill" />
            </button>
            <button
                aria-label={i18n[language].ARIA_LABEL_THUMB_DOWN}
                aria-describedby={headingId}
                className="ffe-feedback__thumb"
                onClick={() => onClick(Thumbs.DOWN)}
                type="button"
            >
                <ThumbDown className="ffe-feedback__thumb-icon" />
                <ThumbDownFill className="ffe-feedback__thumb-icon--fill" />
            </button>
        </div>
    );
};

export default FeedbackThumbs;

FeedbackThumbs.propTypes = {
    language: oneOf(['nb', 'nn', 'en']),
    onClick: func.isRequired,
    headingId: string.isRequired,
};
