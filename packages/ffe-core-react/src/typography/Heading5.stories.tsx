import React from 'react';
import { Heading5 } from './Heading';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Heading5> = {
    title: 'Komponenter/Core/Heading5',
    component: Heading5,
};
export default meta;

type Story = StoryObj<typeof Heading5>;

export const Standard: Story = {
    args: {
        error: false,
        inline: false,
        lookLike: 5,
        noMargin: false,
        withBorder: false,
        textCenter: false,
        children: 'Some text',
    },
    render: args => <Heading5 {...args} />,
};
