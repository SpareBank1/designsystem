import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { formatDistance } from './formatDistance';

interface DemoParams {
    distance: string | number;
    unit?: string;
}

const Demo: React.FC<DemoParams> = ({ unit, distance }) => {
    return <>{formatDistance(distance, { unit })}</>;
};

const meta: Meta<typeof Demo> = {
    title: 'Komponenter/Formatters/formatDistance',
    component: Demo,
    argTypes: {
        unit: { control: 'text' },
    },
};
export default meta;

type Story = StoryObj<typeof Demo>;

export const Standard: Story = {
    args: {
        distance: '160 520',
    },
    render: args => <Demo {...args} />,
};
