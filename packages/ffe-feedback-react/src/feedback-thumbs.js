import React from 'react';
import i18n from './i18n/i18n';
import { func, oneOf } from 'prop-types';
import { ThumbUp, ThumbUpFill, ThumbDown, ThumbDownFill } from './icons';

export const Thumbs = {
    UP: 'THUMB_UP',
    DOWN: 'THUMB_DOWN',
};

const FeedbackThumbs = ({ language, onClick }) => {
    return (
        <div>
            <button
                aria-label={i18n[language].ARIA_LABEL_THUMB_UP}
                aria-describedby="feedback-heading"
                className="ffe-feedback__thumb"
                onClick={() => onClick(Thumbs.UP)}
            >
                <ThumbUp className="ffe-feedback__thumb-icon" />
                <ThumbUpFill className="ffe-feedback__thumb-icon--fill" />
            </button>
            <button
                aria-label={i18n[language].ARIA_LABEL_THUMB_DOWN}
                aria-describedby="feedback-heading"
                className="ffe-feedback__thumb"
                onClick={() => onClick(Thumbs.DOWN)}
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
};

FeedbackThumbs.defaultProps = {
    language: 'nb',
};
