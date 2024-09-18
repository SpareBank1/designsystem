import React from 'react';
import { Heading6 } from './Heading';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Heading6> = {
    title: 'components/core/Heading6',
    component: Heading6,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Heading6>;

export const Standard: Story = {
    args: {
        error: false,
        inline: false,
        lookLike: 6,
        noMargin: false,
        withBorder: false,
        textCenter: false,
        children: 'Some text',
    },
    render: args => <Heading6 {...args} />,
};
