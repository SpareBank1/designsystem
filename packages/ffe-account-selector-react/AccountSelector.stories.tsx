import React from 'react';
import { AccountSelector } from '@sb1/ffe-account-selector-react';
import { InputGroup } from '@sb1/ffe-form-react';
import type { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { fargeFjell } from '@sb1/ffe-core/gen-src/colors';

const meta: Meta<typeof AccountSelector> = {
    title: 'components/account-selector/AccountSelector',
    component: AccountSelector,
    tags: ['autodocs'],
    argTypes: {
        locale: {
            control: 'select',
            options: ['nb', 'nn', 'en'],
        },
    },
};
export default meta;

type Story = StoryObj<typeof AccountSelector>;

type Account = React.ComponentProps<typeof AccountSelector>['accounts'][number];

const accounts: Account[] = [
    {
        accountNumber: '1234 56 789101',
        name: 'Brukskonto',
        currencyCode: 'NOK',
        balance: 1337,
    },
    {
        accountNumber: '1234 56 789102',
        name: 'Brukskonto2',
        currencyCode: 'NOK',
        balance: 13337,
    },
    {
        accountNumber: '2234 56 789102',
        name: 'Sparekonto1',
        currencyCode: 'NOK',
        balance: 109236,
    },
    {
        accountNumber: '1253 47 789102',
        name: 'Sparekonto2',
        currencyCode: 'NOK',
        balance: 0,
    },
];

export const Standard: Story = {
    args: {
        accounts,
        id: 'input-id',
        labelledById: 'label-id',
        locale: 'nb',
        selectedAccount: undefined,
        onReset: fn,
        onAccountSelected: fn,
        formatAccountNumber: true,
        allowCustomAccount: false,
        onColoredBg: false,
    },
    render: args => {
        return (
            <div
                style={{
                    background: args.onColoredBg ? fargeFjell : 'transparent',
                }}
            >
                <InputGroup
                    label="Velg konto"
                    inputId={args.id}
                    labelId={args.labelledById}
                    onColoredBg={args.onColoredBg}
                >
                    <AccountSelector {...args} />
                </InputGroup>
            </div>
        );
    },
};

export const PostListElement: Story = {
    ...Standard,
    args: {
        ...Standard.args,
        postListElement: <span>Some text describing the list</span>,
    },
};
