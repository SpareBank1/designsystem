import React from 'react';
import { Input } from './Input';
import { InputGroup } from './InputGroup';
import type { StoryObj, Meta } from '@storybook/react';
import { ErrorFieldMessage } from './message';

const meta: Meta<typeof Input> = {
    title: 'Komponenter/Form/Input',
    component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Standard: Story = {
    args: {
        inline: false,
        textRightAlign: false,
    },
    render: args => (
        <InputGroup label="Navn">
            <Input {...args} />
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
            <Input {...args} />
        </InputGroup>
    ),
};
