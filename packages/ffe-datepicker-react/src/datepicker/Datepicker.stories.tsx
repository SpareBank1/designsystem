import React, { useState } from 'react';
import { Datepicker, DatepickerProps } from './Datepicker';
import type { StoryObj, Meta } from '@storybook/react';
import { InputGroup } from '@sb1/ffe-form-react';

const meta: Meta<typeof Datepicker> = {
    title: 'Komponenter/Datepicker/Datepicker',
    component: Datepicker,
};
export default meta;

type Story = StoryObj<typeof Datepicker>;

export const Standard: Story = {
    args: {
        locale: 'nb',
        maxDate: '31.12.2025',
        minDate: '01.01.2024',
        labelId: 'datepicker-label',
    },
    render: function Render({ value, onChange, ...args }: DatepickerProps) {
        const [date, setDate] = useState('01.12.2024');

        return (
            <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                {inputProps => (
                    <Datepicker
                        value={value ?? date}
                        onChange={setDate}
                        {...inputProps}
                        {...args}
                    />
                )}
            </InputGroup>
        );
    },
};

export const FieldMessageString: Story = {
    args: {
        ...Standard.args,
    },
    render: function Render({ value, onChange, ...args }: DatepickerProps) {
        const [date, setDate] = useState('01.12.2024');

        return (
            <InputGroup
                label="Dato"
                aria-invalid={true}
                fieldMessage={'Ugyldig dato'}
                labelId={Standard?.args?.labelId}
            >
                {inputProps => (
                    <Datepicker
                        value={value ?? date}
                        onChange={setDate}
                        {...inputProps}
                        {...args}
                    />
                )}
            </InputGroup>
        );
    },
};

export const FullWidth: Story = {
    args: {
        ...Standard.args,
        fullWidth: true,
    },
    render: function Render({ value, onChange, ...args }: DatepickerProps) {
        const [date, setDate] = useState('01.12.2024');

        return (
            <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                <Datepicker
                    value={value ?? date}
                    onChange={setDate}
                    {...args}
                />
            </InputGroup>
        );
    },
};

export const CalendarAbove: Story = {
    args: {
        ...Standard.args,
        calendarAbove: true,
    },
    render: function Render({ value, onChange, ...args }: DatepickerProps) {
        const [date, setDate] = useState('01.12.2024');

        return (
            <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                <Datepicker
                    value={value ?? date}
                    onChange={setDate}
                    {...args}
                />
            </InputGroup>
        );
    },
};
