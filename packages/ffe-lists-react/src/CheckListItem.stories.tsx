import React from 'react';
import { CheckListItem } from './CheckListItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof CheckListItem> = {
    title: 'components/lists/CheckListItem',
    component: CheckListItem,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof CheckListItem>;

export const Standard: Story = {
    args: {
        isCross: false,
    },
    render: args => <CheckListItem {...args}>Bilforsikring</CheckListItem>,
};
