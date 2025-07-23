import React from 'react';
import { Checkbox } from './Checkbox';
import type { StoryObj, Meta } from '@storybook/react';
import { InputGroup } from './InputGroup';

const meta: Meta<typeof Checkbox> = {
    title: 'Komponenter/Form/Checkbox',
    component: Checkbox,
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Standard: Story = {
    args: {
        noMargins: false,
        hiddenLabel: false,
        inline: true,
    },
    render: args => (
        <fieldset className="ffe-input-group">
            <legend className="ffe-form-label ffe-form-label--block">
                Hvilke aviser leser du?
            </legend>
            <Checkbox {...args} name="newspapers" value="vg">
                VG
            </Checkbox>
            <Checkbox {...args} name="newspapers" value="dagbladet">
                Dagbladet
            </Checkbox>
        </fieldset>
    ),
};

export const InlineFalse: Story = {
    ...Standard,
    args: {
        ...Standard.args,
        inline: false,
    },
    render: args => (
        <fieldset className="ffe-input-group">
            <legend className="ffe-form-label ffe-form-label--block">
                Hvilke aviser leser du?
            </legend>
            <Checkbox {...args} name="newspapers" value="vg">
                VG
            </Checkbox>
            <Checkbox {...args} name="newspapers" value="dagbladet">
                Dagbladet
            </Checkbox>
        </fieldset>
    ),
};

export const HiddenLabel: Story = {
    ...Standard,
    args: {
        defaultChecked: true,
        hiddenLabel: true,
        inline: false,
    },
    render: args => <Checkbox {...args}>Jeg har en ingen label</Checkbox>,
};

export const AriaInvalid: Story = {
    ...Standard,
    args: {
        'aria-invalid': true,
    },
    render: args => (
        <Checkbox {...args}>Ja, jeg vil gjerne motta reklame!</Checkbox>
    ),
};

export const RenderProps: Story = {
    ...Standard,
    args: {
        checked: true,
    },
    render: args => (
        <Checkbox {...args}>
            {labelProps => (
                <label
                    htmlFor={labelProps.htmlFor}
                    className={labelProps.className}
                >
                    Her benyttes render props
                </label>
            )}
        </Checkbox>
    ),
};

export const Description: Story = {
    args: {
        ...Standard.args,
        inline: false,
    },
    render: args => (
        <InputGroup label="Hva pleier du å lese?" description="Velg en eller flere aviser">
            {() => (
                <>
                    <Checkbox {...args} name="newspapers" value="vg">
                        VG
                    </Checkbox>
                    <Checkbox {...args} name="newspapers" value="dagbladet">
                        Dagbladet
                    </Checkbox>
                    <Checkbox {...args} name="newspapers" value="nrk">
                        NRK
                    </Checkbox>
                </>
            )}
        </InputGroup>
    ),
};
