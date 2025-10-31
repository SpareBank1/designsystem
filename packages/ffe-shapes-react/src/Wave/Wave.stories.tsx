import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Wave } from './Wave';

const meta: Meta<typeof Wave> = {
    title: 'Komponenter/Shapes/Wave - Depricated',
    component: Wave,
};
export default meta;

type Story = StoryObj<typeof Wave>;

export const Standard: Story = {
    name: "Standard (depricated)",
    render: args => <Wave {...args} />,
};
