import React from 'react';
import { MessageBox } from './MessageBox';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof MessageBox> = {
    title: 'components/messages/MessageBox',
    component: MessageBox,
};
export default meta;

type Story = StoryObj<typeof MessageBox>;

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
