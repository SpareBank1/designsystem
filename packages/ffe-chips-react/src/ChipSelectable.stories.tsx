import React from 'react';
import { ChipSelectable } from './ChipSelectable';
import type { StoryObj, Meta } from '@storybook/react';
import { fargeFjell, spacingXs } from '@sb1/ffe-core';

const meta: Meta<typeof ChipSelectable<any>> = {
    title: 'components/chips/ChipSelectable',
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

export const OnColoredBg: Story = {
    args: {
        ...Standard.args,
        onColoredBg: true,
    },
    decorators: [
        OnColoredBgStory => (
            <div style={{ background: fargeFjell, padding: spacingXs }}>
                <OnColoredBgStory />
            </div>
        ),
    ],
    render: args => <ChipSelectable {...args} />,
};
