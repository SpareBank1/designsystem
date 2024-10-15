import React, { useState } from 'react';
import { SearchableDropdownMultiSelect } from './SearchableDropdownMultiSelect';
import type { StoryObj, Meta } from '@storybook/react';
import { InputGroup } from '@sb1/ffe-form-react';
import isEqual from 'lodash.isequal';
import { SmallText } from '@sb1/ffe-core-react';

const fruits = [
    {
        color: 'Gul',
        displayName: 'Banan',
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
];

const CustomListElementBody = ({
    item,
    isHighlighted,
    dropdownAttributes,
    locale,
}: {
    item: Record<string, any>;
    isHighlighted: boolean;
    dropdownAttributes: string[];
    locale: any;
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

const meta: Meta<typeof SearchableDropdownMultiSelect> = {
    title: 'components/searchable-dropdown/SearchableDropdownMultiSelect',
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
        listElementBody: {
            options: ['custom', 'none'],
            mapping: {
                custom: CustomListElementBody,
                none: undefined,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof SearchableDropdownMultiSelect>;

export const Standard: Story = {
    args: {
        id: 'id',
        labelledById: 'labelled-by-id',
        dropdownList: fruits,
        dropdownAttributes: ['displayName'],
        searchAttributes: ['displayName'],
        noMatch: { text: 'Søket ga ingen treff på frukt' },
        inputProps: { placeholder: 'Velg' },
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
                    <SearchableDropdownMultiSelect id="id" {...args} />
                </InputGroup>
            </>
        );
    },
};

export const DropdownAttributes: Story = {
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

export const ControlledState: Story = {
    args: {
        ...Standard.args,
        dropdownAttributes: ['displayName', 'color', 'amount'],
    },
    render: function Render({ id, labelledById, ...args }) {
        const [selectedOptions, setSelectedOptions] = useState([
            fruits[0],
        ] as Record<string, any>[]);

        const handleDropdownChange = (
            item: Record<string, any>,
            actionType: 'selected' | 'removed',
        ) => {
            const newList =
                actionType === 'removed'
                    ? selectedOptions?.filter(
                          selectedItem => !isEqual(selectedItem, item),
                      )
                    : [...selectedOptions, item];
            setSelectedOptions(newList);
        };

        return (
            <InputGroup label="Velg frukt" labelId={labelledById} inputId={id}>
                <SearchableDropdownMultiSelect
                    id={id}
                    labelledById={labelledById}
                    {...args}
                    selectedItems={selectedOptions}
                    onChange={handleDropdownChange}
                />
            </InputGroup>
        );
    },
};
