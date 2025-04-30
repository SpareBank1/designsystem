import React from 'react';
import { Input } from './Input';
import { InputGroup } from './InputGroup';
import type { StoryObj, Meta } from '@storybook/react';
import { ErrorFieldMessage } from './message';

const meta: Meta<typeof InputGroup> = {
    title: 'Komponenter/Form/InputGroup',
    component: InputGroup,
};
export default meta;

type Story = StoryObj<typeof InputGroup>;

export const Standard: Story = {
    args: {
        label: 'Navn',
    },
    render: args => (
        <InputGroup {...args}>
            <Input />
        </InputGroup>
    ),
};

export const ExtraMarginFalse: Story = {
    args: { ...Standard.args, extraMargin: false },
    render: args => (
        <InputGroup {...args}>
            <Input />
        </InputGroup>
    ),
};

export const Description: Story = {
    args: {
        ...Standard.args,
        description:
            'Vi bruker telefonnummer for å sende deg kvittering på SMS',
    },
    render: args => (
        <InputGroup {...args}>
            <Input />
        </InputGroup>
    ),
};

export const ManyChildren: Story = {
    args: {
        ...Standard.args,
    },
    render: args => (
        <InputGroup {...args}>
            {props => (
                <>
                    <Input {...props} />
                    <div>Annet innhold</div>
                </>
            )}
        </InputGroup>
    ),
};

export const FieldMessageString: Story = {
    args: {
        ...Standard.args,
        fieldMessage: 'Jeg er en string-fieldMessage som gir feilmelding',
    },
    render: args => (
        <InputGroup {...args}>
            <Input />
        </InputGroup>
    ),
};

export const FieldMessageComponent: Story = {
    args: {
        ...Standard.args,
        fieldMessage: (
            <ErrorFieldMessage>
                Jeg er en ErrorFieldMessage-fieldMessage som gir feilmelding
            </ErrorFieldMessage>
        ),
    },
    render: args => (
        <InputGroup {...args}>
            <Input />
        </InputGroup>
    ),
};
