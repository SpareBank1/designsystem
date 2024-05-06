import React from 'react';
import { render, screen } from '@testing-library/react';
import { LinkText, LinkTextProp } from './LinkText';

const defaultProps = {
    children: 'avtaleteksten',
    href: '/avtale/abc123',
};

const renderLinkText = (props?: LinkTextProp) =>
    render(<LinkText {...defaultProps} {...props} />);

describe('<LinkText />', () => {
    it('renders an anchor tag by default', () => {
        renderLinkText();
        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('lets consumers provide an element', () => {
        render(<LinkText {...defaultProps} as="button" />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('adds ffe-link-text class', () => {
        renderLinkText();
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-link-text')).toBeTruthy();
    });

    it('does not add the --no-underline modifier by default', () => {
        renderLinkText();
        const link = screen.getByRole('link');
        expect(
            link.classList.contains('ffe-link-text--no-underline'),
        ).toBeFalsy();
    });

    it('adds the --no-underline modifier if underline prop is false', () => {
        renderLinkText({
            underline: false,
        });
        const link = screen.getByRole('link');
        expect(
            link.classList.contains('ffe-link-text--no-underline'),
        ).toBeTruthy();
    });

    it('adds the given className next to the ffe-link-text classes', () => {
        renderLinkText({
            className: 'some-other-class',
        });
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-link-text')).toBeTruthy();
        expect(link.classList.contains('some-other-class')).toBeTruthy();
    });

    it('passes on unrecognized props to the anchor', () => {
        renderLinkText({
            target: '_blank',
            rel: 'noopener noreferrer',
        });
        const link = screen.getByRole('link');
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
});
