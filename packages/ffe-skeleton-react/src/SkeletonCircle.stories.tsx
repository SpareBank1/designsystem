import React from 'react';
import { SkeletonCircle } from './SkeletonCircle';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SkeletonCircle> = {
    title: 'Komponenter/Skeleton/SkeletonCircle',
    component: SkeletonCircle,
};
export default meta;

type Story = StoryObj<typeof SkeletonCircle>;

export const Standard: Story = {
    args: {
        size: 'lg',
    },
    render: args => <SkeletonCircle {...args}></SkeletonCircle>,
};
