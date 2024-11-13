import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { formatDate } from './formatDate';

interface DemoParams {
    timestamp: Date | number;
}

const Demo: React.FC<DemoParams> = ({ timestamp }) => {
    return <>{formatDate(timestamp)}</>;
};

const meta: Meta<typeof Demo> = {
    title: 'Komponenter/Formatters/formatDate',
    component: Demo,
    argTypes: {
        timestamp: { control: 'date' },
    },
};
export default meta;

type Story = StoryObj<typeof Demo>;

export const Standard: Story = {
    args: {
        timestamp: new Date(),
    },
    render: args => <Demo {...args} />,
};
