import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { TextArea } from './TextArea';
import { InputGroup } from './InputGroup';
import { ErrorFieldMessage } from './message';

const meta: Meta<typeof TextArea> = {
    title: 'Komponenter/Form/TextArea',
    component: TextArea,
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Standard: Story = {
    args: {},
    render: function Render(args) {
        return (
            <InputGroup label="Beskriv skaden">
                <TextArea {...args} />
            </InputGroup>
        );
    },
};

export const FieldMessage: Story = {
    args: {
        ...Standard.args,
    },
    render: args => (
        <InputGroup
            fieldMessage={<ErrorFieldMessage>Feilmelding</ErrorFieldMessage>}
        >
            <TextArea {...args} />
        </InputGroup>
    ),
};

export const WithDescription: Story = {
    args: {
        ...Standard.args,
    },
    render: args => (
        <InputGroup
            label={'Beskriv skaden'}
            description='Prøv å være så konkret som mulig'>
            <TextArea {...args} />
        </InputGroup>
    ),
};