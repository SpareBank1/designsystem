import React from 'react';
import { EmphasizedText } from './EmphasizedText';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof EmphasizedText> = {
    title: 'components/core/EmphasizedText',
    component: EmphasizedText,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof EmphasizedText>;

export const Standard: Story = {
    args: {
        children: 'Some text',
    },
    render: args => <EmphasizedText {...args} />,
};
