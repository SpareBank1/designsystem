import React from 'react';
import { Feedback } from './Feedback';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Feedback> = {
    title: 'Komponenter/Feedback/Feedback',
    component: Feedback,
};
export default meta;

type Story = StoryObj<typeof Feedback>;
export const Standard: Story = {
    args: {
        // Removing the headingLevel property to use default value (5)
        onThumbClick: () => console.log('Thumb clicked'),
        onFeedbackSend: text => console.log('Feedback sent:', text),
    },
    render: args => <Feedback {...args} />,
};

// Adding an example with explicit heading level for comparison
export const WithLargeHeading: Story = {
    args: {
        headingLevel: 2,
        onThumbClick: () => console.log('Thumb clicked'),
        onFeedbackSend: text => console.log('Feedback sent:', text),
    },
    render: args => <Feedback {...args} />,
};
