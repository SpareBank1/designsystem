import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioSwitch } from './RadioSwitch';

const meta: Meta<typeof RadioSwitch> = {
    title: 'components/form/RadioSwitch',
    component: RadioSwitch,
};
export default meta;

type Story = StoryObj<typeof RadioSwitch>;

export const Standard: Story = {
    args: {
        leftLabel: 'Ja',
        leftValue: 'true',
        rightLabel: 'Nei',
        rightValue: 'false',
        selectedValue: 'true',
    },
    render: function Render(args) {
        return <RadioSwitch {...args} />;
    },
};
