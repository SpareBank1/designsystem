import { InputGroup } from '@sb1/ffe-form-react';
import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { DateInput, DateInputProps } from './DateInput';
import { BodyText } from '@sb1/ffe-core-react';

const meta: Meta<typeof DateInput> = {
    title: 'Komponenter/Datepicker/DateInput',
    component: DateInput,
    parameters: {
        docs: {
            description: {
                component:
                    'DateInput er et enkelt tekstfelt for datoinntasting. Skal kun brukes på mobile enheter som et alternativ til Datepicker, da det gir bedre UX — brukeren taster inn dato direkte i stedet for å navigere en kalender på liten skjerm. På desktop skal Datepicker brukes.',
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof DateInput>;

export const Standard: Story = {
    args: {
        locale: 'nb',
        ariaInvalid: 'false',
    },
    render: function Render({ value, onChange, ...args }: DateInputProps) {
        const [date, setDate] = useState('01.12.2024');

        return (
            <>
                <BodyText>
                    Skal kun brukes på mobile enheter som et alternativ til
                    Datepicker, da det gir bedre UX. På desktop skal Datepicker
                    brukes.
                </BodyText>
                <InputGroup label="Dato" labelId="dateinput-label">
                    <DateInput
                        id="dateinput-label"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        {...args}
                    />
                </InputGroup>
            </>
        );
    },
};

export const AriaInvalid: Story = {
    args: {
        ...Standard.args,
        ariaInvalid: 'true',
    },
    render: function Render({ value, onChange, ...args }: DateInputProps) {
        const [date, setDate] = useState('foobar');

        return (
            <InputGroup
                label="Dato"
                labelId="dateinput-label"
                aria-invalid={true}
                fieldMessage="Ugyldig dato"
            >
                <DateInput
                    id="dateinput-label"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    {...args}
                />
            </InputGroup>
        );
    },
};
