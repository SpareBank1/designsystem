import React from 'react';
import { SearchableDropdown } from './SearchableDropdown';
import type { StoryObj, Meta } from '@storybook/react';
import { InputGroup } from '@sb1/ffe-form-react';
import { SmallText } from '@sb1/ffe-core-react';
import { fargeLyng30, fargeHvit, spacingXs } from '@sb1/ffe-core';

const companies = [
    {
        organizationName: 'Bedriften',
        organizationNumber: '912602370',
        quantityUnprocessedMessages: 5,
    },
    {
        organizationName: 'Sønn & co',
        organizationNumber: '812602372',
        quantityUnprocessedMessages: 3,
    },
    {
        organizationName: 'Beslag skytter',
        organizationNumber: '812602552',
        quantityUnprocessedMessages: 1,
    },
];

const meta: Meta<typeof SearchableDropdown> = {
    title: 'components/searchable-dropdown/SearchableDropdown',
    component: SearchableDropdown,
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
                custom: ({
                    item,
                    isHighlighted,
                }: {
                    isHighlighted: boolean;
                    item: (typeof companies)[number];
                }) => {
                    return (
                        <div
                            style={{
                                padding: spacingXs,
                                background: isHighlighted
                                    ? fargeLyng30
                                    : fargeHvit,
                            }}
                        >
                            <div>{item.organizationName}</div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <SmallText>{item.organizationNumber}</SmallText>
                                <SmallText>
                                    {item.quantityUnprocessedMessages} ulest
                                </SmallText>
                            </div>
                        </div>
                    );
                },
                none: undefined,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof SearchableDropdown>;

export const Standard: Story = {
    args: {
        id: 'id',
        labelledById: 'labelled-by-id',
        dropdownList: companies,
        dropdownAttributes: ['organizationName'],
        searchAttributes: ['organizationName'],
        noMatch: { text: 'Søket ga ingen treff' },
        inputProps: { placeholder: 'Velg' },
        postListElement: 'none',
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <InputGroup
                label="Velg bedrift"
                labelId={labelledById}
                inputId={id}
            >
                <SearchableDropdown
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
        dropdownAttributes: ['organizationName', 'organizationNumber'],
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <InputGroup
                label="Velg bedrift"
                labelId={labelledById}
                inputId={id}
            >
                <SearchableDropdown
                    id={id}
                    labelledById={labelledById}
                    {...args}
                />
            </InputGroup>
        );
    },
};

export const CustomSearch: Story = {
    args: {
        ...Standard.args,
        searchMatcher: (inputValue, searchAttributes) => item => {
            const cleanString = (value: string) =>
                `${value}`.replace(/\s/g, '').toLowerCase();
            const cleanedInputValue = cleanString(inputValue);
            return searchAttributes
                .map(searchAttribute => cleanString(item[searchAttribute]))
                .some(cleanedItemAttribute =>
                    cleanedItemAttribute.includes(cleanedInputValue),
                );
        },
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <InputGroup
                label="Velg bedrift"
                labelId={labelledById}
                inputId={id}
            >
                <SearchableDropdown
                    id={id}
                    labelledById={labelledById}
                    {...args}
                />
            </InputGroup>
        );
    },
};

export const ExtraResults: Story = {
    args: {
        ...Standard.args,
        noMatch: {
            text: 'Søket ga ingen treff',
            dropdownList: companies.slice(1, 4),
        },
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <InputGroup
                label="Velg bedrift"
                labelId={labelledById}
                inputId={id}
            >
                <SearchableDropdown
                    id={id}
                    labelledById={labelledById}
                    {...args}
                />
            </InputGroup>
        );
    },
};

export const SelectedItem: Story = {
    args: {
        ...Standard.args,
        selectedItem: companies[2],
    },
    render: function Render({ id, labelledById, ...args }) {
        return (
            <InputGroup
                label="Velg bedrift"
                labelId={labelledById}
                inputId={id}
            >
                <SearchableDropdown
                    id={id}
                    labelledById={labelledById}
                    {...args}
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
    render: function Render({ id, labelledById, ...args }) {
        return (
            <InputGroup
                label="Velg bedrift"
                labelId={labelledById}
                inputId={id}
            >
                <SearchableDropdown
                    id={id}
                    labelledById={labelledById}
                    {...args}
                />
            </InputGroup>
        );
    },
};
