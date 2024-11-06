import React from 'react';
import { Tab } from './Tab';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Tab> = {
    title: 'Komponenter/Tabs/Tab',
    component: Tab,
};
export default meta;

type Story = StoryObj<typeof Tab>;

export const Standard: Story = {
    args: { children: 'Dette er en fane' },
    render: args => <Tab {...args} />,
};

export const Selected: Story = {
    args: { ...Standard.args, selected: true },
    render: args => <Tab {...args} />,
};
