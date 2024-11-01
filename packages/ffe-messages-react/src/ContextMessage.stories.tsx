import React from 'react';
import { ContextMessage } from './ContextMessage';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ContextMessage> = {
    title: 'components/messages/ContextMessage',
    component: ContextMessage,
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
