import React from 'react';
import { Checkbox } from './Checkbox';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
    title: 'components/form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Standard: Story = {
    args: {
        noMargins: false,
        hiddenLabel: false,
        inline: false,
        onColoredBg: false,
    },
    render: args => (
        <fieldset className="ffe-input-group">
            <legend className="ffe-form-label ffe-form-label--block">
                Hvilke aviser leser du?
            </legend>
            <Checkbox {...args} name="newspapers" value="vg">
                VG
            </Checkbox>
        </fieldset>
    ),
};
