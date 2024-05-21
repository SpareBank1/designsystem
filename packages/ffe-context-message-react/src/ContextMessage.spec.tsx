import React from 'react';
import { Icon } from '@sb1/ffe-icons-react';
import { ContextErrorMessage } from './ContextErrorMessage';
import { ContextInfoMessage } from './ContextInfoMessage';
import { ContextSuccessMessage } from './ContextSuccessMessage';
import { ContextTipsMessage } from './ContextTipsMessage';
import { ContextMessage, ContextMessageProps } from './ContextMessage';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    children: <p>content</p>,
    messageType: 'tips' as const,
    role: 'group' as const,
    icon: <Icon fileUrl="info" />,
};

const renderContextMessage = (props?: Partial<ContextMessageProps>) =>
    render(<ContextMessage {...defaultProps} {...props} />);

describe('<ContextMessage />', () => {
    it('renders with provided content', () => {
        const { container } = renderContextMessage();
        expect(container.querySelector('.ffe-body-text p')?.textContent).toBe(
            'content',
        );
    });

    it('renders with provided header', () => {
        renderContextMessage({
            headerText: 'header text',
        });

        const headerComponent = screen.getByRole('heading', {
            name: 'header text',
        });
        expect(headerComponent.tagName).toBe('H2');
    });

    it('renders with provided header as given tag', () => {
        renderContextMessage({
            headerText: 'header text',
            headerElement: 'h5',
        });
        const headerComponent = screen.getByRole('heading', {
            name: 'header text',
        });
        expect(headerComponent.tagName).toBe('H5');
    });

    it('renders without header', () => {
        renderContextMessage();
        expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });
    it('set role="group" on outer container', () => {
        renderContextMessage();
        const group = screen.getByRole('group');
        expect(group.classList.contains('ffe-context-message')).toBeTruthy();
    });

    it('renders provided className to outermost container', () => {
        renderContextMessage({
            className: 'special special--mod',
        });
        const group = screen.getByRole('group');
        expect(group.classList.contains('special')).toBeTruthy();
        expect(group.classList.contains('special--mod')).toBeTruthy();
        expect(group.classList.contains('ffe-context-message')).toBeTruthy();
    });

    it('renders --compact modifier if compact prop is true', () => {
        renderContextMessage({
            compact: true,
        });
        const group = screen.getByRole('group');
        expect(
            group.classList.contains('ffe-context-message--compact'),
        ).toBeTruthy();
    });

    it('renders with context icon', () => {
        const { container } = renderContextMessage();
        expect(
            container.querySelector(
                '.ffe-icons.ffe-context-message-content__icon-span',
            ),
        ).toBeTruthy();
    });

    it('lets consumer add extra classes to icon', () => {
        const { container } = renderContextMessage({
            icon: (
                <Icon
                    fileUrl="info_i"
                    className="extra-extra-read-all-about-it"
                />
            ),
        });
        expect(
            container.querySelector(
                '.ffe-icons.ffe-context-message-content__icon-span.extra-extra-read-all-about-it',
            ),
        ).toBeTruthy();
    });

    it('passes unknown props on to the root DOM node', () => {
        render(<ContextMessage {...defaultProps} data-foo="bar" />);
        const group = screen.getByRole('group');
        expect(group.getAttribute('data-foo')).toBe('bar');
    });

    it('renders without close button by default', () => {
        renderContextMessage();
        expect(
            screen.queryByRole('button', { name: 'Lukk' }),
        ).not.toBeInTheDocument();
    });

    it('does not have aria-labelledby when header was not specified', () => {
        renderContextMessage();
        const group = screen.getByRole('group');
        expect(group.getAttribute('aria-labelledby')).toBeNull();
    });
});

describe('<ContextInfoMessage />', () => {
    it('renders ContextInfoMessage', () => {
        render(
            <ContextInfoMessage showCloseButton={true}>
                <p>content</p>
            </ContextInfoMessage>,
        );
        const group = screen.getByRole('group');
        expect(group.classList.contains('ffe-context-message')).toBeTruthy();
        expect(
            group.classList.contains('ffe-context-message--info'),
        ).toBeTruthy();
    });
});

describe('<ContextTipsMessage />', () => {
    it('renders ContextTipsMessage', () => {
        render(
            <ContextTipsMessage showCloseButton={true}>
                <p>content</p>
            </ContextTipsMessage>,
        );
        const group = screen.getByRole('group');
        expect(group.classList.contains('ffe-context-message')).toBeTruthy();
        expect(
            group.classList.contains('ffe-context-message--tips'),
        ).toBeTruthy();
    });
});

describe('Test ContextSuccessMessage', () => {
    it('renders ContextInfoMessage', () => {
        render(
            <ContextSuccessMessage showCloseButton={true}>
                <p>content</p>
            </ContextSuccessMessage>,
        );
        const group = screen.getByRole('group');
        expect(group.classList.contains('ffe-context-message')).toBeTruthy();
        expect(
            group.classList.contains('ffe-context-message--success'),
        ).toBeTruthy();
    });
});

describe('<ContextErrorMessage />', () => {
    it('renders ContextErrorMessage', () => {
        render(
            <ContextErrorMessage showCloseButton={true}>
                <p>content</p>
            </ContextErrorMessage>,
        );
        const alert = screen.getByRole('alert');

        expect(alert.classList.contains('ffe-context-message')).toBeTruthy();
        expect(
            alert.classList.contains('ffe-context-message--error'),
        ).toBeTruthy();
    });
});
