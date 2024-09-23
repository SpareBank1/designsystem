import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { PreformattedText } from './PreformattedText';

const meta: Meta<typeof PreformattedText> = {
    title: 'components/core/PreformattedText',
    component: PreformattedText,
};
export default meta;

type Story = StoryObj<typeof PreformattedText>;

export const Standard: Story = {
    args: {
        children: 'Some text',
    },
    render: args => <PreformattedText {...args} />,
};
