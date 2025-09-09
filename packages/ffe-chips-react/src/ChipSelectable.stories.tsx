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
        const [chip3Selected, setChip3Selected] = React.useState(false);
        const [chip4Selected, setChip4Selected] = React.useState(true);

        return (
            <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
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
                <ChipSelectable
                    {...args}
                    isSelected={chip3Selected}
                    onClick={() => setChip3Selected(!chip3Selected)}
                >
                    Chip
                </ChipSelectable>
                <ChipSelectable
                    {...args}
                    isSelected={chip4Selected}
                    onClick={() => setChip4Selected(!chip4Selected)}
                >
                    Chip
                </ChipSelectable>
            </div>
        );
    },
};
