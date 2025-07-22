import React from 'react';
import { Icon } from './Icon';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Icon> = {
    title: 'Komponenter/Icons/Icon',
    component: Icon,
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Standard: Story = {
    args: {
        size: 'md',
        ariaLabel: 'hjem',
        fileUrl: './icons/open/300/md/house.svg',
    },
    render: args => <Icon {...args} />,
};

export const NoAriaLabel: Story = {
    args: { ...Standard.args, ariaLabel: undefined },
    render: args => <Icon {...args} />,
};

export const Sizes: Story = {
    args: { ...Standard.args, ariaLabel: undefined },
    render: args => (
        <>
            <Icon
                fileUrl="./icons/open/300/sm/star.svg"
                size="sm"
                ariaLabel="sm stjerne"
            />
            <Icon
                fileUrl="./icons/open/300/md/star.svg"
                size="md"
                ariaLabel="md stjerne"
            />
            <Icon
                fileUrl="./icons/open/300/lg/star.svg"
                size="lg"
                ariaLabel="lg stjerne"
            />
            <Icon
                fileUrl="./icons/open/300/xl/star.svg"
                size="xl"
                ariaLabel="xl stjerne"
            />
        </>
    ),
};

export const Weights: Story = {
    args: { ...Standard.args, ariaLabel: undefined },
    render: args => (
        <>
            <Icon
                fileUrl="./icons/open/300/md/house.svg"
                size="md"
                ariaLabel="hus"
            />
            <Icon
                fileUrl="./icons/open/400/md/house.svg"
                size="md"
                ariaLabel="hus"
            />
            <Icon
                fileUrl="./icons/open/500/md/house.svg"
                size="md"
                ariaLabel="hus"
            />
        </>
    ),
};

export const UniversellUtforming: Story = {
    args: { ...Standard.args, ariaLabel: undefined },
    render: args => (
        <>
            <Icon
                fileUrl="./icons/open/300/md/house.svg"
                size="md"
                ariaLabel="hus"
            />
            <Icon fileUrl="./icons/open/300/md/house.svg" size="md" />
        </>
    ),
};
