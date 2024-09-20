import React from 'react';
import { NumberedList } from './NumberedList';
import { NumberedListItem } from './NumberedListItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof NumberedList> = {
    title: 'components/lists/NumberedList',
    component: NumberedList,
    subcomponents: { NumberedListItem },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof NumberedList>;

export const Standard: Story = {
    args: {
        condensed: false,
    },
    render: args => (
        <div>
            <h3 className="ffe-h4">Å bruke FFE er enkelt!</h3>
            <NumberedList {...args}>
                <NumberedListItem>
                    Installer pakken du vil bruke via NPM
                </NumberedListItem>
                <NumberedListItem>Importer pakken i koden din</NumberedListItem>
                <NumberedListItem>Profit!</NumberedListItem>
            </NumberedList>
        </div>
    ),
};
