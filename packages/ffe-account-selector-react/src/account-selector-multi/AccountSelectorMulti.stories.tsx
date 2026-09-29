import React, { useState } from 'react';
import { AccountSelectorMulti } from './AccountSelectorMulti';
import { InputGroup } from '@sb1/ffe-form-react';
import type { StoryObj, Meta } from '@storybook/react';
import type { Account } from '../types';
import { TertiaryButton } from '@sb1/ffe-buttons-react';

const meta: Meta<typeof AccountSelectorMulti> = {
    title: 'Komponenter/Account-selector/AccountSelectorMulti',
    component: AccountSelectorMulti,
};
export default meta;

type Story = StoryObj<typeof AccountSelectorMulti>;

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
    {
        accountNumber: '23207166200',
        name: 'Min ekstrakonto',
        currencyCode: 'NOK',
        balance: 12345,
    },
    {
        accountNumber: '23200840259',
        name: 'Min siste konto',
        currencyCode: 'NOK',
        balance: 54321,
    },
];

export const Standard: Story = {
    args: {
        accounts,
        locale: 'nb',
        formatAccountNumber: true,
    },
    render: function Render(args) {
        return (
            <InputGroup label="Velg konto">
                <AccountSelectorMulti {...args} />
            </InputGroup>
        );
    },
};

export const ControlledState: Story = {
    args: { ...Standard.args },
    render: function Render(args) {
        const [selectedAccounts, setSelectedAccounts] = useState<Account[]>([]);

        return (
            <div>
                <InputGroup label="Velg konto">
                    {inputProps => (
                        <>
                            <AccountSelectorMulti
                                {...inputProps}
                                {...args}
                                selectedAccounts={selectedAccounts}
                                onChange={(changedAccounts, actionType) => {
                                    if (actionType === 'selected') {
                                        setSelectedAccounts(prevAccounts =>
                                            prevAccounts.concat(
                                                changedAccounts,
                                            ),
                                        );
                                    } else {
                                        setSelectedAccounts(prevAccounts =>
                                            prevAccounts.filter(
                                                prevAccount =>
                                                    !changedAccounts.some(
                                                        it =>
                                                            it.accountNumber ===
                                                            prevAccount.accountNumber,
                                                    ),
                                            ),
                                        );
                                    }
                                }}
                            />
                            <TertiaryButton
                                type="button"
                                onClick={() => {
                                    setSelectedAccounts([]);
                                }}
                            >
                                Nullstill
                            </TertiaryButton>
                        </>
                    )}
                </InputGroup>
            </div>
        );
    },
};

export const SelectAll: Story = {
    args: { ...Standard.args, showSelectAll: true },
    render: function Render(args) {
        return (
            <InputGroup label="Velg konto">
                <AccountSelectorMulti {...args} />
            </InputGroup>
        );
    },
};

export const WithDescription: Story = {
    args: {
        accounts,
        locale: 'nb',
        formatAccountNumber: true,
    },
    render: function Render(args) {
        return (
            <InputGroup
                label="Velg konto"
                description="Velg de kontoene du ønsker å bruke"
            >
                <AccountSelectorMulti {...args} />
            </InputGroup>
        );
    },
};
