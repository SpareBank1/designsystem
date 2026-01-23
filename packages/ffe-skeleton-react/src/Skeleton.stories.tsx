import React from 'react';
import { Skeleton } from './Skeleton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Skeleton> = {
    title: 'Komponenter/Skeleton/Skeleton',
    component: Skeleton,
    args: {
        width: '100%',
        height: '1em',
    },
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Standard: Story = {
    args: {},
    render: args => <Skeleton {...args}></Skeleton>,
};
