import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioButtonInputGroup } from './RadioButtonInputGroup';
import { RadioButton } from './RadioButton';
import { RadioSwitch } from './RadioSwitch';
import { RadioBlock } from './RadioBlock';

const meta: Meta<typeof RadioButtonInputGroup> = {
    title: 'Komponenter/Form/RadioButtonInputGroup',
    component: RadioButtonInputGroup,
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

export const FieldMessage: Story = {
    args: { ...Standard.args, fieldMessage: 'Feil lukt' },
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

export const WithRadioSwitch: Story = {
    args: { ...Standard.args },
    render: function Render(args) {
        return (
            <RadioButtonInputGroup {...args}>
                {inputProps => (
                    <RadioSwitch
                        leftLabel="Ja"
                        leftValue={true}
                        rightLabel="Nei"
                        rightValue={false}
                        {...inputProps}
                    />
                )}
            </RadioButtonInputGroup>
        );
    },
};

export const WithRadioBlock: Story = {
    args: { ...Standard.args, selectedValue: 'yes' },
    render: function Render(args) {
        return (
            <RadioButtonInputGroup {...args}>
                {inputProps => (
                    <>
                        <RadioBlock
                            {...inputProps}
                            label="Ja"
                            value="yes"
                            // @ts-ignore
                            selectedValue={args.selectedValue}
                        />
                        <RadioBlock
                            {...inputProps}
                            // @ts-ignore
                            selectedValue={args.selectedValue}
                            label="Nei"
                            showChildren={true}
                            value="no"
                        >
                            Vil ikke!
                        </RadioBlock>
                    </>
                )}
            </RadioButtonInputGroup>
        );
    },
};
