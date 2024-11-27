import React, { useState, useRef, useId } from 'react';
import { flushSync } from 'react-dom';
import { txt } from './i18n/texts';
import { FeedbackThumbs, Thumb } from './FeedbackThumbs';
import classNames from 'classnames';
import { FeedbackExpanded, FeedbackExpandedProps } from './FeedbackExpanded';
import { HighFive } from './HighFive';

export interface FeedbackProps {
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
    locale?: 'nb' | 'nn' | 'en';
    onThumbClick: (thumb: Thumb) => void;
    onFeedbackSend: (feedbackText: string) => void;
    /** Set the background color of the feedback container. Accepts ffe-color variables without the "ffe-farge-" bit of the name. */
    bgColor?: 'hvit' | 'frost-30' | 'sand-30' | 'syrin-30' | 'vann-30';
    /** Set the background color of the feedback container in darkmode */
    bgDarkmodeColor?: 'svart' | 'natt';
    contactLink?: FeedbackExpandedProps['contactLink'];
    texts?: {
        feedbackNotSentHeading?: string;
    };
    className?: string;
}
export const Feedback: React.FC<FeedbackProps> = ({
    headingLevel,
    locale = 'nb',
    onThumbClick,
    onFeedbackSend,
    bgColor,
    bgDarkmodeColor,
    contactLink,
    texts,
    className,
}) => {
    const feedbackSentRef = useRef<HTMLHeadingElement>();
    const expandedRef = useRef<HTMLHeadingElement>();
    const [feedbackThumbClicked, setFeedbackThumbClicked] = useState<Thumb>();
    const [expanded, setExpanded] = useState(false);
    const [feedbackSent, setFeedbackSent] = useState(false);
    const headingId = useId();

    const feedbackClassnames = classNames(
        'ffe-feedback',
        {
            [`ffe-feedback--bg-${bgColor}`]: bgColor,
            [`ffe-feedback--dm-bg-${bgDarkmodeColor}`]: bgDarkmodeColor,
        },
        className,
    );

    const handleThumbClicked = (thumb: Thumb) => {
        setFeedbackThumbClicked(thumb);
        flushSync(() => {
            setExpanded(prevState => !prevState);
        });
        expandedRef.current?.focus();
        onThumbClick(thumb);
    };

    const handleFeedbackSent = (feedbackText: string) => {
        flushSync(() => {
            setFeedbackSent(true);
        });
        feedbackSentRef.current?.focus();
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
                        txt[locale].FEEDBACK_SENT_HEADING,
                    )}
                    <HighFive />
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
                        feedbackThumbClicked === 'THUMB_UP'
                            ? txt[locale].FEEDBACK_GOOD
                            : txt[locale].FEEDBACK_IMPROVE,
                    )}
                    <FeedbackExpanded
                        locale={locale}
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
                    { id: headingId, className: 'ffe-h4 ffe-h4--text-center' },
                    texts?.feedbackNotSentHeading ??
                        txt[locale].FEEDBACK_NOT_SENT_HEADING,
                )}
                <FeedbackThumbs
                    onClick={handleThumbClicked}
                    locale={locale}
                    headingId={headingId}
                />
            </div>
        </div>
    );
};
