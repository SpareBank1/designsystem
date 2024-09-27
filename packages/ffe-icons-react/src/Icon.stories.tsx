import React from 'react';
import { Icon } from './Icon';
import type { StoryObj, Meta } from '@storybook/react';
import house300Md from '@sb1/ffe-icons/icons/open/300/md/house.svg';
import house400Md from '@sb1/ffe-icons/icons/open/400/md/house.svg';
import house500Md from '@sb1/ffe-icons/icons/open/500/md/house.svg';
import starSm from '@sb1/ffe-icons/icons/open/300/sm/star.svg';
import starMd from '@sb1/ffe-icons/icons/open/300/md/star.svg';
import starLg from '@sb1/ffe-icons/icons/open/300/lg/star.svg';
import starXl from '@sb1/ffe-icons/icons/open/300/xl/star.svg';

const meta: Meta<typeof Icon> = {
    title: 'components/icons/Icon',
    component: Icon,
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Standard: Story = {
    args: {
        size: 'md',
        ariaLabel: 'hjem',
        fileUrl: house300Md,
    },
    render: args => <Icon {...args} />,
};

export const WrongSize: Story = {
    args: { ...Standard.args, size: 'lg' },
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
            <Icon fileUrl={starSm} size="sm" ariaLabel="sm stjerne" />
            <Icon fileUrl={starMd} size="md" ariaLabel="md stjerne" />
            <Icon fileUrl={starLg} size="lg" ariaLabel="lg stjerne" />
            <Icon fileUrl={starXl} size="xl" ariaLabel="xl stjerne" />
        </>
    ),
};

export const Weights: Story = {
    args: { ...Standard.args, ariaLabel: undefined },
    render: args => (
        <>
            <Icon fileUrl={house300Md} size="md" ariaLabel="hus" />
            <Icon fileUrl={house400Md} size="md" ariaLabel="hus" />
            <Icon fileUrl={house500Md} size="md" ariaLabel="hus" />
        </>
    ),
};

export const UniversellUtforming: Story = {
    args: { ...Standard.args, ariaLabel: undefined },
    render: args => (
        <>
            <Icon fileUrl={house300Md} size="md" ariaLabel="hus" />
            <Icon fileUrl={house300Md} size="md" />
        </>
    ),
};
