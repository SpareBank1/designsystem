import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
    title: 'components/form/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Standard: Story = {
    args: {
        children: 'Dette er lurt å tenke på',
    },
    render: function Render(args) {
        return <Tooltip {...args} />;
    },
};
