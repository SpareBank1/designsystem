import React from 'react';
import { SystemMessage } from './SystemMessage';
import type { StoryObj, Meta } from '@storybook/react';
import { MessageIcon } from './MessageIcon';

const meta: Meta<typeof SystemMessage<any>> = {
    title: 'Komponenter/Messages/SystemMessage',
    component: SystemMessage,
    subcomponents: { MessageIcon },
};
export default meta;

type Story = StoryObj<typeof SystemMessage<any>>;

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
