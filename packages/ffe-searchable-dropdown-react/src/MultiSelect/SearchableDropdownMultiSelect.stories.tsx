import React, { useState } from 'react';
import { SearchableDropdownMultiSelect } from './SearchableDropdownMultiSelect';
import type { StoryObj, Meta } from '@storybook/react';
import { InputGroup } from '@sb1/ffe-form-react';
import isEqual from 'lodash.isequal';

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
//Fjerner midlertidig fordi den kan trenges til å lage bedre stories
// const CustomListElementBody = ({
//     item,
//     isHighlighted,
//     dropdownAttributes,
//     locale,
// }: {
//     item: Record<string, any>;
//     isHighlighted: boolean;
//     dropdownAttributes: string[];
//     locale: any;
// }) => {
//     return (
//         <div
//             style={{
//                 padding: '8px',
//                 background: isHighlighted ? '#ff9100' : 'white',
//             }}
//         >
//             <div>{item.fruit}</div>
//             <div
//                 style={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     backgroundColor: 'red',
//                 }}
//             >
//                 <SmallText>{item.displayName}</SmallText>
//                 <SmallText>{item.amount} ulest</SmallText>
//             </div>
//         </div>
//     );
// };
export const Standard: Story = {
    args: {
        id: 'id',
        labelledById: 'labelled-by-id',
        dropdownList: fruits,
        dropdownAttributes: ['displayName', 'fruit', 'amount'],
        searchAttributes: ['fruit', 'displayName'],
        noMatch: { text: 'Søket ga ingen treff på frukt' },
        inputProps: { placeholder: 'Velg' },
        postListElement: <span>Some text describing the list</span>,
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
            <>
                <InputGroup
                    label="Velg frukt"
                    labelId={labelledById}
                    inputId={id}
                >
                    <SearchableDropdownMultiSelect
                        id="test"
                        {...args}
                        selectedItems={selectedOptions}
                        onChange={handleDropdownChange}
                    />
                </InputGroup>
            </>
        );
    },
};
