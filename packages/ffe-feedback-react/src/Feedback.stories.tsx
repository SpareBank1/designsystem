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
        onThumbClick: () => console.log('Thumb clicked'),
        onFeedbackSend: text => console.log('Feedback sent:', text),
    },
    render: args => <Feedback {...args} />,
};

export const WithLargeHeading: Story = {
    args: {
        ...Standard.args,
        headingLevel: 2,
    },
    render: args => <Feedback {...args} />,
};

export const WithBGColor: Story = {
    args: {
        ...Standard.args,
        bgColor: 'secondary',
    },
    render: args => <Feedback {...args} />,
};

export const WithContactLink: Story = {
    args: {
        ...Standard.args,
        contactLink: {
            url: 'https://nav.no',
            linkText: 'Kontakt oss',
            onClick: () => console.log('Contact link clicked'),
        },
    },
    render: args => <Feedback {...args} />,
};

export const WithConsent: Story = {
    args: {
        ...Standard.args,
        includeConsent: true,
        onFeedbackSend: (text, consent) =>
            console.log('Feedback sent:', text, 'Consent given:', consent),
    },
    render: args => <Feedback {...args} />,
};

export const WithCustomHeading: Story = {
    args: {
        includeConsent: true,
        texts: {
            feedbackNotSentHeading: 'Vil du se mer av slike endringer?',
        },
    },
    render: args => <Feedback {...args} />,
};
