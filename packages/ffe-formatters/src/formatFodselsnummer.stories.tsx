import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { formatFodselsnummer } from './formatFodselsnummer';

interface DemoParams {
    ssn: string;
}

const Demo: React.FC<DemoParams> = ({ ssn }) => {
    return <>{formatFodselsnummer(ssn)}</>;
};

const meta: Meta<typeof Demo> = {
    title: 'Komponenter/Formatters/formatFodselsnummer',
    component: Demo,
};
export default meta;

type Story = StoryObj<typeof Demo>;

export const Standard: Story = {
    args: {
        ssn: '01010112345',
    },
    render: args => <Demo {...args} />,
};
