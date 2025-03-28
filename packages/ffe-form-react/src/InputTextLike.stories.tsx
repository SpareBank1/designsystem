import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Paragraph } from '@sb1/ffe-core-react';
import { InputTextLike } from './InputTextLike';

const meta: Meta<typeof InputTextLike> = {
    title: 'Komponenter/Form/InputTextLike',
    component: InputTextLike,
};
export default meta;

type Story = StoryObj<typeof InputTextLike>;

export const Standard: Story = {
    args: {
        ariaLabel: 'Skriv inn alder',
        style: { width: 47 },
    },
    render: args => (
        <Paragraph>
            Jeg er <InputTextLike {...args} /> år gammel
        </Paragraph>
    ),
};

export const AriaInvalid: Story = {
    args: {
        ariaLabel: 'Skriv inn alder',
        'aria-invalid': true,
        style: { width: 47 },
    },
    render: args => (
        <Paragraph>
            Jeg er <InputTextLike {...args} /> år gammel
        </Paragraph>
    ),
};
