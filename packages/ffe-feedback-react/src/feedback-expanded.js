import React, { useState } from 'react';
import { Paragraph } from '@sb1/ffe-core-react';
import i18n from './i18n/i18n';
import { InputGroup, TextArea } from '@sb1/ffe-form-react';
import {
    ActionButton,
    ButtonGroup,
    TertiaryButton,
} from '@sb1/ffe-buttons-react';
import { func, oneOf, shape, string } from 'prop-types';

const FeedbackExpanded = ({ language, onSend, onCancel, contactLink }) => {
    const [feedbackText, setFeedbackText] = useState('');
    const [fieldMessage, setFieldMessage] = useState(undefined);

    const validateMessage = () => {
        if (feedbackText.length < 3) {
            setFieldMessage(i18n[language].FEEDBACK_SHORT);
            return false;
        }
        setFieldMessage(undefined);
        return true;
    };

    const isValidContactLink =
        contactLink && (contactLink.url || contactLink.onClick);

    const getLinkButton = () => (
        <TertiaryButton
            element={'a'}
            href={contactLink.url}
            className="ffe-feedback__link-button"
            onClick={contactLink.onClick}
        >
            {contactLink.linkText ?? i18n[language].FEEDBACK_LINKTEXT}
        </TertiaryButton>
    );

    return (
        <>
            <Paragraph>
                {i18n[language].FEEDBACK_ANSWER}
                {isValidContactLink && i18n[language].QUESTIONS}
                {isValidContactLink && getLinkButton()}
            </Paragraph>
            <Paragraph>{i18n[language].FEEDBACK_SENSITIVE}</Paragraph>
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
                    title={i18n[language].FEEDBACK_IMPROVE}
                />
            </InputGroup>
            <ButtonGroup className="ffe-feedback__button-group">
                <ActionButton
                    onClick={() => {
                        if (validateMessage()) {
                            onSend(feedbackText);
                        }
                    }}
                >
                    {i18n[language].FEEDBACK_BUTTON_SEND}
                </ActionButton>
                <TertiaryButton onClick={onCancel}>
                    {i18n[language].FEEDBACK_BUTTON_CANCEL}
                </TertiaryButton>
            </ButtonGroup>
        </>
    );
};

export default FeedbackExpanded;

FeedbackExpanded.propTypes = {
    language: oneOf(['nb', 'nn', 'en']),
    onSend: func.isRequired,
    onCancel: func.isRequired,
    contactLink: shape({
        url: string,
        linkText: string,
        onClick: func,
    }),
};

FeedbackExpanded.defaultProps = {
    language: 'nb',
    contactLink: null,
};
