import React, { useState } from 'react';
import { AccountSelector } from './AccountSelector';
import { InputGroup } from '@sb1/ffe-form-react';
import type { StoryObj, Meta } from '@storybook/react';
import { SmallText } from '@sb1/ffe-core-react';
import { accountFormatter } from '../format';

const meta: Meta<typeof AccountSelector> = {
    title: 'Komponenter/Account-selector/AccountSelector',
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
        locale: 'nb',
        formatAccountNumber: true,
        allowCustomAccount: false,
    },
    render: function Render(args) {
        const [selectedAccount, setSelectedAccount] = useState<Account>();

        return (
            <InputGroup label="Velg konto">
                <AccountSelector
                    {...args}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                    onReset={() => setSelectedAccount(undefined)}
                />
            </InputGroup>
        );
    },
};

export const ShowBalance: Story = {
    args: { ...Standard.args, showBalance: true },
    render: function Render(args) {
        const [selectedAccount, setSelectedAccount] = useState<Account>();
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
            >
                <AccountSelector
                    {...args}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                />
            </InputGroup>
        );
    },
};

export const AllowCustomAccount: Story = {
    args: { ...Standard.args, allowCustomAccount: true },
    render: function Render(args) {
        const [selectedAccount, setSelectedAccount] = useState<Account>();
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
            >
                <AccountSelector
                    {...args}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                />
            </InputGroup>
        );
    },
};

export const NoFormatAccount: Story = {
    args: { ...Standard.args, formatAccountNumber: false },
    render: function Render(args) {
        const [selectedAccount, setSelectedAccount] = useState<Account>();

        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
            >
                <AccountSelector
                    {...args}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                />
            </InputGroup>
        );
    },
};

export const ListElementBody: Story = {
    args: { ...Standard.args, formatAccountNumber: false },
    render: function Render(args) {
        const [selectedAccount, setSelectedAccount] = useState<Account>();
        const CustomOptionBody = ({
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
            >
                <AccountSelector
                    {...args}
                    optionBody={CustomOptionBody}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                />
            </InputGroup>
        );
    },
};

export const HideAccountDetails: Story = {
    args: { ...Standard.args, hideAccountDetails: false },
    render: function Render(args) {
        const [selectedAccount, setSelectedAccount] = useState<Account>();
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
            >
                <AccountSelector
                    {...args}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                />
            </InputGroup>
        );
    },
};

export const PostListElement: Story = {
    args: {
        ...Standard.args,
        postListElement: <span>Some text describing the list</span>,
    },
    render: function Render(args) {
        const [selectedAccount, setSelectedAccount] = useState<Account>();
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
            >
                <AccountSelector
                    {...args}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                />
            </InputGroup>
        );
    },
};

export const InitialValue: Story = {
    args: {
        ...Standard.args,
    },
    render: function Render(args) {
        const [selectedAccount, setSelectedAccount] = useState<Account>(
            accounts[2],
        );
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
            >
                <AccountSelector
                    {...args}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                />
            </InputGroup>
        );
    },
};

type PrettyAccount = Account & { prettyName: string };

const prettyAccounts: PrettyAccount[] = accounts.map(account => ({
    ...account,
    prettyName: `${account.name} - ${accountFormatter(account.accountNumber)}`,
}));
export const CustomDisplayAttribute: StoryObj<
    typeof AccountSelector<PrettyAccount>
> = {
    args: {
        id: 'input-id',
        labelledById: 'label-id',
        locale: 'nb',
        formatAccountNumber: true,
        allowCustomAccount: false,
        displayAttribute: 'prettyName',
        accounts: prettyAccounts,
    },
    render: function Render(args) {
        const [selectedAccount, setSelectedAccount] = useState<PrettyAccount>(
            prettyAccounts[2],
        );
        return (
            <InputGroup
                label="Velg konto"
                inputId={args.id}
                labelId={args.labelledById}
            >
                <AccountSelector<PrettyAccount>
                    {...args}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                />
            </InputGroup>
        );
    },
};

export const WithDescription: Story = {
    args: {
        accounts,
        locale: 'nb',
        formatAccountNumber: true,
        allowCustomAccount: false,
    },
    render: function Render(args) {
        const [selectedAccount, setSelectedAccount] = useState<Account>();

        return (
            <InputGroup label="Velg konto" description="Velg den kontoen du har mest lyst på">
                <AccountSelector
                    {...args}
                    selectedAccount={selectedAccount}
                    onAccountSelected={setSelectedAccount}
                    onReset={() => setSelectedAccount(undefined)}
                />
            </InputGroup>
        );
    },
};
