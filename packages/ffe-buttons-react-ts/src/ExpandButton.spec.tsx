import React from 'react';
import { ExpandButton, ExpandButtonProps } from './ExpandButton';
import { render, screen } from '@testing-library/react';
import { Optional } from './types';

const defaultProps = {
    children: 'Click me',
    isExpanded: false,
};
const renderExpandButton = (
    props?: Optional<ExpandButtonProps, 'isExpanded'>,
) => render(<ExpandButton {...defaultProps} {...props} />);

describe('<ExpandButton />', () => {
    it('renders with correct classes', () => {
        renderExpandButton({ className: 'custom-class' });
        const button = screen.getByRole('button');

        expect(button.classList.contains('ffe-button')).toBeTruthy();
        expect(button.classList.contains('ffe-button--expand')).toBeTruthy();
        expect(button.classList.contains('custom-class')).toBeTruthy();
    });

    it('passes on any prop', () => {
        renderExpandButton({ 'aria-label': 'some label' });
        const button = screen.getByRole('button');

        expect(button.getAttribute('aria-label')).toEqual('some label');
    });

    it('does not use an aria-label since the button itself has a children acting as label', () => {
        renderExpandButton();
        const button = screen.getByRole('button');
        expect(button.getAttribute('aria-label')).toEqual(null);
    });

    it('sets ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        renderExpandButton({
            ref,
        });
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });

    describe('when expanded', () => {
        it('does not render children', () => {
            renderExpandButton({ isExpanded: true });
            const button = screen.getByRole('button');

            expect(button.textContent).toBe('');
        });
        it('sets correct class', () => {
            renderExpandButton({ isExpanded: true });
            const button = screen.getByRole('button');

            expect(
                button.classList.contains('ffe-button--expanded'),
            ).toBeTruthy();
        });
        it('sets aria-expanded prop', () => {
            renderExpandButton({ isExpanded: true });
            const button = screen.getByRole('button');
            expect(button.getAttribute('aria-expanded')).toEqual('true');
        });

        it('renders a KryssIkon', () => {
            renderExpandButton({ isExpanded: true });
            const button = screen.getByRole('button');

            expect(button.querySelector('.ffe-icons')).toBeTruthy();
        });

        it('uses the default aria-label property on the button', () => {
            renderExpandButton({ isExpanded: true });
            const button = screen.getByRole('button');
            expect(button.getAttribute('aria-label')).toBe('Lukk');
        });
    });
});
