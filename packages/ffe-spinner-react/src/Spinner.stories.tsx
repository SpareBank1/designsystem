import React from 'react';
import { Spinner } from './Spinner';
import type { StoryObj, Meta } from '@storybook/react';
import { Paragraph } from '@sb1/ffe-core-react';

const meta: Meta<typeof Spinner> = {
    title: 'components/spinner/Spinner',
    component: Spinner,
    tags: ['autodocs'],
    argTypes: {
        loadingText: {
            options: ['text', 'html', 'none'],
            mapping: {
                html: <Paragraph>Vennligst vent</Paragraph>,
                text: 'Vennligst vent',
                none: undefined,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Standard: Story = {
    args: {
        loadingText: 'html',
    },
    render: args => <Spinner {...args} />,
};
