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

    describe('when showing progress', () => {
        it('sets the correct class and fill width', () => {
            renderBaseButton({ progress: 40 });
            const button = screen.getByRole('progressbar');
            expect(
                button.classList.contains('ffe-button--progress'),
            ).toBeTruthy();
            expect(button.style.getPropertyValue('--progress-fill-width')).toBe(
                '40%',
            );
        });

        it('sets progressbar aria attributes', () => {
            renderBaseButton({ progress: 40 });
            const button = screen.getByRole('progressbar');
            expect(button.getAttribute('aria-valuenow')).toBe('40');
            expect(button.getAttribute('aria-valuemin')).toBe('0');
            expect(button.getAttribute('aria-valuemax')).toBe('100');
            expect(button.getAttribute('aria-busy')).toBe('true');
        });

        it('clamps the value to the 0–100 range', () => {
            renderBaseButton({ progress: 140 });
            const button = screen.getByRole('progressbar');
            expect(button.getAttribute('aria-valuenow')).toBe('100');
            expect(button.style.getPropertyValue('--progress-fill-width')).toBe(
                '100%',
            );
        });

        it('does nothing for unsupported button type', () => {
            renderBaseButton({ progress: 40, buttonType: 'shortcut' });
            const button = screen.getByRole('button');
            expect(
                button.classList.contains('ffe-button--progress'),
            ).toBeFalsy();
            expect(screen.queryByRole('progressbar')).toBeNull();
        });
    });

    describe('when pulsing', () => {
        it('renders the pulse element when pulseKey is set', () => {
            renderBaseButton({ pulseKey: 1 });
            const button = screen.getByRole('button');
            expect(button.querySelector('.ffe-button__pulse')).toBeTruthy();
        });

        it('does not render the pulse element without pulseKey', () => {
            renderBaseButton();
            const button = screen.getByRole('button');
            expect(button.querySelector('.ffe-button__pulse')).toBeFalsy();
        });

        it('remounts the pulse element when pulseKey changes', () => {
            const { rerender } = render(
                <BaseButton {...defaultProps} pulseKey={1} />,
            );
            const first = screen
                .getByRole('button')
                .querySelector('.ffe-button__pulse');
            rerender(<BaseButton {...defaultProps} pulseKey={2} />);
            const second = screen
                .getByRole('button')
                .querySelector('.ffe-button__pulse');
            expect(second).toBeTruthy();
            expect(second).not.toBe(first);
        });

        it('does nothing for unsupported button type', () => {
            renderBaseButton({ pulseKey: 1, buttonType: 'shortcut' });
            const button = screen.getByRole('button');
            expect(button.querySelector('.ffe-button__pulse')).toBeFalsy();
        });
    });
});
