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
        size: 'sm',
    },
    render: args => (
        <div className="storybook-button-display-group">
            <Chip {...args}>Chip 1</Chip>
            <Chip {...args}>Chip 2</Chip>
        </div>
    ),
};
