import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
    title: 'Komponenter/Badge',
    component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Standard: Story = {
    args: {},
    render: args => <Badge {...args}>9</Badge>,
};

export const InContext: Story = {
    args: {
        ...Standard.args,
    },
    render: args => (
        <div
            style={{
                display: 'flex',
                gap: '8px',
                color: 'var(--ffe-color-foreground-default)',
            }}
        >
            Meldinger
            <Badge {...args}>23</Badge>
        </div>
    ),
};

export const Indicator: Story = {
    args: {},
    render: args => (
        <div
            style={{
                height: '24px',
                width: '24px',
                backgroundColor: 'var(--ffe-color-surface-secondary-default)',
                borderRadius: '50%',
            }}
        >
            <Badge {...args} />
        </div>
    ),
};
