import React from 'react';
import { AccountSelector } from './AccountSelector';
import { InputGroup } from '@sb1/ffe-form-react';
import type { StoryObj, Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { SmallText } from '@sb1/ffe-core-react';

const meta: Meta<typeof AccountSelector> = {
    title: 'components/account-selector/AccountSelector',
    component: AccountSelector,
    argTypes: {
        postListElement: {
            options: ['text', 'html'],
            mapping: {
                text: 'Some text describing the list',
                html: <span>Some text describing the list</span>,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof AccountSelector>;

type Account = React.ComponentProps<typeof AccountSelector>['accounts'][number];

const accounts: Account[] = [
    {
        accountNumber: '39920143613',
        name: 'Brukskonto',
        currencyCode: 'NOK',
        balance: 1337,
    },
    {
        accountNumber: '42142102514',
        name: 'Brukskonto2',
        currencyCode: 'NOK',
        balance: 13337,
    },
    {
        accountNumber: '23200355148',
        name: 'Sparekonto1',
        currencyCode: 'NOK',
        balance: 109236,
    },
    {
        accountNumber: '23207117277',
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
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
                onColoredBg={args.onColoredBg}
            >
                <AccountSelector {...args} />
            </InputGroup>
        );
    },
};

export const ShowBalance: Story = {
    args: { ...Standard.args, showBalance: true },
    render: args => {
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
                onColoredBg={args.onColoredBg}
            >
                <AccountSelector {...args} />
            </InputGroup>
        );
    },
};

export const AllowCustomAccount: Story = {
    args: { ...Standard.args, allowCustomAccount: true },
    render: args => {
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
                onColoredBg={args.onColoredBg}
            >
                <AccountSelector {...args} />
            </InputGroup>
        );
    },
};

export const NoFormatAccount: Story = {
    args: { ...Standard.args, formatAccountNumber: false },
    render: args => {
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
                onColoredBg={args.onColoredBg}
            >
                <AccountSelector {...args} />
            </InputGroup>
        );
    },
};

export const ListElementBody: Story = {
    args: { ...Standard.args, formatAccountNumber: false },
    render: args => {
        const CustomListElementBody = ({
            item,
            isHighlighted,
        }: {
            item: Account;
            isHighlighted: boolean;
        }) => {
            return (
                <div
                    style={{
                        padding: '8px',
                        background: isHighlighted ? '#ff9100' : 'white',
                    }}
                >
                    <div>{item.name}</div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <SmallText>{item.accountNumber}</SmallText>
                        <SmallText>{item.balance}</SmallText>
                    </div>
                </div>
            );
        };

        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
                onColoredBg={args.onColoredBg}
            >
                <AccountSelector
                    {...args}
                    listElementBody={CustomListElementBody}
                />
            </InputGroup>
        );
    },
};

export const HideAccountDetails: Story = {
    args: { ...Standard.args, hideAccountDetails: false },
    render: args => {
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
                onColoredBg={args.onColoredBg}
            >
                <AccountSelector {...args} />
            </InputGroup>
        );
    },
};

export const PostListElement: Story = {
    args: {
        ...Standard.args,
        postListElement: <span>Some text describing the list</span>,
    },
    render: args => {
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
                onColoredBg={args.onColoredBg}
            >
                <AccountSelector {...args} />
            </InputGroup>
        );
    },
};
