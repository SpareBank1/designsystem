import React from 'react';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { render, screen } from '@testing-library/react';
import { Optional } from './types';

const defaultProps = {
    children: 'Click me',
    buttonType: 'action' as const,
};
const renderBaseButton = (props?: Optional<BaseButtonProps, 'buttonType'>) =>
    render(<BaseButton {...defaultProps} {...props} />);

describe('<BaseButton />', () => {
    it('renders the correct classes', () => {
        renderBaseButton({ className: 'custom-class' });
        const button = screen.getByRole('button');

        expect(button.classList.contains('ffe-button')).toBeTruthy();
        expect(button.classList.contains('ffe-button--action')).toBeTruthy();
        expect(button.classList.contains('custom-class')).toBeTruthy();
    });

    it('renders the correct label', () => {
        renderBaseButton();
        const button = screen.getByRole('button');
        expect(button.textContent).toBe('Click me');
    });

    it('renders icons', () => {
        renderBaseButton({ leftIcon: <svg />, rightIcon: <svg /> });
        const button = screen.getByRole('button');
        expect(button.querySelector('.ffe-button__icon--left')).toBeTruthy();
        expect(button.querySelector('.ffe-button__icon--right')).toBeTruthy();
    });

    it('renders the specified component', () => {
        render(<BaseButton {...defaultProps} as="a" href="#" />);
        const link = screen.getByRole('link');
        expect(link).toBeInTheDocument();
    });

    describe('when loading', () => {
        it('sets the correct class', () => {
            renderBaseButton({ isLoading: true });
            const button = screen.getByRole('button');
            expect(button.classList.contains('ffe-button')).toBeTruthy();
            expect(
                button.classList.contains('ffe-button--loading'),
            ).toBeTruthy();
        });

        it('sets the correct aria attributes', () => {
            renderBaseButton({ isLoading: true });
            const button = screen.getByRole('button');
            expect(button.getAttribute('aria-busy')).toBe('true');
            expect(button.getAttribute('aria-disabled')).toBe('true');
        });

        it('does nothing for unsupported button type', () => {
            renderBaseButton({ isLoading: true, buttonType: 'shortcut' });
            const button = screen.getByRole('button');
            expect(
                button.classList.contains('ffe-button--loading'),
            ).toBeFalsy();
            expect(button.getAttribute('aria-busy')).toBe('false');
            expect(button.getAttribute('aria-disabled')).toBe('false');
        });
    });
});
