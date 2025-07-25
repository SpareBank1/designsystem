import React from 'react';
import { ChartDonut } from './ChartDonut';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ChartDonut> = {
    title: 'Komponenter/Chart-donut/ChartDonut',
    component: ChartDonut,
};
export default meta;

type Story = StoryObj<typeof ChartDonut>;

export const Standard: Story = {
    args: {
        name: 'Name',
        firstLabel: 'First label',
        lastLabel: 'Last label',
        percentage: 42,
    },
    render: args => <ChartDonut {...args} />,
};
export const Custom: Story = {
    args: {
        name: 'Name',
        percentage: 42,
        label: (
            <div
                style={{
                    marginTop: 10,
                    textAlign: 'center',
                    color: 'var(--ffe-color-foreground-emphasis)',
                }}
            >
                Du har selv ansvar
                <br />
                <strong>for all styling</strong>
            </div>
        ),
    },
    render: args => <ChartDonut {...args} />,
};
