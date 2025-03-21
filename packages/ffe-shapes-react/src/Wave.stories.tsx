import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Wave } from './Wave';
import { WaveExample } from './WaveExample';

const meta: Meta<typeof Wave> = {
    title: 'Komponenter/Shapes/Wave',
    component: Wave,
};
export default meta;

type Story = StoryObj<typeof Wave>;

export const Standard: Story = {
    render: args => <Wave {...args} />,
};

export const SubtleBackground: Story = {
    args: {
        bgColor: 'subtle',
    },
    render: args => <Wave {...args} />,
};

export const Flipped: Story = {
    args: {
        flip: true,
    },
    render: args => <Wave {...args} />,
};

export const Position: Story = {
    args: {
        position: '100px',
    },
    render: args => <Wave {...args} />,
};

export const LayoutExample: Story = {
    render: args => <WaveExample />,
};
