import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ChipSelectable } from './ChipSelectable';

const meta: Meta<typeof ChipSelectable<any>> = {
    title: 'Komponenter/Chips/ChipSelectable',
    component: ChipSelectable,
};
export default meta;

type Story = StoryObj<typeof ChipSelectable<any>>;

export const Standard: Story = {
    args: {
        as: 'button',
        children: 'Label',
        size: 'sm',
    },
    render: args => <ChipSelectable {...args} />,
};
