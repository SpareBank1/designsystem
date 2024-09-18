import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioButtonInputGroup } from './RadioButtonInputGroup';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButtonInputGroup> = {
    title: 'components/form/RadioButtonInputGroup',
    component: RadioButtonInputGroup,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof RadioButtonInputGroup>;

export const Standard: Story = {
    args: {
        inline: false,
        onColoredBg: false,
        name: 'name',
        label: 'Hva er din favorittlukt?',
    },
    render: function Render(args) {
        return (
            <RadioButtonInputGroup {...args}>
                {inputProps => (
                    <>
                        <RadioButton {...inputProps} value="grass">
                            Gress
                        </RadioButton>
                        <RadioButton {...inputProps} value="asphalt">
                            Asfalt
                        </RadioButton>
                        <RadioButton {...inputProps} value="pollen">
                            Pollen
                        </RadioButton>
                    </>
                )}
            </RadioButtonInputGroup>
        );
    },
};
