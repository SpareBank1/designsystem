import React, { useState } from 'react';
import { LinkText, Paragraph } from '@sb1/ffe-core-react';
import { getLocaleTexts } from './i18n/getLocaleTexts';
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
    isNative?: boolean;
}

export const FeedbackExpanded: React.FC<FeedbackExpandedProps> = ({
    locale,
    handleFeedback,
    contactLink,
    includeConsent = false,
    isNative = false,
}) => {
    const localeTexts = getLocaleTexts(locale, isNative);
    const [feedbackText, setFeedbackText] = useState<string>();
    const [consentGiven, setConsentGiven] = useState<boolean>(false);

    const contactLinkElement = contactLink ? (
        <LinkText
            href={contactLink.url}
            className="ffe-feedback__link-button"
            onClick={contactLink?.onClick}
        >
            {contactLink.linkText ?? localeTexts.FEEDBACK_LINK_TEXT}
        </LinkText>
    ) : null;

    return (
        <>
            <Paragraph>
                {includeConsent
                    ? localeTexts.FEEDBACK_ANSWER_INCLUDE_CONSENT
                    : localeTexts.FEEDBACK_ANSWER}
                {contactLinkElement && localeTexts.QUESTIONS}
                {contactLinkElement}
            </Paragraph>
            <InputGroup
                className="ffe-feedback__textarea-container"
                label={localeTexts.FEEDBACK_IMPROVE}
                description={localeTexts.FEEDBACK_SENSITIVE}
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
                        {localeTexts.FEEDBACK_CONSENT}
                    </Checkbox>
                </div>
            )}

            <ButtonGroup
                className="ffe-feedback__button-group"
                ariaLabel={localeTexts.FEEDBACK_BUTTON_GROUP}
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
                    {localeTexts.FEEDBACK_BUTTON_SEND}
                </ActionButton>
                <TertiaryButton onClick={() => handleFeedback()}>
                    {localeTexts.FEEDBACK_BUTTON_CANCEL}
                </TertiaryButton>
            </ButtonGroup>
        </>
    );
};
