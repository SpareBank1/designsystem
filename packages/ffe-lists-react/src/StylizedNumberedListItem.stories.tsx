import React from 'react';
import { StylizedNumberedListItem } from './StylizedNumberedListItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof StylizedNumberedListItem> = {
    title: 'Komponenter/Lists/StylizedNumberedListItem',
    component: StylizedNumberedListItem,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof StylizedNumberedListItem>;

export const Standard: Story = {
    args: {},
    render: args => (
        <StylizedNumberedListItem {...args}>
            Installer pakken du vil bruke via NPM
        </StylizedNumberedListItem>
    ),
};
