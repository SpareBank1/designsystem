import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ChipRemovable } from './ChipRemovable';

const meta: Meta<typeof ChipRemovable<any>> = {
    title: 'Komponenter/Chips/ChipRemovable',
    component: ChipRemovable,
};
export default meta;

type Story = StoryObj<typeof ChipRemovable<any>>;

export const Standard: Story = {
    args: {
        as: 'button',
        children: 'Label',
        size: 'sm',
    },
    render: args => <ChipRemovable {...args} />,
};
