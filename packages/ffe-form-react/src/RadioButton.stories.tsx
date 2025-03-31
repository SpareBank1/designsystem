import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { RadioButton } from './RadioButton';
import { RadioButtonInputGroup } from './RadioButtonInputGroup';

const meta: Meta<typeof RadioButton> = {
    title: 'Komponenter/Form/RadioButton',
    component: RadioButton,
};
export default meta;

type Story = StoryObj<typeof RadioButton>;

const RadioButtonWithGroup = (args: any) => {
    const [selected, setSelected] = useState(args.selectedValue);

    return (
        <RadioButtonInputGroup
            label="Velg kundetype"
            name="radio-button-demo"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => (
                <>
                    <RadioButton value="bankkunde" {...inputProps}>
                        Bankkunde
                    </RadioButton>
                    <RadioButton value="bedriftskunde" {...inputProps}>
                        Bedriftskunde
                    </RadioButton>
                </>
            )}
        </RadioButtonInputGroup>
    );
};

const RadioButtonInlineWithGroup = (args: any) => {
    const [selected, setSelected] = useState(args.selectedValue);

    return (
        <RadioButtonInputGroup
            label="Velg betalingsfrekvens"
            name="radio-button-inline-demo"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
            inline={true}
        >
            {inputProps => (
                <>
                    <RadioButton value="monthly" {...inputProps}>
                        Månedlig
                    </RadioButton>
                    <RadioButton value="quarterly" {...inputProps}>
                        Kvartalsvis
                    </RadioButton>
                    <RadioButton value="yearly" {...inputProps}>
                        Årlig
                    </RadioButton>
                </>
            )}
        </RadioButtonInputGroup>
    );
};

const RadioButtonWithGroupTooltip = (args: any) => {
    const [selected, setSelected] = useState(args.selectedValue);

    return (
        <RadioButtonInputGroup
            label="Velg faktureringstype"
            name="radio-button-tooltip-demo"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
        >
            {inputProps => (
                <>
                    <RadioButton
                        value="monthly"
                        tooltip="Månedlig fakturering er enklest å planlegge for. Passer for deg som liker å planlegge litt etter hvert."
                        {...inputProps}
                    >
                        Månedlig fakturering
                    </RadioButton>
                    <RadioButton
                        value="quarterly"
                        tooltip="Kvartalsvis fakturering gir deg mer oversikt. Passer for deg som liker å planlegge godt."
                        {...inputProps}
                    >
                        Kvartalsvis fakturering
                    </RadioButton>
                </>
            )}
        </RadioButtonInputGroup>
    );
};

const RadioButtonAriaInvalid = (args: any) => {
    const [selected, setSelected] = useState(args.selectedValue);

    return (
        <RadioButtonInputGroup
            label="Velg faktureringstype"
            name="radio-button-invalid-demo"
            onChange={e => setSelected(e.target.value)}
            selectedValue={selected}
            fieldMessage="Velg årlig fakturering"
        >
            {inputProps => (
                <>
                    <RadioButton
                        value="monthly"
                        aria-invalid="true"
                        {...inputProps}
                    >
                        Månedlig fakturering
                    </RadioButton>
                    <RadioButton
                        value="quarterly"
                        aria-invalid="true"
                        {...inputProps}
                    >
                        Kvartalsvis fakturering
                    </RadioButton>
                </>
            )}
        </RadioButtonInputGroup>
    );
};

export const Standard: Story = {
    args: {
        selectedValue: 'bankkunde',
    },
    render: function Render(args) {
        return <RadioButtonWithGroup {...args} />;
    },
};

export const Inline: Story = {
    args: {
        selectedValue: 'monthly',
    },
    render: function Render(args) {
        return <RadioButtonInlineWithGroup {...args} />;
    },
};

export const AriaInvalid: Story = {
    args: {
        selectedValue: 'monthly',
    },
    render: function Render(args) {
        return <RadioButtonAriaInvalid {...args} />;
    },
};

export const WithTooltip: Story = {
    args: {
        selectedValue: 'monthly',
    },
    render: function Render(args) {
        return <RadioButtonWithGroupTooltip {...args} />;
    },
};
