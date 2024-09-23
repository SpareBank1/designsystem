import React from 'react';
import { MicroText } from './MicroText';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof MicroText> = {
    title: 'components/core/MicroText',
    component: MicroText,
};
export default meta;

type Story = StoryObj<typeof MicroText>;

export const Standard: Story = {
    args: {
        strong: false,
        underline: false,
        children: 'Some text',
    },
    render: args => <MicroText {...args} />,
};
