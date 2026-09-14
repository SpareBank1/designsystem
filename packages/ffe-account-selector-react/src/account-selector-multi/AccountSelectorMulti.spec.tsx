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
});
