import React, { FunctionComponent } from 'react';
import { SystemMessage } from './SystemMessage';
import type { StoryObj, Meta } from '@storybook/react';
import { MessageHeader } from './MessageHeader';
import { MessageIcon } from './MessageIcon';
import { MessageList } from './MessageList';
import { LinkText } from '@sb1/ffe-core-react';

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
        type: 'info',
    },
    render: args => (
        <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
            <LinkText>Lenke</LinkText>
        </SystemMessage>
    ),
};

export const Info: Story = {
    args: {
        type: 'info',
    },
    render: args => (
        <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
    ),
};

export const Tips: Story = {
    args: {
        type: 'tips',
    },
    render: args => (
        <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
    ),
};

export const Success: Story = {
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

export const Warning: Story = {
    args: {
        type: 'warning',
    },
    render: args => (
        <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
    ),
};

export const Error: Story = {
    args: {
        type: 'error',
    },
    render: args => (
        <SystemMessage {...args}>
            Systemmeldinger skal bare brukes til viktige, midlertidige
            meldinger.
        </SystemMessage>
    ),
};
