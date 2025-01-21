import React, { FunctionComponent } from 'react';
import { ContextMessage } from './ContextMessage';
import { MessageHeader } from './MessageHeader';
import type { StoryObj, Meta } from '@storybook/react';
import { LinkText } from '@sb1/ffe-core-react';

const meta: Meta<typeof ContextMessage> = {
    title: 'Komponenter/Messages/ContextMessage',
    component: ContextMessage,
    subcomponents: {
        MessageHeader: MessageHeader as FunctionComponent<unknown>,
    },
};
export default meta;

type Story = StoryObj<typeof ContextMessage>;

const messageArgs = {
    closeButton: true,
    header: 'Meldingstittel',
};

export const Standard: Story = {
    args: {
        ...messageArgs,
        type: 'info',
    },
    render: args => (
        <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
            <LinkText>Lenke</LinkText>
        </ContextMessage>
    ),
};

export const Info: Story = {
    args: {
        ...messageArgs,
        type: 'info',
    },
    render: args => (
        <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
    ),
};

export const Tips: Story = {
    args: {
        ...messageArgs,
        type: 'tips',
    },
    render: args => (
        <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
    ),
};

export const Success: Story = {
    args: {
        ...messageArgs,
        type: 'success',
    },
    render: args => (
        <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
    ),
};

export const Warning: Story = {
    args: {
        ...messageArgs,
        type: 'warning',
    },
    render: args => (
        <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
    ),
};

export const Error: Story = {
    args: {
        ...messageArgs,
        type: 'error',
    },
    render: args => (
        <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
    ),
};
