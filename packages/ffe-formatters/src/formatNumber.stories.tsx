import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { formatNumber } from './formatNumber';
import { Locale } from './types';

interface DemoParams {
    number: number | string | null | undefined;
    locale: Locale;
    decimals?: number;
}

const Demo: React.FC<DemoParams> = ({ number, ...rest }) => {
    return <>{formatNumber(number, { ...rest })}</>;
};

const meta: Meta<typeof Demo> = {
    title: 'Komponenter/Formatters/formatNumber',
    component: Demo,
};
export default meta;

type Story = StoryObj<typeof Demo>;

export const Standard: Story = {
    args: {
        number: '1234567890',
        locale: 'nb',
        decimals: 2,
    },
    render: args => <Demo {...args} />,
};
