import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Feedback } from './Feedback'; // Adjust the import path as needed

describe('Feedback Component', () => {
    it('should trigger onThumbClick when the thumb up is clicked', () => {
        const onThumbClickMock = jest.fn();

        render(
            <Feedback
                onThumbClick={onThumbClickMock}
                onFeedbackSend={() => {}}
            />,
        );

        const thumbButton = screen.getByLabelText('Gi tommel opp');
        fireEvent.click(thumbButton);

        expect(onThumbClickMock).toHaveBeenCalledTimes(1);
    });

    it('should trigger onThumbClick when the thumb down is clicked', () => {
        const onThumbClickMock = jest.fn();

        render(
            <Feedback
                onThumbClick={onThumbClickMock}
                onFeedbackSend={() => {}}
            />,
        );

        const thumbButton = screen.getByLabelText('Gi tommel ned');
        fireEvent.click(thumbButton);

        expect(onThumbClickMock).toHaveBeenCalledTimes(1);
    });

    it('should change the view when thumb up is clicked', () => {
        render(<Feedback onThumbClick={() => {}} onFeedbackSend={() => {}} />);

        const thumbButton = screen.getByLabelText('Gi tommel ned');
        fireEvent.click(thumbButton);

        expect(
            screen.getByText('Takk for tilbakemeldingen!'),
        ).toBeInTheDocument();
    });

    it('should not trigger onFeedbackSend if no text', () => {
        const onFeedbackSendMock = jest.fn();
        render(
            <Feedback
                onThumbClick={() => {}}
                onFeedbackSend={onFeedbackSendMock}
            />,
        );

        const thumbButton = screen.getByLabelText('Gi tommel opp');
        fireEvent.click(thumbButton);

        const sendButton = screen.getByText('Send tilbakemelding');
        fireEvent.click(sendButton);

        expect(onFeedbackSendMock).not.toHaveBeenCalled();
    });

    it('should trigger onFeedbackSend with text', () => {
        const onFeedbackSendMock = jest.fn();
        render(
            <Feedback
                onThumbClick={() => {}}
                onFeedbackSend={onFeedbackSendMock}
            />,
        );

        const thumbButton = screen.getByLabelText('Gi tommel opp');
        fireEvent.click(thumbButton);

        const feedbackInput = screen.getByLabelText(
            'Har du noe mer på hjertet? (valgfritt)',
        );
        fireEvent.change(feedbackInput, { target: { value: 'Test feedback' } });

        const sendButton = screen.getByText('Send tilbakemelding');
        fireEvent.click(sendButton);

        expect(onFeedbackSendMock).toHaveBeenCalledWith(
            'Test feedback',
            undefined,
        );
    });

    it('should trigger onFeedbackSend with text and false consent if not ticked', () => {
        const onFeedbackSendMock = jest.fn();
        render(
            <Feedback
                onThumbClick={() => {}}
                onFeedbackSend={onFeedbackSendMock}
                includeConsent={true}
            />,
        );

        const thumbButton = screen.getByLabelText('Gi tommel opp');
        fireEvent.click(thumbButton);

        const feedbackInput = screen.getByLabelText(
            'Har du noe mer på hjertet? (valgfritt)',
        );
        fireEvent.change(feedbackInput, { target: { value: 'Test feedback' } });

        const sendButton = screen.getByText('Send tilbakemelding');
        fireEvent.click(sendButton);

        expect(onFeedbackSendMock).toHaveBeenCalledWith('Test feedback', false);
    });

    it('should trigger onFeedbackSend with text and consent if ticked', () => {
        const onFeedbackSendMock = jest.fn();
        render(
            <Feedback
                onThumbClick={() => {}}
                onFeedbackSend={onFeedbackSendMock}
                includeConsent={true}
            />,
        );

        const thumbButton = screen.getByLabelText('Gi tommel opp');
        fireEvent.click(thumbButton);

        const feedbackInput = screen.getByLabelText(
            'Har du noe mer på hjertet? (valgfritt)',
        );
        fireEvent.change(feedbackInput, { target: { value: 'Test feedback' } });

        const consent = screen.getByLabelText(
            'Jeg samtykker til at jeg kan bli kontaktet angående tilbakemeldingen min.',
        );
        fireEvent.click(consent);

        const sendButton = screen.getByText('Send tilbakemelding');
        fireEvent.click(sendButton);

        expect(onFeedbackSendMock).toHaveBeenCalledWith('Test feedback', true);
    });

    it('should trigger onFinish if no text', () => {
        const onFeedbackSendMock = jest.fn();
        const onFinishMock = jest.fn();
        render(
            <Feedback
                onThumbClick={() => {}}
                onFeedbackSend={onFeedbackSendMock}
                onFinish={onFinishMock}
            />,
        );

        const thumbButton = screen.getByLabelText('Gi tommel opp');
        fireEvent.click(thumbButton);

        const finishButton = screen.getByText('Avslutt');
        fireEvent.click(finishButton);

        expect(onFeedbackSendMock).not.toHaveBeenCalled();
        expect(onFinishMock).toHaveBeenCalled()
    });

    it('should render with custom heading', () => {
        render(
            <Feedback
                onThumbClick={() => {}}
                onFeedbackSend={() => {}}
                texts={{ feedbackNotSentHeading: 'Custom Heading' }}
            />,
        );

        const heading = screen.getByText('Custom Heading');
        expect(heading).toBeInTheDocument();
    });

    it('should render with contact link', () => {
        const contactLink = {
            url: 'https://nav.no',
            linkText: 'Kontakt oss',
            onClick: jest.fn(),
        };

        render(
            <Feedback
                onThumbClick={() => {}}
                onFeedbackSend={() => {}}
                contactLink={contactLink}
            />,
        );

        const thumbButton = screen.getByLabelText('Gi tommel opp');
        fireEvent.click(thumbButton);

        const link = screen.getByText('Kontakt oss');
        expect(link).toBeInTheDocument();
    });

    it('should render with bgColor', () => {
        render(
            <Feedback
                onThumbClick={() => {}}
                onFeedbackSend={() => {}}
                bgColor="secondary"
            />,
        );

        const feedback = screen.getByText('Hva synes du om denne siden?');
        const parent = feedback.parentElement?.parentElement;
        expect(parent).toHaveClass('ffe-feedback--bg-secondary');
    });

    it('should render with large heading', () => {
        render(
            <Feedback
                onThumbClick={() => {}}
                onFeedbackSend={() => {}}
                headingLevel={2}
            />,
        );

        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
    });

    it('should render with correct language', () => {
        render(
            <Feedback
                onThumbClick={() => {}}
                onFeedbackSend={() => {}}
                locale="en"
            />,
        );

        const heading = screen.getByText('What do you think of this page?');
        expect(heading).toBeInTheDocument();
    });
});
