import React from 'react';
import { LinkIcon, LinkIconProp } from './LinkIcon';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    children: <span>test</span>,
    href: '/avtale/abc123',
};
const renderLinkIcon = (props?: LinkIconProp) =>
    render(<LinkIcon {...defaultProps} {...props} />);
describe('<LinkIcon />', () => {
    it('renders an anchor tag by default', () => {
        renderLinkIcon();
        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('renders child element', () => {
        renderLinkIcon();
        const link = screen.getByRole('link');
        expect(link.innerHTML).toBe('<span>test</span>');
    });

    it('lets consumers provide an element', () => {
        render(<LinkIcon {...defaultProps} as="button" />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('adds ffe-link-icon class', () => {
        renderLinkIcon();
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-link-icon')).toBeTruthy();
    });

    it('adds the given className next to the ffe-link-icon classes', () => {
        renderLinkIcon({
            className: 'some-other-class',
        });
        const link = screen.getByRole('link');
        expect(link.classList.contains('ffe-link-icon')).toBeTruthy();
        expect(link.classList.contains('some-other-class')).toBeTruthy();
    });

    it('passes on unrecognized props to the anchor', () => {
        renderLinkIcon({
            target: '_blank',
            rel: 'noopener noreferrer',
        });
        const link = screen.getByRole('link');
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
    });
});
