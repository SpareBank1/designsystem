import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioSwitch } from './RadioSwitch';
import { RadioButtonInputGroup } from './RadioButtonInputGroup';

const meta: Meta<typeof RadioSwitch> = {
    title: 'Komponenter/Form/RadioSwitch',
    component: RadioSwitch,
};
export default meta;

type Story = StoryObj<typeof RadioSwitch>;

const RadioSwitchWithGroup = (args: any) => {
    const [selected, setSelected] = useState(args.selectedValue);

    return (
        <RadioButtonInputGroup
            label="Velg et alternativ"
            name="radio-switch-demo"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => <RadioSwitch {...args} {...inputProps} />}
        </RadioButtonInputGroup>
    );
};

const RadioSwitchAriaInvalid = (args: any) => {
    const [selected, setSelected] = useState(args.selectedValue);

    return (
        <RadioButtonInputGroup
            label="Velg et alternativ"
            name="radio-switch-invalid-demo"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => (
                <RadioSwitch {...args} {...inputProps} aria-invalid="true" />
            )}
        </RadioButtonInputGroup>
    );
};

export const Standard: Story = {
    args: {
        leftLabel: 'Ja',
        leftValue: 'true',
        rightLabel: 'Nei',
        rightValue: 'false',
        selectedValue: 'true',
    },
    render: function Render(args) {
        return <RadioSwitchWithGroup {...args} />;
    },
};

export const AriaInvalid: Story = {
    args: {
        leftLabel: 'Ja',
        leftValue: 'true',
        rightLabel: 'Nei',
        rightValue: 'false',
        selectedValue: 'true',
    },
    render: function Render(args) {
        return <RadioSwitchAriaInvalid {...args} />;
    },
};
