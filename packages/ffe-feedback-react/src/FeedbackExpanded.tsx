import React, { useState } from 'react';
import { Paragraph } from '@sb1/ffe-core-react';
import { txt } from './i18n/texts';
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
        setFieldMessage(txt[locale].FEEDBACK_SHORT);
        return false;
    };

    const contactLinkElement = contactLink ? (
        <TertiaryButton
            as="a"
            href={contactLink.url}
            className="ffe-feedback__link-button"
            onClick={contactLink?.onClick}
        >
            {contactLink.linkText ?? txt[locale].FEEDBACK_LINK_TEXT}
        </TertiaryButton>
    ) : null;

    return (
        <>
            <Paragraph>
                {txt[locale].FEEDBACK_ANSWER}
                {contactLinkElement && txt[locale].QUESTIONS}
                {contactLinkElement}
            </Paragraph>
            <Paragraph>{txt[locale].FEEDBACK_SENSITIVE}</Paragraph>
            <InputGroup
                className="ffe-feedback__textarea-container"
                fieldMessage={fieldMessage}
                label={
                    // htmlFor kommer fra InputGroup
                    // eslint-disable-next-line jsx-a11y/label-has-for
                    <label className="ffe-screenreader-only">
                        {txt[locale].FEEDBACK_IMPROVE}
                    </label>
                }
            >
                <TextArea
                    data-testid="feedbackTextArea"
                    onChange={event => setFeedbackText(event.target.value)}
                    value={feedbackText}
                    rows={6}
                    maxLength={1000}
                    onBlur={validateMessage}
                />
            </InputGroup>
            <ButtonGroup
                className="ffe-feedback__button-group"
                ariaLabel={txt[locale].FEEDBACK_BUTTON_GROUP}
            >
                <ActionButton
                    onClick={() => {
                        if (validateMessage() && feedbackText) {
                            onSend(feedbackText);
                        }
                    }}
                >
                    {txt[locale].FEEDBACK_BUTTON_SEND}
                </ActionButton>
                <TertiaryButton onClick={onCancel}>
                    {txt[locale].FEEDBACK_BUTTON_CANCEL}
                </TertiaryButton>
            </ButtonGroup>
        </>
    );
};
