import React, { useState } from 'react';
import { LinkText, Paragraph } from '@sb1/ffe-core-react';
import { txt } from './i18n/texts.js';
import { InputGroup, TextArea, Checkbox } from '@sb1/ffe-form-react';
import {
    ActionButton,
    ButtonGroup,
    TertiaryButton,
} from '@sb1/ffe-buttons-react';

export interface FeedbackExpandedProps {
    locale: 'nb' | 'nn' | 'en';
    handleFeedback: (feedbackText?: string, consentGiven?: boolean) => void;
    contactLink?: {
        url: string;
        onClick?: React.MouseEventHandler<HTMLAnchorElement>;
        linkText?: string;
    };
    includeConsent?: boolean;
}

export const FeedbackExpanded: React.FC<FeedbackExpandedProps> = ({
    locale,
    handleFeedback,
    contactLink,
    includeConsent = false,
}) => {
    const [feedbackText, setFeedbackText] = useState<string>();
    const [consentGiven, setConsentGiven] = useState<boolean>(false);

    const contactLinkElement = contactLink ? (
        <LinkText
            href={contactLink.url}
            className="ffe-feedback__link-button"
            onClick={contactLink?.onClick}
        >
            {contactLink.linkText ?? txt[locale].FEEDBACK_LINK_TEXT}
        </LinkText>
    ) : null;

    return (
        <>
            <Paragraph>
                {txt[locale].FEEDBACK_ANSWER}
                {contactLinkElement && txt[locale].QUESTIONS}
                {contactLinkElement}
            </Paragraph>
            <InputGroup
                className="ffe-feedback__textarea-container"
                label={txt[locale].FEEDBACK_IMPROVE}
                description={txt[locale].FEEDBACK_SENSITIVE}
            >
                <TextArea
                    data-testid="feedbackTextArea"
                    onChange={event => setFeedbackText(event.target.value)}
                    value={feedbackText}
                    rows={6}
                    maxLength={1000}
                    className="ffe-feedback__textarea"
                />
            </InputGroup>
            {includeConsent && (
                <div className="ffe-feedback__consent">
                    <Checkbox
                        checked={consentGiven}
                        onChange={event =>
                            setConsentGiven(event.target.checked)
                        }
                    >
                        {txt[locale].FEEDBACK_CONSENT}
                    </Checkbox>
                </div>
            )}

            <ButtonGroup
                className="ffe-feedback__button-group"
                ariaLabel={txt[locale].FEEDBACK_BUTTON_GROUP}
                thin={true}
            >
                <ActionButton
                    onClick={() => {
                        if (feedbackText) {
                            handleFeedback(
                                feedbackText,
                                includeConsent ? consentGiven : undefined,
                            );
                        }
                    }}
                >
                    {txt[locale].FEEDBACK_BUTTON_SEND}
                </ActionButton>
                <TertiaryButton onClick={() => handleFeedback()}>
                    {txt[locale].FEEDBACK_BUTTON_CANCEL}
                </TertiaryButton>
            </ButtonGroup>
        </>
    );
};
