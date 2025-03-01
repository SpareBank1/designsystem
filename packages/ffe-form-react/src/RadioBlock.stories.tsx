import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioBlock } from './RadioBlock';

const meta: Meta<typeof RadioBlock> = {
    title: 'Komponenter/Form/RadioBlock',
    component: RadioBlock,
};
export default meta;

type Story = StoryObj<typeof RadioBlock>;

export const Standard: Story = {
    args: {
        checked: false,
        label: 'Ektefelle, samboer eller registrert partner',
        value: 'partner',
        selectedValue: 'partner',
        showChildren: false,
        children:
            'Da må ektefelle, samboer eller registrert partner skrive inn detaljene sine under.',
    },
    render: function Render(args) {
        return <RadioBlock {...args} />;
    },
};
