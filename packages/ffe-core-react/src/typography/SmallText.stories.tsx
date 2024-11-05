import React from 'react';
import { SmallText } from './SmallText';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SmallText> = {
    title: 'Komponenter/Core/SmallText',
    component: SmallText,
};
export default meta;

type Story = StoryObj<typeof SmallText>;

export const Standard: Story = {
    args: {
        underline: false,
        children: 'Some text',
    },
    render: args => <SmallText {...args} />,
};
