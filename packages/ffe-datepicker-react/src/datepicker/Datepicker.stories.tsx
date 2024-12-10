import React, { useState } from 'react';
import { Datepicker, DatepickerProviderProps } from './Datepicker';
import type { StoryObj, Meta } from '@storybook/react';
import { InputGroup } from '@sb1/ffe-form-react';
import { Locale } from '../datelogic/types';

const meta: Meta<typeof Datepicker> = {
    title: 'Komponenter/Datepicker/Datepicker',
    component: Datepicker,
};
export default meta;

type Story = StoryObj<typeof Datepicker>;

export const Standard: Story = {
    args: {
        locale: 'nb' as Locale,
        maxDate: '31.12.2025',
        minDate: '01.01.2024',
    },
    render: function Render({
        value,
        onChange,
        ...args
    }: DatepickerProviderProps) {
        const [date, setDate] = useState('01.12.2024');

        return (
            <InputGroup label="Dato">
                <Datepicker
                    value={value ?? date}
                    onChange={setDate}
                    {...args}
                />
            </InputGroup>
        );
    },
};

export const FieldMessageString: Story = {
    args: {
        ...Standard.args,
        ariaInvalid: true,
        fieldMessage: 'Ugyldig dato',
    },
    render: function Render({
        value,
        onChange,
        ...args
    }: DatepickerProviderProps) {
        const [date, setDate] = useState('01.12.2024');

        return (
            <InputGroup label="Dato">
                <Datepicker
                    value={value ?? date}
                    onChange={setDate}
                    {...args}
                />
            </InputGroup>
        );
    },
};

export const FullWidth: Story = {
    args: {
        ...Standard.args,
        fullWidth: true,
    },
    render: function Render({
        value,
        onChange,
        ...args
    }: DatepickerProviderProps) {
        const [date, setDate] = useState('01.12.2024');

        return (
            <InputGroup label="Dato">
                <Datepicker
                    value={value ?? date}
                    onChange={setDate}
                    {...args}
                />
            </InputGroup>
        );
    },
};
