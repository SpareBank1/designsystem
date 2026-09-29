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

    it('should not call onChange when disabled and clicked', () => {
        const spy = jest.fn();
        renderCheckbox({ onChange: spy, disabled: true });
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(spy).toHaveBeenCalledTimes(0);
    });

    it('should render a default value if passed', () => {
        const { rerender } = render(
            <Checkbox onChange={() => {}} checked={false}>
                children
            </Checkbox>,
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

    it('should support indeterminate', () => {
        renderCheckbox({ indeterminate: true });

        expect(screen.getByRole('checkbox')).toBePartiallyChecked();
    });

    it('should not be partially checked by default', () => {
        renderCheckbox();

        expect(screen.getByRole('checkbox')).not.toBePartiallyChecked();
    });

    it('should not set aria-checked when indeterminate', () => {
        // The accessibility layer derives the mixed state from the DOM
        // property. An aria-checked attribute would desynchronise as soon as
        // the user clicks, since the browser updates the property but not the
        // attribute.
        renderCheckbox({ indeterminate: true });

        expect(
            screen.getByRole('checkbox').getAttribute('aria-checked'),
        ).toBeNull();
    });

    it('should reapply indeterminate on re-render after the user clicks', () => {
        // The browser clears the property when the user clicks, so it has to be
        // reapplied on every render — not just when the prop changes. This fails
        // if the effect gets a [indeterminate] dependency array, since the prop
        // is unchanged across the re-render.
        const { rerender } = render(
            <Checkbox onChange={() => {}} indeterminate={true}>
                children
            </Checkbox>,
        );
        const checkbox = screen.getByRole('checkbox');

        fireEvent.click(checkbox);
        expect(checkbox).not.toBePartiallyChecked();

        rerender(
            <Checkbox onChange={() => {}} indeterminate={true}>
                children
            </Checkbox>,
        );
        expect(checkbox).toBePartiallyChecked();
    });

    it('should toggle indeterminate when the prop changes', () => {
        const { rerender } = render(
            <Checkbox onChange={() => {}} indeterminate={false}>
                children
            </Checkbox>,
        );
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBePartiallyChecked();

        rerender(
            <Checkbox onChange={() => {}} indeterminate={true}>
                children
            </Checkbox>,
        );
        expect(checkbox).toBePartiallyChecked();

        rerender(
            <Checkbox onChange={() => {}} indeterminate={false}>
                children
            </Checkbox>,
        );
        expect(checkbox).not.toBePartiallyChecked();
    });

    it('should forward the ref to the input while setting indeterminate', () => {
        const ref = React.createRef<HTMLInputElement>();
        render(
            <Checkbox onChange={() => {}} indeterminate={true} ref={ref}>
                children
            </Checkbox>,
        );

        expect(ref.current).toBe(screen.getByRole('checkbox'));
        expect(ref.current).toBePartiallyChecked();
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
});
