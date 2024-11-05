import React from 'react';
import { Input } from './Input';
import { InputGroup } from './InputGroup';
import type { StoryObj, Meta } from '@storybook/react';

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
