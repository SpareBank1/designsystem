import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { formatPercentage } from './formatPercentage';

interface DemoParams {
    amount: number | string;
    minDecimals?: number;
    maxDecimals?: number;
}

const Demo: React.FC<DemoParams> = ({ amount, ...rest }) => {
    return <>{formatPercentage(amount, { ...rest })}</>;
};

const meta: Meta<typeof Demo> = {
    title: 'Komponenter/Formatters/formatPercentage',
    component: Demo,
    argTypes: {
        minDecimals: { control: 'number' },
        maxDecimals: { control: 'number' },
    },
};
export default meta;

type Story = StoryObj<typeof Demo>;

export const Standard: Story = {
    args: {
        amount: '49',
    },
    render: args => <Demo {...args} />,
};
