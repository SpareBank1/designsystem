import React from 'react';
import { Progressbar } from './Progressbar';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Progressbar> = {
    title: 'Komponenter/Progressbar/Progressbar',
    component: Progressbar,
};
export default meta;

type Story = StoryObj<typeof Progressbar>;

export const Standard: Story = {
    args: {
        value: 40,
        max: 100,
    },
    render: args => <Progressbar {...args}></Progressbar>,
};

export const Success: Story = {
    args: {
        value: 40,
        max: 100,
        success: true,
    },
    render: args => <Progressbar {...args}></Progressbar>,
};

export const WithAria: Story = {
    args: {
        value: 2500,
        max: 5000,
        'aria-label': 'Nedbetaling av lån i prosent',
    },
    render: args => <Progressbar {...args}></Progressbar>,
};
