import React from 'react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import { render, screen } from '@testing-library/react';

const defaultProps = {
    thin: false,
};

const renderButtonGroup = (props?: ButtonGroupProps) =>
    render(<ButtonGroup {...defaultProps} {...props} />);

describe('<ButtonGroup />', () => {
    it('renders without the the --thin modifier if thin is false', () => {
        renderButtonGroup({
            thin: false,
        });
        const buttonGroup = screen.getByTestId('button-group');
        expect(buttonGroup.classList.contains('ffe-button-group')).toBe(true);
        expect(buttonGroup.classList.contains('ffe-button-group--thin')).toBe(
            false,
        );
    });

    it('applies the --thin modifier if thin is true', () => {
        renderButtonGroup({
            thin: true,
        });
        const buttonGroup = screen.getByTestId('button-group');
        expect(buttonGroup.classList.contains('ffe-button-group')).toBe(true);
        expect(buttonGroup.classList.contains('ffe-button-group--thin')).toBe(
            true,
        );
    });

    it('applies the --inline modifier if inline is true', () => {
        renderButtonGroup({
            inline: true,
        });
        const buttonGroup = screen.getByTestId('button-group');
        expect(buttonGroup.classList.contains('ffe-button-group')).toBe(true);
        expect(buttonGroup.classList.contains('ffe-button-group--inline')).toBe(
            true,
        );
    });

    it('applies the given className prop', () => {
        renderButtonGroup({
            className: 'my-class',
        });
        const buttonGroup = screen.getByTestId('button-group');
        expect(buttonGroup.classList.contains('ffe-button-group')).toBe(true);
        expect(buttonGroup.classList.contains('my-class')).toBe(true);
    });
});
