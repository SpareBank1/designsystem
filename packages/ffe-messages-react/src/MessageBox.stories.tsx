import React from 'react';
import { MessageBox } from './MessageBox';
import { MessageHeader } from './MessageHeader';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof MessageBox<any>> = {
    title: 'Komponenter/Messages/MessageBox',
    component: MessageBox,
    subcomponents: { MessageHeader },
};
export default meta;

type Story = StoryObj<typeof MessageBox<any>>;

export const Standard: Story = {
    args: {
        type: 'error',
        header: 'Meldingstittel',
    },
    render: args => (
        <MessageBox {...args}>
            Meldingsboksene skal inneholde informasjon som er nyttig og relevant
            for brukerne.
        </MessageBox>
    ),
};
