import React from 'react';
import { Heading1 } from './Heading';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Heading1> = {
    title: 'components/core/Heading1',
    component: Heading1,
};
export default meta;

type Story = StoryObj<typeof Heading1>;

export const Standard: Story = {
    args: {
        error: false,
        inline: false,
        lookLike: 1,
        noMargin: false,
        withBorder: false,
        textCenter: false,
        children: 'Some text',
    },
    render: args => <Heading1 {...args} />,
};
