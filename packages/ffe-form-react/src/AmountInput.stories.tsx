import React from 'react';
import { InputGroup } from './InputGroup';
import type { StoryObj, Meta } from '@storybook/react';
import { AmountInput } from './AmountInput';

const meta: Meta<typeof AmountInput> = {
    title: 'Komponenter/Form/AmountInput',
    component: AmountInput,
};
export default meta;

type Story = StoryObj<typeof AmountInput>;

export const Standard: Story = {
    args: {
        locale: 'nb',
        defaultValue: 1,
    },
    render: args => (
        <InputGroup label="Navn">
            <AmountInput {...args} />
        </InputGroup>
    ),
};
