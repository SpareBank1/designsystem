import React from 'react';
import { StrongText } from './StrongText';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof StrongText> = {
    title: 'Komponenter/Core/StrongText',
    component: StrongText,
};
export default meta;

type Story = StoryObj<typeof StrongText>;

export const Standard: Story = {
    args: {
        children: 'Some text',
    },
    render: args => <StrongText {...args} />,
};
