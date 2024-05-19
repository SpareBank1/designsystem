import React from 'react';
import { BaseMessage, BaseMessageProps } from './BaseMessage';
import { Icon } from '@sb1/ffe-icons-react';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    type: 'info' as const,
    icon: <Icon fileUrl="priority_high" />,
};

const TEST_ID = 'TEST_ID';

const renderBaseMessage = (props?: Partial<BaseMessageProps>) =>
    render(<BaseMessage {...defaultProps} {...props} data-testid={TEST_ID} />);

describe('<BaseMessage />', () => {
    it('renders the correct classes by default', () => {
        const { rerender, container } = render(
            <BaseMessage
                {...defaultProps}
                title="test title"
                data-testid={TEST_ID}
            />,
        );
        const baseMessage = screen.getByTestId(TEST_ID);
        expect(baseMessage.classList.contains('ffe-message-box')).toBe(true);

        const types = ['info', 'error', 'success', 'tips'] as const;

        types.forEach(type => {
            rerender(
                <BaseMessage
                    {...defaultProps}
                    title="test"
                    type={type}
                    data-testid={TEST_ID}
                />,
            );
            expect(
                baseMessage.classList.contains(`ffe-message-box--${type}`),
            ).toBe(true);
            expect(
                container.querySelector(`.ffe-message-box__icon`),
            ).toBeTruthy();
        });
    });

    it('renders with correct title class', () => {
        const { container } = renderBaseMessage({ title: 'test title' });
        expect(container.querySelector(`.ffe-message-box__title`)).toBeTruthy();
    });
    it('renders an icon by default', () => {
        const { container } = renderBaseMessage();
        expect(container.querySelector(`.ffe-message-box__icon`)).toBeTruthy();
    });
    it('renders the container with role="group" by default', () => {
        renderBaseMessage();
        const baseMessage = screen.getByTestId(TEST_ID);

        expect(baseMessage.getAttribute('role')).toBe('group');
    });
    it('renders a title if specified', () => {
        const { container } = renderBaseMessage({ title: 'test title' });

        expect(
            container.querySelector(`.ffe-message-box__title`)?.textContent,
        ).toBe('test title');
    });
    it('renders children if specified', () => {
        renderBaseMessage({ children: <p>children</p> });
        const baseMessage = screen.getByTestId(TEST_ID);

        expect(baseMessage.textContent).toContain('children');
    });
    it('renders onColoredBg styling if specified', () => {
        const { container } = renderBaseMessage({ onColoredBg: true });
        expect(
            container.querySelector('.ffe-message-box--coloredbg'),
        ).toBeTruthy();
    });
});
