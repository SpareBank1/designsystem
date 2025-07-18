import React, { useId, useState } from 'react';
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
        name: 'favorittlukt',
        label: 'Hva er din favorittlukt?',
    },
    render: function Render(args) {
        type Value = 'grass' | 'asphalt' | 'pollen';
        const [selectedValue, setSelectedValue] = useState<Value>('asphalt');
        const id = useId();

        return (
            <RadioButtonInputGroup
                {...args}
                name={args.name + id}
                selectedValue={selectedValue}
                onChange={e => setSelectedValue(e.target.value as Value)}
            >
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
    args: { ...Standard.args, fieldMessage: 'Feil lukt', name: 'feil-lukt' },
    render: function Render(args) {
        type Value = 'grass' | 'asphalt' | 'pollen';
        const [selectedValue, setSelectedValue] = useState<Value>('pollen');
        const id = useId();

        return (
            <RadioButtonInputGroup
                {...args}
                name={args.name + id}
                selectedValue={selectedValue}
                onChange={e => setSelectedValue(e.target.value as Value)}
            >
                {inputProps => (
                    <>
                        <RadioButton
                            {...inputProps}
                            aria-invalid="true"
                            value="grass"
                        >
                            Gress
                        </RadioButton>
                        <RadioButton
                            {...inputProps}
                            aria-invalid="true"
                            value="asphalt"
                        >
                            Asfalt
                        </RadioButton>
                        <RadioButton
                            {...inputProps}
                            aria-invalid="true"
                            value="pollen"
                        >
                            Pollen
                        </RadioButton>
                    </>
                )}
            </RadioButtonInputGroup>
        );
    },
};

export const WithRadioSwitch: Story = {
    args: { ...Standard.args, name: 'radio-switch' },
    render: function Render(args) {
        type Value = 'yes' | 'no';
        const [selectedValue, setSelectedValue] = useState<Value>('yes');
        const id = useId();

        return (
            <RadioButtonInputGroup
                {...args}
                name={args.name + id}
                selectedValue={selectedValue}
                onChange={e => setSelectedValue(e.target.value as Value)}
            >
                {inputProps => (
                    <RadioSwitch
                        leftLabel="Ja"
                        leftValue="yes"
                        rightLabel="Nei"
                        rightValue="no"
                        {...inputProps}
                    />
                )}
            </RadioButtonInputGroup>
        );
    },
};

export const WithRadioBlock: Story = {
    args: { ...Standard.args, name: 'radio-block' },
    render: function Render(args) {
        type Value = 'yes' | 'no';
        const [selectedValue, setSelectedValue] = useState<Value>('yes');
        const id = useId();

        return (
            <RadioButtonInputGroup
                {...args}
                name={args.name + id}
                selectedValue={selectedValue}
                onChange={e => setSelectedValue(e.target.value as Value)}
            >
                {inputProps => (
                    <>
                        <RadioBlock {...inputProps} label="Ja" value="yes" />
                        <RadioBlock
                            {...inputProps}
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
