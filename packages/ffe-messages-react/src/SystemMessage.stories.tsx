import React, { FunctionComponent } from 'react';
import { SystemMessage } from './SystemMessage';
import type { StoryObj, Meta } from '@storybook/react';
import { MessageHeader } from './MessageHeader';
import { MessageIcon } from './MessageIcon';
import { MessageList } from './MessageList';

const meta: Meta<typeof SystemMessage> = {
    title: 'Komponenter/Messages/SystemMessage',
    component: SystemMessage,
    subcomponents: {
        MessageHeader: MessageHeader as FunctionComponent<unknown>,
        MessageList: MessageList as FunctionComponent<unknown>,
        MessageIcon: MessageIcon as FunctionComponent<unknown>,
    },
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
