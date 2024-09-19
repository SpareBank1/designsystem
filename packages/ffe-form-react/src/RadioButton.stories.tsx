import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
    title: 'components/form/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Standard: Story = {
    args: {
        inline: false,
        onColoredBg: false,
        children: 'Bankkunde',
        labelProps: {},
        selectedValue: 'bankkunde',
        value: 'bankkunde',
        tooltip: 'tooltip',
        tooltipProps: {},
    },
    render: function Render(args) {
        return <RadioButton {...args} />;
    },
};
