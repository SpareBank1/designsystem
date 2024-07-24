import React from 'react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { render, screen, fireEvent } from '@testing-library/react';

const renderCheckbox = (props?: Partial<CheckboxProps>) =>
    render(
        <Checkbox onChange={() => {}} {...props}>
            children
        </Checkbox>,
    );

describe('<Checkbox />', () => {
    it('should render a input', () => {
        renderCheckbox();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should call onChange when clicked', () => {
        const spy = jest.fn();
        renderCheckbox({ onChange: spy });
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should render a default value if passed', () => {
        const { rerender } = render(
            <Checkbox onChange={() => {}}>children</Checkbox>,
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();
        rerender(
            <Checkbox onChange={() => {}} checked={true}>
                children
            </Checkbox>,
        );
        expect(checkbox).toBeChecked();
    });

    it('should apply the same id to <label> and <input>', () => {
        const { container } = renderCheckbox({ name: 'Some text goes here' });
        const label = container.querySelector('label');
        const checkbox = screen.getByRole('checkbox');

        expect(label?.getAttribute('for')).toBe(checkbox.getAttribute('id'));
    });

    it('should support noMargins', () => {
        const { container, rerender } = render(
            <Checkbox onChange={() => {}} noMargins={false}>
                children
            </Checkbox>,
        );
        const label = container.querySelector('label');

        expect(
            label?.classList.contains('ffe-checkbox--no-margin'),
        ).toBeFalsy();

        rerender(
            <Checkbox onChange={() => {}} noMargins={true}>
                children
            </Checkbox>,
        );
        expect(
            label?.classList.contains('ffe-checkbox--no-margin'),
        ).toBeTruthy();
    });

    it('should support inline', () => {
        const { container, rerender } = render(
            <Checkbox onChange={() => {}} inline={true}>
                children
            </Checkbox>,
        );
        const label = container.querySelector('label');
        expect(label?.classList.contains('ffe-checkbox--inline')).toBeTruthy();

        rerender(
            <Checkbox onChange={() => {}} inline={false}>
                children
            </Checkbox>,
        );
        expect(label?.classList.contains('ffe-checkbox--inline')).toBeFalsy();
    });

    it('should support aria-invalid', () => {
        renderCheckbox({ 'aria-invalid': 'false' });
        const checkbox = screen.getByRole('checkbox');

        expect(checkbox.getAttribute('aria-invalid')).toBe('false');
    });

    it('should set arbitrary props (rest) on input', () => {
        renderCheckbox({
            name: 'checkbox',
            tabIndex: -1,
        });
        const checkbox = screen.getByRole('checkbox');

        expect(checkbox.getAttribute('name')).toBe('checkbox');
        expect(checkbox.getAttribute('tabIndex')).toBe('-1');
    });

    it('should render children if it is a function', () => {
        const { container } = render(
            <Checkbox onChange={() => {}}>
                {({ htmlFor, className }) => (
                    <label className={className} htmlFor={htmlFor}>
                        Hello world
                    </label>
                )}
            </Checkbox>,
        );
        const label = container.querySelector('label');

        expect(label?.textContent).toBe('Hello world');
    });

    it('should render with a hidden label', () => {
        const { container } = renderCheckbox({
            'aria-label': 'I am label',
            hiddenLabel: true,
        });

        const label = container.querySelector('.ffe-checkbox--hidden-label');
        const input = container.querySelector('.ffe-hidden-checkbox');
        const labelContent = container.querySelector('.ffe-checkbox__content');

        expect(label).toBeTruthy();
        expect(labelContent?.innerHTML).toBe('children');
        expect(input?.getAttribute('aria-label')).toBe('I am label');
    });

    it('ads the on colored on-colored-bg modifier', () => {
        const { container } = render(
            <Checkbox onColoredBg={true} onChange={() => {}}>
                {({ htmlFor, className }) => (
                    <label className={className} htmlFor={htmlFor}>
                        Hello world
                    </label>
                )}
            </Checkbox>,
        );
        const label = container.querySelector('label');
        expect(
            label?.classList.contains('ffe-checkbox--on-colored-bg'),
        ).toBeTruthy();
    });
});
