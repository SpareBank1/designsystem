import React, { FunctionComponent } from 'react';
import { MessageBox } from './MessageBox';
import { MessageHeader } from './MessageHeader';
import type { StoryObj, Meta } from '@storybook/react';
import { LinkText } from '@sb1/ffe-core-react';

const meta: Meta<typeof MessageBox> = {
    title: 'Komponenter/Messages/MessageBox',
    component: MessageBox,
    subcomponents: {
        MessageHeader: MessageHeader as FunctionComponent<unknown>,
    },
};
export default meta;

type Story = StoryObj<typeof MessageBox>;

const messageArgs = {
    header: 'Meldingstittel',
};

export const Standard: Story = {
    args: {
        ...messageArgs,
        type: 'info',
    },
    render: args => (
        <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
            <LinkText>Lenke</LinkText>
        </MessageBox>
    ),
};

export const Info: Story = {
    args: {
        ...messageArgs,
        type: 'info',
    },
    render: args => (
        <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
    ),
};

export const Tips: Story = {
    args: {
        ...messageArgs,
        type: 'tips',
    },
    render: args => (
        <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
    ),
};

export const Success: Story = {
    args: {
        ...messageArgs,
        type: 'success',
    },
    render: args => (
        <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
    ),
};

export const Warning: Story = {
    args: {
        ...messageArgs,
        type: 'warning',
    },
    render: args => (
        <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
    ),
};

export const Error: Story = {
    args: {
        ...messageArgs,
        type: 'error',
    },
    render: args => (
        <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
    ),
};
