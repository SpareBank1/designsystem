import React from 'react';
import { SystemMessage } from './SystemMessage';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SystemMessage> = {
    title: 'components/messages/SystemMessage',
    component: SystemMessage,
};
export default meta;

type Story = StoryObj<typeof SystemMessage>;

export const Standard: Story = {
    args: {
        type: 'success',
    },
    render: args => (
        <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
    ),
};
