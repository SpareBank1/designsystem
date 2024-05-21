import React from 'react';
import { Dropdown, DropdownProps } from './Dropdown';
import { render, screen } from '@testing-library/react';

const renderDropdown = (props?: Partial<DropdownProps>) =>
    render(
        <Dropdown {...props}>
            <option>Option 1</option>
            <option>Option 2</option>
        </Dropdown>,
    );

describe('<Dropdown />', () => {
    it('renders a select', () => {
        renderDropdown();
        const select = screen.getByRole('combobox');
        expect(select.classList.contains('ffe-dropdown')).toBeTruthy();
    });

    it('renders children inside the select', () => {
        renderDropdown();
        const options = screen.getAllByRole('option');

        expect(options).toHaveLength(2);
    });

    it('sets the inline modifier class', () => {
        const { rerender } = render(
            <Dropdown inline={false}>
                <option>Option 1</option>
            </Dropdown>,
        );
        const select = screen.getByRole('combobox');
        expect(select.classList.contains('ffe-dropdown--inline')).toBeFalsy();
        rerender(
            <Dropdown inline={true}>
                <option>Option 1</option>
            </Dropdown>,
        );
        expect(select.classList.contains('ffe-dropdown--inline')).toBeTruthy();
    });

    it('adds additional classes', () => {
        renderDropdown({ className: 'custom-test-class' });
        const select = screen.getByRole('combobox');
        expect(select.classList.contains('ffe-dropdown')).toBeTruthy();
        expect(select.classList.contains('custom-test-class')).toBeTruthy();
    });

    it('passes on any props to the <select />', () => {
        renderDropdown({
            'aria-invalid': 'true',
            disabled: true,
        });

        const select = screen.getByRole('combobox');

        expect(select.getAttribute('aria-invalid')).toBe('true');
        expect(select).toBeDisabled();
    });
});
