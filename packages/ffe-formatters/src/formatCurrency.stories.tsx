import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { formatCurrency } from './formatCurrency';
import { Locale } from './types';

interface DemoParams {
    amount: string | number;
    prefix?: string;
    postfix?: string;
    locale: Locale;
}

const Demo: React.FC<DemoParams> = ({ amount, postfix, prefix, locale }) => {
    return <>{formatCurrency(amount, { locale, postfix, prefix })}</>;
};

const meta: Meta<typeof Demo> = {
    title: 'Komponenter/Formatters/formatCurrency',
    component: Demo,
    argTypes: {
        prefix: { control: 'text' },
        postfix: { control: 'text' },
    },
};
export default meta;

type Story = StoryObj<typeof Demo>;

export const Standard: Story = {
    args: {
        amount: '1000',
        locale: 'nb',
    },
    render: args => <Demo {...args} />,
};
