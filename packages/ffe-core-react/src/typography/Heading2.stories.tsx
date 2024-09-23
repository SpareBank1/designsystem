import React from 'react';
import { Heading2 } from './Heading';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Heading2> = {
    title: 'components/core/Heading2',
    component: Heading2,
};
export default meta;

type Story = StoryObj<typeof Heading2>;

export const Standard: Story = {
    args: {
        error: false,
        inline: false,
        lookLike: 2,
        noMargin: false,
        withBorder: false,
        textCenter: false,
        children: 'Some text',
    },
    render: args => <Heading2 {...args} />,
};
