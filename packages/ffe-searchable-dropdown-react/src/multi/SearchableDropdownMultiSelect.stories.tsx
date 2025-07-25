import React, { useState } from 'react';
import { SearchableDropdownMultiSelect } from './SearchableDropdownMultiSelect';
import type { StoryObj, Meta } from '@storybook/react';
import { InputGroup } from '@sb1/ffe-form-react';
import { SmallText } from '@sb1/ffe-core-react';
import { ActionButton, TertiaryButton } from '@sb1/ffe-buttons-react';

type Fruit = {
    color: string;
    displayName: string;
    amount: number;
};

const fruits: Fruit[] = [
    {
        color: 'Gul',
        displayName: 'Bananer i klase, økologisk',
        amount: 5,
    },
    {
        color: 'Grønn',
        displayName: 'Pære',
        amount: 3,
    },
    {
        color: 'Grønn, Rød',
        displayName: 'Eple',
        amount: 1,
    },
    {
        color: 'Oransje',
        displayName: 'Appelsin',
        amount: 2,
    },
    {
        color: 'Lilla, Grønn',
        displayName: 'Druer',
        amount: 1,
    },
    {
        color: 'Oransje',
        displayName: 'Mandarin',
        amount: 2,
    },
    {
        color: 'Grønn',
        displayName: 'Kiwi',
        amount: 1,
    },
] as const;

const companies = [
    {
        organizationName: 'Bedriften',
        organizationNumber: '912602370',
        quantityUnprocessedMessages: 5,
        balance: '12 345 678,00 kr',
    },
    {
        organizationName: 'Sønn & co',
        organizationNumber: '812602372',
        quantityUnprocessedMessages: 3,
        balance: '12 345,00 kr',
    },
    {
        organizationName: 'Beslag skytter',
        organizationNumber: '812602552',
        quantityUnprocessedMessages: 1,
        balance: '34 234 343,00 kr',
    },
];

const CustomOptionBody = ({
    item,
    isHighlighted,
}: {
    item: Record<string, any>;
    isHighlighted: boolean;
}) => {
    return (
        <div
            style={{
                padding: '8px',
                background: isHighlighted ? '#ff9100' : 'white',
            }}
        >
            <div>{item.color}</div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'red',
                }}
            >
                <SmallText className="ffe-searchable-dropdown__detail-text">
                    {item.displayName}
                </SmallText>
                <SmallText className="ffe-searchable-dropdown__detail-text">
                    {item.amount} ulest
                </SmallText>
            </div>
        </div>
    );
};

const meta: Meta<typeof SearchableDropdownMultiSelect<Fruit>> = {
    title: 'Komponenter/Searchable-dropdown/SearchableDropdownMultiSelect',
    component: SearchableDropdownMultiSelect,
    argTypes: {
        postListElement: {
            options: ['html', 'text', 'none'],
            mapping: {
                html: <span>Some text describing the list</span>,
                text: 'Some text describing the list',
                none: undefined,
            },
        },
        optionBody: {
            options: ['custom', 'none'],
            mapping: {
                custom: CustomOptionBody,
                none: undefined,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof SearchableDropdownMultiSelect<Fruit>>;

export const Standard: Story = {
    args: {
        id: 'id',
        labelledById: 'labelled-by-id',
        dropdownList: fruits,
        dropdownAttributes: ['displayName'],
        searchAttributes: ['displayName', 'color'],
        noMatch: { text: 'Søket ga ingen treff på frukt' },
        inputProps: { placeholder: 'Søk' },
        postListElement: 'none',
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <>
                <InputGroup
                    label="Velg frukt"
                    labelId={labelledById}
                    inputId={id}
                >
                    <SearchableDropdownMultiSelect id={id} {...args} />
                </InputGroup>
            </>
        );
    },
};

export const MultipleDataResults: Story = {
    args: {
        ...Standard.args,
        dropdownAttributes: ['displayName', 'color', 'amount'],
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect
                    id={id}
                    labelledById={labelledById}
                    {...args}
                />
            </InputGroup>
        );
    },
};

export const DropdownAttributes: Story = {
    args: {
        ...Standard.args,
        dropdownList: companies,
        dropdownAttributes: ['organizationName', 'balance'],
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <InputGroup label="Velg" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect
                    id={id}
                    labelledById={labelledById}
                    {...args}
                />
            </InputGroup>
        );
    },
};

export const PreselectedItems: Story = {
    args: {
        ...Standard.args,
        selectedItems: [fruits[2], fruits[4]],
    },
    render: function Render({ id, labelledById, ...args }) {
        const [items, setItems] = useState(args.selectedItems);
        return (
            <>
                <InputGroup
                    label="Velg frukt"
                    labelId={labelledById}
                    inputId={id}
                >
                    <SearchableDropdownMultiSelect
                        id={id}
                        labelledById={labelledById}
                        {...args}
                        selectedItems={items}
                        onChange={(item, actionType) => {
                            if (actionType === 'selected') {
                                setItems([...(items ?? []), item]);
                            } else {
                                setItems(
                                    (items ?? []).filter(it => it !== item),
                                );
                            }
                        }}
                    />
                </InputGroup>
                <ActionButton
                    type="button"
                    onClick={() => {
                        setItems([]);
                    }}
                >
                    Tøm listen
                </ActionButton>
                <ActionButton
                    type="button"
                    onClick={() => {
                        setItems([...(items ?? []), fruits[1]]);
                    }}
                >
                    Legg til i listen
                </ActionButton>
            </>
        );
    },
};

export const PostListElement: Story = {
    args: {
        ...Standard.args,
        postListElement: <span>Some text describing the list</span>,
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect
                    id={id}
                    labelledById={labelledById}
                    {...args}
                />
            </InputGroup>
        );
    },
};

export const ShowNumberSelected: Story = {
    args: {
        ...Standard.args,
        showNumberSelectedAfter: 2,
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect
                    id={id}
                    labelledById={labelledById}
                    {...args}
                />
            </InputGroup>
        );
    },
};

export const ControlledState: Story = {
    args: {
        ...Standard.args,
        dropdownAttributes: ['displayName', 'color', 'amount'],
    },
    render: function Render(args) {
        const [selectedFruits, setSelectedFruits] = useState<Fruit[]>([
            fruits[0],
        ]);

        return (
            <div>
                <InputGroup
                    label="Velg frukt"
                    inputId={args.id}
                    labelId={args.labelledById}
                >
                    {inputProps => (
                        <>
                            <SearchableDropdownMultiSelect
                                {...inputProps}
                                {...args}
                                selectedItems={selectedFruits}
                                onChange={(fruit, actionType) => {
                                    if (actionType === 'selected') {
                                        setSelectedFruits(prevFruits =>
                                            prevFruits.concat(fruit),
                                        );
                                    } else {
                                        setSelectedFruits(prevFruits =>
                                            prevFruits.filter(
                                                it =>
                                                    it.displayName !==
                                                    fruit.displayName,
                                            ),
                                        );
                                    }
                                }}
                            />
                            <TertiaryButton
                                type="button"
                                onClick={() => {
                                    setSelectedFruits(fruits);
                                }}
                            >
                                Velg alle
                            </TertiaryButton>
                        </>
                    )}
                </InputGroup>
            </div>
        );
    },
};

export const AriaInvalid: Story = {
    args: {
        ...Standard.args,
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <>
                <InputGroup
                    label="Velg frukt"
                    labelId={labelledById}
                    inputId={id}
                >
                    {inputProps => (
                        <SearchableDropdownMultiSelect
                            labelledById={labelledById}
                            {...args}
                            {...inputProps}
                            aria-invalid="true"
                        />
                    )}
                </InputGroup>
            </>
        );
    },
};

export const WithDescription: Story = {
    args: {
        ...Standard.args,
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <>
                <InputGroup
                    label="Velg frukt"
                    labelId={labelledById}
                    inputId={id}
                    description='Velg de du liker aller best'
                >
                    {inputProps => (
                        <SearchableDropdownMultiSelect
                            labelledById={labelledById}
                            {...args}
                            {...inputProps}
                        />
                    )}
                </InputGroup>
            </>
        );
    },
};
