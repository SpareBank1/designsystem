import React, { useId, useState } from 'react';
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
    const id = useId();

    return (
        <RadioButtonInputGroup
            label="Velg et alternativ"
            name={`radio-switch-demo${id}`}
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => <RadioSwitch {...args} {...inputProps} />}
        </RadioButtonInputGroup>
    );
};

const RadioSwitchAriaInvalid = (args: any) => {
    const [selected, setSelected] = useState(args.selectedValue);
    const id = useId();

    return (
        <RadioButtonInputGroup
            label="Velg et alternativ"
            name={`radio-switch-invalid-demo${id}`}
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
    },
    render: function Render(args) {
        return <RadioSwitchAriaInvalid {...args} />;
    },
};

export const WithDescription: Story = {
    args: {
        ...Standard.args
    },
    render: function Render(args) {
        const [selected, setSelected] = useState(args.selectedValue);
        const id = useId();

        return (
            <RadioButtonInputGroup
                label="Velg faktureringstype"
                name={`radio-button-description-demo-${id}`}
                onChange={e => setSelected(e.target.value)}
                selectedValue={selected}
                description="Velg faktureringstype for abonnementet ditt. Dette påvirker hvor ofte du vil motta faktura."
            >

                {inputProps => <RadioSwitch {...args} {...inputProps} />}
            </RadioButtonInputGroup>
        );
    },
};

