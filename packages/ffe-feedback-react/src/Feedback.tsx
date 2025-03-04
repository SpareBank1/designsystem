import React, { useState, useRef, useId } from 'react';
import { flushSync } from 'react-dom';
import { txt } from './i18n/texts';
import { FeedbackThumbs, Thumb } from './FeedbackThumbs';
import classNames from 'classnames';
import { FeedbackExpanded, FeedbackExpandedProps } from './FeedbackExpanded';
import { HighFive } from './HighFive';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type Locale = 'nb' | 'nn' | 'en';
type BgColor = 'primary' | 'secondary' | 'tertiary';

export interface FeedbackProps {
    headingLevel?: HeadingLevel;
    locale?: Locale;
    onThumbClick: (thumb: Thumb) => void;
    onFeedbackSend: (feedbackText: string) => void;
    bgColor?: BgColor;
    contactLink?: FeedbackExpandedProps['contactLink'];
    texts?: {
        feedbackNotSentHeading?: string;
    };
    className?: string;
}

export const Feedback = ({
    headingLevel = 5,
    locale = 'nb',
    onThumbClick,
    onFeedbackSend,
    bgColor,
    contactLink,
    texts,
    className,
}: FeedbackProps) => {
    const feedbackSentRef = useRef<HTMLHeadingElement>(null);
    const expandedRef = useRef<HTMLHeadingElement>(null);
    const [feedbackThumbClicked, setFeedbackThumbClicked] = useState<
        Thumb | undefined
    >();
    const [expanded, setExpanded] = useState(false);
    const [feedbackSent, setFeedbackSent] = useState(false);
    const headingId = useId();

    const feedbackClassnames = classNames(
        'ffe-feedback',
        {
            [`ffe-feedback--bg-${bgColor}`]: bgColor,
        },
        className,
    );

    const handleThumbClicked = (thumb: Thumb) => {
        setFeedbackThumbClicked(thumb);
        flushSync(() => {
            setExpanded(true);
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

    const renderHeading = (
        level: HeadingLevel,
        text: string,
        options?: {
            ref?: React.RefObject<HTMLHeadingElement>;
            tabIndex?: number;
            id?: string;
            textCenter?: boolean;
        },
    ) => {
        const { ref, tabIndex, id, textCenter } = options || {};

        const headingClassName = classNames(
            `ffe-h${level}`,
            { [`ffe-h${level}--text-center`]: textCenter },
            'ffe-feedback__heading',
        );

        return React.createElement(
            `h${level}`,
            {
                ref,
                id,
                tabIndex,
                className: headingClassName,
            },
            text,
        );
    };

    if (feedbackSent) {
        return (
            <div className={feedbackClassnames}>
                <div className="ffe-feedback__content">
                    {renderHeading(
                        headingLevel,
                        txt[locale].FEEDBACK_SENT_HEADING,
                        { ref: feedbackSentRef, tabIndex: -1 },
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
                    {renderHeading(
                        headingLevel,
                        feedbackThumbClicked === 'THUMB_UP'
                            ? txt[locale].FEEDBACK_GOOD
                            : txt[locale].FEEDBACK_IMPROVE,
                        { ref: expandedRef, tabIndex: -1 },
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
                {renderHeading(
                    headingLevel,
                    texts?.feedbackNotSentHeading ??
                        txt[locale].FEEDBACK_NOT_SENT_HEADING,
                    { id: headingId, textCenter: true },
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
