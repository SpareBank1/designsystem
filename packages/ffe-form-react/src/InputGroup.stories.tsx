import React from 'react';
import { Input } from './Input';
import { InputGroup } from './InputGroup';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof InputGroup> = {
    title: 'components/form/InputGroup',
    component: InputGroup,
    tags: ['autodocs'],
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
