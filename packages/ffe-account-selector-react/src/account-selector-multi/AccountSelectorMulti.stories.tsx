import React, { useState, useId } from 'react';
import { AccountSelectorMulti } from './AccountSelectorMulti';
import { InputGroup } from '@sb1/ffe-form-react';
import type { StoryObj, Meta } from '@storybook/react';
import type { Account } from '../types';

const meta: Meta<typeof AccountSelectorMulti> = {
    title: 'components/account-selector/AccountSelectorMulti',
    component: AccountSelectorMulti,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof AccountSelectorMulti>;

const accounts: Account[] = [
    {
        accountNumber: '123456789101',
        name: 'Brukskonto',
        currencyCode: 'NOK',
        balance: 1337,
    },
    {
        accountNumber: '123456789102',
        name: 'Sparekonto',
        currencyCode: 'NOK',
        balance: 13337,
    },
    {
        accountNumber: '123456789103',
        name: 'Min ekstrakonto',
        currencyCode: 'NOK',
        balance: 12345,
    },
    {
        accountNumber: '123456789104',
        name: 'Min siste konto',
        currencyCode: 'NOK',
        balance: 54321,
    },
];

export const Standard: Story = {
    args: {
        accounts,
        id: 'input-id',
        locale: 'nb',
    },
    render: function Render(args) {
        const [value, setValue] = useState<string>();
        const [selectedAccounts, setSelectedAccounts] = useState<Account[]>([]);
        const id = useId();

        const onAccountSelected = (selectedAccount: Account) => {
            const filteredAccounts = selectedAccounts.filter(
                it => it.accountNumber !== selectedAccount.accountNumber,
            );

            const accountAlreadySelectedAndShouldBeRemoved =
                filteredAccounts.length !== selectedAccounts.length;

            if (accountAlreadySelectedAndShouldBeRemoved) {
                setSelectedAccounts(filteredAccounts);
            } else {
                setSelectedAccounts([...selectedAccounts, selectedAccount]);
            }
        };

        const onBlur = () => {
            setValue(selectedAccounts.map(acc => acc.name).join(', '));
        };

        const onFocus = () => {
            setValue('');
        };

        const onSelectAll = () => {
            if (selectedAccounts.length === accounts.length) {
                setSelectedAccounts([]);
            } else {
                setSelectedAccounts(accounts);
            }
        };

        const onReset = () => {
            setValue('');
            setSelectedAccounts([]);
        };

        return (
            <InputGroup label="Velg konto" inputId={args.id}>
                <AccountSelectorMulti
                    id={id}
                    locale="nb"
                    accounts={accounts}
                    onAccountSelected={onAccountSelected}
                    selectedAccounts={selectedAccounts}
                    value={value}
                    onChange={val => setValue(val)}
                    showSelectAllOption={true}
                    onSelectAll={onSelectAll}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    onReset={onReset}
                />
            </InputGroup>
        );
    },
};
