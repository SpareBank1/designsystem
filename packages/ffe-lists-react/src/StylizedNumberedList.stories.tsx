import React from 'react';
import { StylizedNumberedList } from './StylizedNumberedList';
import { StylizedNumberedListItem } from './StylizedNumberedListItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof StylizedNumberedList> = {
    title: 'components/lists/StylizedNumberedList',
    component: StylizedNumberedList,
    subcomponents: { StylizedNumberedListItem },
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof StylizedNumberedList>;

export const Standard: Story = {
    args: {},
    render: args => (
        <div>
            <h3 className="ffe-h4">Å bruke FFE er enkelt!</h3>
            <StylizedNumberedList {...args}>
                <StylizedNumberedListItem>
                    Installer pakken du vil bruke via NPM
                </StylizedNumberedListItem>
                <StylizedNumberedListItem>
                    Importer pakken i koden din
                </StylizedNumberedListItem>
                <StylizedNumberedListItem>Profit!</StylizedNumberedListItem>
            </StylizedNumberedList>
        </div>
    ),
};
