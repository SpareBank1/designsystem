import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { ToggleSwitch } from './ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
    title: 'components/form/ToggleSwitch',
    component: ToggleSwitch,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Standard: Story = {
    args: {
        children: 'Jeg vil gjerne ha reklame',
    },
    render: function Render(args) {
        return <ToggleSwitch {...args} />;
    },
};
