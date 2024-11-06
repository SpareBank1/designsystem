import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
    title: 'Komponenter/Form/Label',
    component: Label,
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Standard: Story = {
    args: {
        children: 'Skriv inn alder',
    },
    render: args => <Label {...args} />,
};
