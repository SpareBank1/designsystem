import React from 'react';
import { Chip } from './Chip';
import type { StoryObj, Meta } from '@storybook/react';
import { fargeFjell, spacingXs } from '@sb1/ffe-core';

const meta: Meta<typeof Chip<any>> = {
    title: 'components/chips/Chip',
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
    render: args => <Chip {...args} />,
};
