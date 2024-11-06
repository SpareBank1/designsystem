import React, { FunctionComponent } from 'react';
import { ContextMessage } from './ContextMessage';
import { MessageHeader } from './MessageHeader';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ContextMessage> = {
    title: 'Komponenter/Messages/ContextMessage',
    component: ContextMessage,
    subcomponents: {
        MessageHeader: MessageHeader as FunctionComponent<unknown>,
    },
};
export default meta;

type Story = StoryObj<typeof ContextMessage>;

export const Standard: Story = {
    args: {
        type: 'info',
        closeButton: true,
        header: 'Meldingstittel',
    },
    render: args => (
        <ContextMessage {...args}>
            Kontekstuelle meldinger er informasjon som skal gis i en kontekst
        </ContextMessage>
    ),
};
