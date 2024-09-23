import React from 'react';
import { LinkText } from './LinkText';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof LinkText> = {
    title: 'components/core/LinkText',
    component: LinkText,
};
export default meta;

type Story = StoryObj<typeof LinkText>;

export const Standard: Story = {
    args: {
        underline: true,
        children: 'Some text',
    },
    render: args => <LinkText {...args} />,
};
