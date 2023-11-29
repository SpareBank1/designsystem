import React from 'react';
import Symbol from '@sb1/ffe-symbols-react';
import i18n from './i18n/i18n';
import { func, oneOf } from 'prop-types';

export const Thumbs = {
    UP: 'THUMB_UP',
    DOWN: 'THUMB_DOWN',
};
const THUMB_SIZE = '2xl';

const FeedbackThumbs = ({ language, onClick }) => {
    const handleMouseEnter = event => {
        // eslint-disable-next-line no-param-reassign
        event.target.className = `ffe-symbol ffe-symbol--filled-400 ffe-symbol--${THUMB_SIZE}`;
    };

    const handleMouseLeave = event => {
        // eslint-disable-next-line no-param-reassign
        event.target.className = `ffe-symbol ffe-symbol--400 ffe-symbol--${THUMB_SIZE}`;
    };

    return (
        <div>
            <button
                aria-label={i18n[language].ARIA_LABEL_THUMB_UP}
                aria-describedby="feedback-heading"
                className="ffe-feedback__thumb"
                onClick={() => onClick(Thumbs.UP)}
            >
                <Symbol
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size={THUMB_SIZE}
                    icon="thumb_up"
                />
            </button>
            <button
                aria-label={i18n[language].ARIA_LABEL_THUMB_DOWN}
                aria-describedby="feedback-heading"
                className="ffe-feedback__thumb"
                onClick={() => onClick(Thumbs.DOWN)}
            >
                <Symbol
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    size={THUMB_SIZE}
                    icon="thumb_down"
                />
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
