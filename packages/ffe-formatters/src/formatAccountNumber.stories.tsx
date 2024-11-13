import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { formatAccountNumber } from './formatAccountNumber';

const Demo: React.FC<{ accountNumber: string }> = ({ accountNumber }) => {
    return <>{formatAccountNumber(accountNumber)}</>;
};

const meta: Meta<typeof Demo> = {
    title: 'Komponenter/Formatters/formatAccountNumber',
    component: Demo,
};
export default meta;

type Story = StoryObj<typeof Demo>;

export const Standard: Story = {
    args: {
        accountNumber: '90010012345',
    },
    render: args => <Demo {...args} />,
};
