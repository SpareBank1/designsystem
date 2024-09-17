import React from 'react';
import { Feedback } from './Feedback';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Feedback> = {
    title: 'components/feedback/Feedback',
    component: Feedback,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Feedback>;
export const Standard: Story = {
    args: {
        headingLevel: 2,
    },
    render: args => <Feedback {...args} />,
};
