import React, { FunctionComponent } from 'react';
import { MessageBox } from './MessageBox';
import { MessageHeader } from './MessageHeader';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof MessageBox> = {
    title: 'Komponenter/Messages/MessageBox',
    component: MessageBox,
    subcomponents: {
        MessageHeader: MessageHeader as FunctionComponent<unknown>,
    },
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
