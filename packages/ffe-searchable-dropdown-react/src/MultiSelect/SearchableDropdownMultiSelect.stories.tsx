import React, { useState } from 'react';
import { SearchableDropdownMultiSelect } from './SearchableDropdownMultiSelect';
import type { StoryObj, Meta } from '@storybook/react';
import { InputGroup } from '@sb1/ffe-form-react';

const fruits = [
    {
        fruit: 'banana',
        displayName: 'Banan',
        amount: 5,
    },
    {
        fruit: 'pear',
        displayName: 'Pære',
        amount: 3,
    },
    {
        fruit: 'apple',
        displayName: 'Eple',
        amount: 1,
    },
    {
        fruit: 'orange',
        displayName: 'Appelsin',
        amount: 2,
    },
    {
        fruit: 'grapes',
        displayName: 'Druer',
        amount: 1,
    },
    {
        fruit: 'mandarin',
        displayName: 'Mandarin',
        amount: 2,
    },
    {
        fruit: 'kiwi',
        displayName: 'Kiwi',
        amount: 1,
    },
];

const meta: Meta<typeof SearchableDropdownMultiSelect> = {
    title: 'components/searchable-dropdown/SearchableDropdownMultiSelect',
    component: SearchableDropdownMultiSelect,
};
export default meta;

type Story = StoryObj<typeof SearchableDropdownMultiSelect>;

export const Standard: Story = {
    args: {
        id: 'id',
        labelledById: 'labelled-by-id',
        dropdownList: fruits,
        dropdownAttributes: ['fruit', 'displayName', "amount"],
        searchAttributes: ['fruit', 'displayName'],
        noMatch: { text: 'Søket ga ingen treff på frukt' },
        inputProps: { placeholder: 'Velg' },
    },
    render: function Render({ id, labelledById, ...args }) {

        //const [selectedOptions, setSelectedOptions] = useState([]);

        // const handleDropdownChange = (optionss: Record<string, any>[] | null) => {
        //     setSelectedOptions(optionss ?? []);
        // };

        return (
            <InputGroup
                label="Velg frukt"
                labelId={labelledById}
                inputId={id}
            >
                <SearchableDropdownMultiSelect
                    id="test"
                    //onChange={handleDropdownChange}
                    {...args}
                />
            </InputGroup>
        );
    },
};

