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
    render: args => {
        const [chip1Selected, setChip1Selected] = React.useState(false);
        const [chip2Selected, setChip2Selected] = React.useState(true);

        return (
            <div className="storybook-button-display-group">
                <ChipSelectable
                    {...args}
                    isSelected={chip1Selected}
                    onClick={() => setChip1Selected(!chip1Selected)}
                >
                    Chip
                </ChipSelectable>
                <ChipSelectable
                    {...args}
                    isSelected={chip2Selected}
                    onClick={() => setChip2Selected(!chip2Selected)}
                >
                    Selected Chip
                </ChipSelectable>
            </div>
        );
    },
};
