import React from 'react';
import { NumberedListItem } from './NumberedListItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof NumberedListItem> = {
    title: 'components/lists/NumberedListItem',
    component: NumberedListItem,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof NumberedListItem>;

export const Standard: Story = {
    args: {},
    render: args => (
        <NumberedListItem {...args}>
            Installer pakken du vil bruke via NPM
        </NumberedListItem>
    ),
};
