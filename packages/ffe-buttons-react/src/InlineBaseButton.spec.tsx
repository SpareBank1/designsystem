import React from 'react';
import { InlineBaseButton, InlineBaseButtonProps } from './InlineBaseButton';
import { render, screen } from '@testing-library/react';
import { Optional } from './types';

const defaultProps = {
    children: 'Click me',
    buttonType: 'tertiary' as const,
};
const renderInlineBaseButton = (
    props?: Optional<InlineBaseButtonProps, 'buttonType'>,
) => render(<InlineBaseButton {...defaultProps} {...props} />);

describe('<InlineBaseButton />', () => {
    it('renders the correct classes', () => {
        renderInlineBaseButton({ className: 'custom-class' });

        const button = screen.getByRole('button');

        expect(button.classList.contains('ffe-inline-button')).toBeTruthy();
        expect(
            button.classList.contains('ffe-inline-button--tertiary'),
        ).toBeTruthy();
        expect(button.classList.contains('custom-class')).toBeTruthy();
    });

    it('renders the correct label', () => {
        renderInlineBaseButton();
        const button = screen.getByRole('button');
        expect(button.textContent).toBe('Click me');
    });

    it('renders icons', () => {
        renderInlineBaseButton({ leftIcon: <svg />, rightIcon: <svg /> });
        const button = screen.getByRole('button');
        expect(
            button.querySelector('.ffe-inline-button__icon--left'),
        ).toBeTruthy();
        expect(
            button.querySelector('.ffe-inline-button__icon--right'),
        ).toBeTruthy();
    });

    it('renders the specified component', () => {
        render(<InlineBaseButton {...defaultProps} as="a" href="#" />);
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
    });

    it('sets ref correctly', () => {
        const ref = React.createRef<HTMLButtonElement>();
        renderInlineBaseButton({
            ref,
        });
        const button = screen.getByRole('button');
        expect(button).toBe(ref.current);
    });
});
