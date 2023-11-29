import React, { useState } from 'react';
import { Heading2 } from '@sb1/ffe-core-react';
import { Animation } from './animation';
import { func, oneOf, shape, string } from 'prop-types';
import i18n from './i18n/i18n';
import FeedbackThumbs, { Thumbs } from './feedback-thumbs';
import classNames from 'classnames';
import FeedbackExpanded from './feedback-expanded';

export const Feedback = ({
    language,
    onThumbClick,
    onFeedbackSend,
    bgColor,
    bgDarkmodeColor,
    contactLink,
}) => {
    const [feedbackThumbClicked, setFeedbackThumbClicked] = useState();
    const [expanded, setExpanded] = useState(false);
    const [feedbackSent, setFeedbackSent] = useState(false);

    const feedbackClassnames = classNames('ffe-feedback', {
        [`ffe-feedback--bg-${bgColor}`]: bgColor,
        [`ffe-feedback--dm-bg-${bgDarkmodeColor}`]: bgDarkmodeColor,
    });

    const handleThumbClicked = thumb => {
        setFeedbackThumbClicked(thumb);
        setExpanded(!expanded);
        onThumbClick(thumb);
    };

    const handleFeedbackSent = feedbackText => {
        setFeedbackSent(true);
        onFeedbackSend(feedbackText);
    };

    if (feedbackSent) {
        return (
            <div className={feedbackClassnames}>
                <div className="ffe-feedback__content">
                    <Heading2 lookLike={4}>
                        {i18n[language].FEEDBACK_SENT_HEADING}
                    </Heading2>
                    <Animation />
                </div>
            </div>
        );
    }

    if (expanded) {
        return (
            <div className={feedbackClassnames}>
                <div className="ffe-feedback__content">
                    {feedbackThumbClicked === Thumbs.UP ? (
                        <Heading2 lookLike={5}>
                            {i18n[language].FEEDBACK_GOOD}
                        </Heading2>
                    ) : (
                        <Heading2 lookLike={5}>
                            {i18n[language].FEEDBACK_IMPROVE}
                        </Heading2>
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
                <Heading2 id="feedback-heading" lookLike={4}>
                    {i18n[language].FEEDBACK_NOT_SENT_HEADING}
                </Heading2>
                <FeedbackThumbs
                    onClick={handleThumbClicked}
                    language={language}
                />
            </div>
        </div>
    );
};

export default Feedback;

Feedback.propTypes = {
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
