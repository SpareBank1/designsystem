import React from 'react';
import { TextField } from './TextField';
import { InputGroup } from './InputGroup';
import type { StoryObj, Meta } from '@storybook/react';
import { ErrorFieldMessage } from './message';

const meta: Meta<typeof TextField> = {
    title: 'Komponenter/Form/TextField',
    component: TextField,
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Standard: Story = {
    args: {
        inline: false,
        textRightAlign: false,
    },
    render: args => (
        <InputGroup label="Navn">
            <TextField {...args} />
        </InputGroup>
    ),
};

export const WithAffixes: Story = {
    args: {
        inline: false,
        textRightAlign: false,
        prefix: 'Prefix',
        suffix: 'Suffix',
    },
    render: args => (
        <InputGroup label="Navn">
            <TextField {...args} />
        </InputGroup>
    ),
};

export const FieldMessage: Story = {
    args: {
        ...Standard.args,
    },
    render: args => (
        <InputGroup
            fieldMessage={<ErrorFieldMessage>Feilmelding</ErrorFieldMessage>}
        >
            <TextField {...args} />
        </InputGroup>
    ),
};
