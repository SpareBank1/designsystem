import React from 'react';
import { BulletListItem } from './BulletListItem';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof BulletListItem> = {
    title: 'Komponenter/Lists/BulletListItem',
    component: BulletListItem,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof BulletListItem>;

export const Standard: Story = {
    args: {},
    render: args => <BulletListItem {...args}>Bilforsikring</BulletListItem>,
};
