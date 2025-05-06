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
        size: 'sm',
    },
    render: args => (
        <div className="ffe-button-display-group">
            <ChipSelectable {...args}>Chip</ChipSelectable>
            <ChipSelectable {...args} isSelected={true}>
                Selected Chip
            </ChipSelectable>
        </div>
    ),
};
