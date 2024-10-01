import React from 'react';
import { ChipRemovable } from './ChipRemovable';
import type { StoryObj, Meta } from '@storybook/react';
import { fargeFjell, spacingXs } from '@sb1/ffe-core';

const meta: Meta<typeof ChipRemovable<any>> = {
    title: 'components/chips/ChipRemovable',
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
    render: args => <ChipRemovable {...args} />,
};
