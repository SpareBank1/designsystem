import React from 'react';
import { DividerLine } from './DividerLine';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof DividerLine> = {
    title: 'Komponenter/Core/DividerLine',
    component: DividerLine,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof DividerLine>;

export const Standard: Story = {
    args: {},
    render: args => <DividerLine {...args} />,
};
