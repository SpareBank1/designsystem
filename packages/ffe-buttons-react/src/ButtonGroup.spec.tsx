import React from 'react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    thin: false,
};

const renderButtonGroup = (props?: Partial<ButtonGroupProps>) =>
    render(<ButtonGroup {...defaultProps} {...props} />);

describe('<ButtonGroup />', () => {
    it('renders without the the --thin modifier if thin is false', () => {
        renderButtonGroup({
            thin: false,
        });
        const buttonGroup = screen.getByRole('group');
        expect(buttonGroup.classList.contains('ffe-button-group')).toBe(true);
        expect(buttonGroup.classList.contains('ffe-button-group--thin')).toBe(
            false,
        );
    });

    it('applies the --thin modifier if thin is true', () => {
        renderButtonGroup({
            thin: true,
        });
        const buttonGroup = screen.getByRole('group');
        expect(buttonGroup.classList.contains('ffe-button-group')).toBe(true);
        expect(buttonGroup.classList.contains('ffe-button-group--thin')).toBe(
            true,
        );
    });

    it('applies the --inline modifier if inline is true', () => {
        renderButtonGroup({
            inline: true,
        });
        const buttonGroup = screen.getByRole('group');
        expect(buttonGroup.classList.contains('ffe-button-group')).toBe(true);
        expect(buttonGroup.classList.contains('ffe-button-group--inline')).toBe(
            true,
        );
    });

    it('applies the given className prop', () => {
        renderButtonGroup({
            className: 'my-class',
        });
        const buttonGroup = screen.getByRole('group');
        expect(buttonGroup.classList.contains('ffe-button-group')).toBe(true);
        expect(buttonGroup.classList.contains('my-class')).toBe(true);
    });

    it('should set aria-label when included as prop', () => {
        renderButtonGroup({
            ariaLabel: 'Skjemakontroller',
        });
        const buttonGroup = screen.getByRole('group');
        expect(buttonGroup.getAttribute('aria-label')).toBe(
            'Skjemakontroller',
        );
    });

    it('should not set aria-label when not included as prop', () => {
        renderButtonGroup();
        const buttonGroup = screen.getByRole('group');
        expect(buttonGroup.getAttribute('aria-label')).toBeNull();
    });
});
