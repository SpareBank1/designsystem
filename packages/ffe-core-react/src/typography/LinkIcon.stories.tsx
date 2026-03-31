import React from 'react';
import { LinkIcon } from './LinkIcon';
import type { StoryObj, Meta } from '@storybook/react';
import { Icon } from '@sb1/ffe-icons-react';

const meta: Meta<typeof LinkIcon> = {
    title: 'Komponenter/Core/LinkIcon',
    component: LinkIcon,
};
export default meta;

type Story = StoryObj<typeof LinkIcon>;

export const Standard: Story = {
    args: {
        as: 'a',
        href: '#',
        children: (
            <Icon
                fileUrl="./icons/open/400/md/close.svg"
                ariaLabel="Lukk"
                size="md"
            />
        ),
    },
    render: args => <LinkIcon {...args} />,
};
