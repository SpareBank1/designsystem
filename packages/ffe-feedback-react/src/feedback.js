import React, { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { Animation } from './animation';
import { func, oneOf, shape, string } from 'prop-types';
import i18n from './i18n/i18n';
import FeedbackThumbs, { Thumbs } from './feedback-thumbs';
import classNames from 'classnames';
import FeedbackExpanded from './feedback-expanded';
import { v4 as uuid } from 'uuid';

export const Feedback = ({
    headingLevel,
    language,
    onThumbClick,
    onFeedbackSend,
    bgColor,
    bgDarkmodeColor,
    contactLink,
}) => {
    const feedbackSentRef = useRef();
    const expandedRef = useRef();
    const [feedbackThumbClicked, setFeedbackThumbClicked] = useState();
    const [expanded, setExpanded] = useState(false);
    const [feedbackSent, setFeedbackSent] = useState(false);
    const headingId = useRef(uuid()).current;

    const feedbackClassnames = classNames('ffe-feedback', {
        [`ffe-feedback--bg-${bgColor}`]: bgColor,
        [`ffe-feedback--dm-bg-${bgDarkmodeColor}`]: bgDarkmodeColor,
    });

    const handleThumbClicked = thumb => {
        setFeedbackThumbClicked(thumb);
        flushSync(() => {
            setExpanded(prevState => !prevState);
        });
        expandedRef.current.focus();
        onThumbClick(thumb);
    };

    const handleFeedbackSent = feedbackText => {
        flushSync(() => {
            setFeedbackSent(true);
        });
        feedbackSentRef.current.focus();
        onFeedbackSend(feedbackText);
    };

    if (feedbackSent) {
        return (
            <div className={feedbackClassnames}>
                <div className="ffe-feedback__content">
                    {React.createElement(
                        `h${headingLevel}`,
                        {
                            ref: feedbackSentRef,
                            tabIndex: -1,
                            className: 'ffe-h4',
                        },
                        i18n[language].FEEDBACK_SENT_HEADING,
                    )}
                    <Animation />
                </div>
            </div>
        );
    }

    if (expanded) {
        return (
            <div className={feedbackClassnames}>
                <div className="ffe-feedback__content">
                    {React.createElement(
                        `h${headingLevel}`,
                        { ref: expandedRef, tabIndex: -1, className: 'ffe-h5' },
                        feedbackThumbClicked === Thumbs.UP
                            ? i18n[language].FEEDBACK_GOOD
                            : i18n[language].FEEDBACK_IMPROVE,
                    )}
                    <FeedbackExpanded
                        language={language}
                        onSend={handleFeedbackSent}
                        onCancel={() => setExpanded(false)}
                        contactLink={contactLink}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={feedbackClassnames}>
            <div className="ffe-feedback__content">
                {React.createElement(
                    `h${headingLevel}`,
                    { id: headingId, className: 'ffe-h4' },
                    i18n[language].FEEDBACK_NOT_SENT_HEADING,
                )}
                <FeedbackThumbs
                    onClick={handleThumbClicked}
                    language={language}
                    headingId={headingId}
                />
            </div>
        </div>
    );
};

export default Feedback;

Feedback.propTypes = {
    headingLevel: oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    language: oneOf(['nb', 'nn', 'en']),
    onThumbClick: func.isRequired,
    onFeedbackSend: func.isRequired,
    /** Set the background color of the feedback container. Accepts ffe-color variables without the "ffe-farge-" bit of the name. */
    bgColor: oneOf(['hvit', 'frost-30', 'sand-30', 'syrin-30', 'vann-30']),
    /** Set the background color of the feedback container in darkmode */
    bgDarkmodeColor: oneOf(['svart', 'natt']),
    contactLink: shape({
        url: string,
        linkText: string,
        onClick: func,
    }),
};

Feedback.defaultProps = {
    language: 'nb',
    contactLink: null,
};
