import React from 'react';
import { Heading3 } from './Heading';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Heading3> = {
    title: 'Komponenter/Core/Heading3',
    component: Heading3,
};
export default meta;

type Story = StoryObj<typeof Heading3>;

export const Standard: Story = {
    args: {
        error: false,
        inline: false,
        lookLike: 3,
        noMargin: false,
        withBorder: false,
        textCenter: false,
        children: 'Some text',
    },
    render: args => <Heading3 {...args} />,
};
