import React from 'react';
import { LinkIcon } from './LinkIcon';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof LinkIcon> = {
    title: 'Komponenter/Core/LinkIcon',
    component: LinkIcon,
};
export default meta;

type Story = StoryObj<typeof LinkIcon>;

export const Standard: Story = {
    args: {
        children: 'Some text',
    },
    render: args => <LinkIcon {...args} />,
};
