import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip<any>> = {
    title: 'Komponenter/Chips/Chip',
    component: Chip,
};
export default meta;

type Story = StoryObj<typeof Chip<any>>;

export const Standard: Story = {
    args: {
        as: 'button',
        children: 'Label',
        size: 'sm',
    },
    render: args => <Chip {...args} />,
};
