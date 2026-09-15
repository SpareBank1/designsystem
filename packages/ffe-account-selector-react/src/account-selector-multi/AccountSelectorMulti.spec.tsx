import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AccountSelectorMulti } from './AccountSelectorMulti';
import { Account } from '../types';

const accounts: Account[] = [
    {
        accountNumber: '23200355148',
        name: 'Brukskonto',
        currencyCode: 'NOK',
        balance: 1337,
    },
    {
        accountNumber: '23201253845',
        name: 'Sparekonto',
        currencyCode: 'NOK',
        balance: 13337,
    },
];

describe('AccountSelectorMulti', () => {
    it('does not show the select all row by default', async () => {
        const user = userEvent.setup();

        render(
            <AccountSelectorMulti
                id="id"
                accounts={accounts}
                locale="nb"
                onChange={jest.fn()}
                onReset={jest.fn()}
            />,
        );

        await user.click(screen.getByRole('combobox'));

        expect(screen.queryByText('Velg alle')).toBeNull();
    });

    it('selects every account from the select all row', async () => {
        const user = userEvent.setup();
        const onChange = jest.fn();

        render(
            <AccountSelectorMulti
                id="id"
                accounts={accounts}
                locale="nb"
                onChange={onChange}
                onReset={jest.fn()}
                showSelectAll={true}
            />,
        );

        await user.click(screen.getByRole('combobox'));

        const list = within(screen.getByRole('listbox'));
        await user.click(list.getByText('Velg alle'));

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(accounts, 'selected');
        expect(list.getByText('Fjern alle')).toBeInTheDocument();
    });

    it('shows a checkbox on every account instead of a check icon', async () => {
        const user = userEvent.setup();

        render(
            <AccountSelectorMulti
                id="id"
                accounts={accounts}
                locale="nb"
                onChange={jest.fn()}
                onReset={jest.fn()}
                selectedAccounts={[accounts[0]]}
            />,
        );

        await user.click(screen.getByRole('combobox'));

        const options = screen.getAllByRole('option');
        options.forEach(option => {
            expect(option.querySelector('.ffe-checkbox')).toBeTruthy();
        });
        expect(
            document.querySelector('.ffe-searchable-dropdown__selected-icon'),
        ).toBeNull();

        // Scoped to the listbox: a selected account also shows up as a chip in
        // the input field.
        const list = within(screen.getByRole('listbox'));
        const boxFor = (name: string) =>
            list
                .getByText(name)
                .closest('[role="option"]')
                ?.querySelector('.ffe-checkbox');

        expect(boxFor('Brukskonto')).toHaveClass('ffe-checkbox--checked');
        expect(boxFor('Sparekonto')).not.toHaveClass('ffe-checkbox--checked');
    });
});
