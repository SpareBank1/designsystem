import React from 'react';
import {
    SystemErrorMessage,
    SystemErrorMessageProps,
} from './SystemErrorMessage';
import { SystemInfoMessage, SystemInfoMessageProps } from './SystemInfoMessage';
import { SystemNewsMessage, SystemNewsMessageProps } from './SystemNewsMessage';
import {
    SystemSuccessMessage,
    SystemSuccessMessageProps,
} from './SystemSuccessMessage';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    children: <span>Message</span>,
};

const TEST_ID_ERROR = 'TEST_ID_ERROR';
const TEST_ID_INFO = 'TEST_ID_INFO';
const TEST_ID_NEWS = 'TEST_ID_NEWS';
const TEST_ID_SUCCESS = 'TEST_ID_SUCCESS';

const renderSystemErrorMessage = (props?: SystemErrorMessageProps) =>
    render(
        <SystemErrorMessage
            {...defaultProps}
            {...props}
            data-testid={TEST_ID_ERROR}
        />,
    );
const renderSystemInfoMessage = (props?: SystemInfoMessageProps) =>
    render(
        <SystemInfoMessage
            {...defaultProps}
            {...props}
            data-testid={TEST_ID_INFO}
        />,
    );
const renderSystemNewsMessage = (props?: SystemNewsMessageProps) =>
    render(
        <SystemNewsMessage
            {...defaultProps}
            {...props}
            data-testid={TEST_ID_NEWS}
        />,
    );
const renderSystemSuccessMessage = (props?: SystemSuccessMessageProps) =>
    render(
        <SystemSuccessMessage
            {...defaultProps}
            {...props}
            data-testid={TEST_ID_SUCCESS}
        />,
    );

describe('<SystemMessage />', () => {
    it('applies the correct modifier classes to each type', () => {
        renderSystemErrorMessage();
        const error = screen.getByTestId(TEST_ID_ERROR);
        expect(error.classList.contains('ffe-system-message-wrapper')).toBe(
            true,
        );
        expect(
            error.classList.contains('ffe-system-message-wrapper--error'),
        ).toBe(true);

        renderSystemInfoMessage();
        const info = screen.getByTestId(TEST_ID_INFO);
        expect(info.classList.contains('ffe-system-message-wrapper')).toBe(
            true,
        );
        expect(
            info.classList.contains('ffe-system-message-wrapper--info'),
        ).toBe(true);

        renderSystemNewsMessage();
        const news = screen.getByTestId(TEST_ID_NEWS);
        expect(news.classList.contains('ffe-system-message-wrapper')).toBe(
            true,
        );
        expect(
            news.classList.contains('ffe-system-message-wrapper--news'),
        ).toBe(true);

        renderSystemSuccessMessage();
        const success = screen.getByTestId(TEST_ID_SUCCESS);
        expect(success.classList.contains('ffe-system-message-wrapper')).toBe(
            true,
        );
        expect(
            success.classList.contains('ffe-system-message-wrapper--success'),
        ).toBe(true);
    });
    it('renders with correct aria-label', () => {
        renderSystemInfoMessage();
        const info = screen.getByTestId(TEST_ID_INFO);
        renderSystemSuccessMessage();
        const success = screen.getByTestId(TEST_ID_SUCCESS);
        expect(info.getAttribute('aria-label')).toBe('Infomelding');
        expect(success.getAttribute('aria-label')).toBe('Suksessmelding');
    });
    it('renders with role group on container', () => {
        renderSystemInfoMessage();
        const info = screen.getByTestId(TEST_ID_INFO);
        expect(info.getAttribute('role')).toBe('group');
    });

    it('renders a Norwegian aria label on the close button by default', () => {
        renderSystemInfoMessage();
        expect(
            screen.queryByRole('button', { name: 'Lukk' }),
        ).toBeInTheDocument();
    });
    it('renders an English aria-label if locale is "en"', () => {
        renderSystemInfoMessage({ locale: 'en' });
        expect(
            screen.queryByRole('button', { name: 'Close' }),
        ).toBeInTheDocument();
    });
});
