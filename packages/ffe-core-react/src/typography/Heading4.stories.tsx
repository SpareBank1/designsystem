import React from 'react';
import { Heading4 } from './Heading';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Heading4> = {
    title: 'components/core/Heading4',
    component: Heading4,
};
export default meta;

type Story = StoryObj<typeof Heading4>;

export const Standard: Story = {
    args: {
        error: false,
        inline: false,
        lookLike: 4,
        noMargin: false,
        withBorder: false,
        textCenter: false,
        children: 'Some text',
    },
    render: args => <Heading4 {...args} />,
};
