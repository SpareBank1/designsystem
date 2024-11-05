import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
    title: 'Komponenter/Form/RadioButton',
    component: RadioButton,
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Standard: Story = {
    args: {
        inline: false,
        onColoredBg: false,
        labelProps: {},
        selectedValue: 'bankkunde',
        value: 'bankkunde',
        children: 'Bankkunde',
    },
    render: function Render(args) {
        return <RadioButton {...args} />;
    },
};
export const ToolTip: Story = {
    args: {
        ...Standard.args,
        children: 'Månedlig fakturering',
        tooltip:
            'Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert.',
    },
    render: function Render(args) {
        return <RadioButton {...args} />;
    },
};
