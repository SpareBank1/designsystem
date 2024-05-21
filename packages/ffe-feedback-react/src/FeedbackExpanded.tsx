import React, { useState } from 'react';
import { Paragraph } from '@sb1/ffe-core-react';
import { texts } from './i18n/texts';
import { InputGroup, TextArea } from '@sb1/ffe-form-react';
import {
    ActionButton,
    ButtonGroup,
    TertiaryButton,
} from '@sb1/ffe-buttons-react';

export interface FeedbackExpandedProps {
    locale: 'nb' | 'nn' | 'en';
    onSend: (feedbackText: string) => void;
    onCancel: () => void;
    contactLink?: {
        url: string;
        onClick?: React.MouseEventHandler<HTMLAnchorElement>;
        linkText?: string;
    };
}

export const FeedbackExpanded: React.FC<FeedbackExpandedProps> = ({
    locale,
    onSend,
    onCancel,
    contactLink,
}) => {
    const [feedbackText, setFeedbackText] = useState<string>();
    const [fieldMessage, setFieldMessage] = useState<string>();

    const validateMessage = () => {
        if (feedbackText && feedbackText?.length >= 3) {
            setFieldMessage(undefined);
            return true;
        }
        setFieldMessage(texts[locale].FEEDBACK_SHORT);
        return false;
    };

    const contactLinkElement = contactLink ? (
        <TertiaryButton
            as="a"
            href={contactLink.url}
            className="ffe-feedback__link-button"
            onClick={contactLink?.onClick}
        >
            {contactLink.linkText ?? texts[locale].FEEDBACK_LINKTEXT}
        </TertiaryButton>
    ) : null;

    return (
        <>
            <Paragraph>
                {texts[locale].FEEDBACK_ANSWER}
                {contactLinkElement && texts[locale].QUESTIONS}
                {contactLinkElement}
            </Paragraph>
            <Paragraph>{texts[locale].FEEDBACK_SENSITIVE}</Paragraph>
            <InputGroup
                className="ffe-feedback__textarea-container"
                fieldMessage={fieldMessage}
            >
                <TextArea
                    data-testid="feedbackTextArea"
                    onChange={event => setFeedbackText(event.target.value)}
                    value={feedbackText}
                    rows={6}
                    maxLength={1000}
                    id="textarea-feedback"
                    onBlur={validateMessage}
                    title={texts[locale].FEEDBACK_IMPROVE}
                />
            </InputGroup>
            <ButtonGroup className="ffe-feedback__button-group">
                <ActionButton
                    onClick={() => {
                        if (validateMessage() && feedbackText) {
                            onSend(feedbackText);
                        }
                    }}
                >
                    {texts[locale].FEEDBACK_BUTTON_SEND}
                </ActionButton>
                <TertiaryButton onClick={onCancel}>
                    {texts[locale].FEEDBACK_BUTTON_CANCEL}
                </TertiaryButton>
            </ButtonGroup>
        </>
    );
};
