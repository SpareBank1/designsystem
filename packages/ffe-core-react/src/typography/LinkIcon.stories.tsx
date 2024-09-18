import React from 'react';
import { LinkIcon } from './LinkIcon';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof LinkIcon> = {
    title: 'components/core/LinkIcon',
    component: LinkIcon,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof LinkIcon>;

export const Standard: Story = {
    args: {
        children: 'Some text',
    },
    render: args => <LinkIcon {...args} />,
};
