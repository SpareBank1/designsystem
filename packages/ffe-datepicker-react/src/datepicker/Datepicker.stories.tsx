import { SecondaryButton } from '@sb1/ffe-buttons-react';
import { Input, InputGroup } from '@sb1/ffe-form-react';
import type { Meta, StoryObj } from '@storybook/react';
import { default as React, useState } from 'react';
import { Datepicker, DatepickerProps } from './Datepicker';

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
                <Datepicker
                    value={value ?? date}
                    onChange={date => {
                        console.log('onChange:', date);
                        setDate(date);
                    }}
                    {...args}
                />
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

export const TwoWayControlledComponent: Story = {
    args: {
        ...Standard.args,
    },
    render: function Render({ ...args }: DatepickerProps) {
        const [date, setDate] = useState('01.12.2024');
        const [lastUpdateSource, setLastUpdateSource] = useState('initiell');

        const handleDateChange = (newDate: string) => {
            setDate(newDate);
            setLastUpdateSource('datepicker');
        };

        const predefinedDates = [
            {
                label: 'I dag',
                value: () => {
                    const today = new Date();
                    return `${String(today.getDate()).padStart(2, '0')}.${String(today.getMonth() + 1).padStart(2, '0')}.${today.getFullYear()}`;
                },
            },
            { label: 'Begynnelsen av året', value: '01.01.2024' },
            { label: 'Slutten av året', value: '31.12.2024' },
            { label: 'Midten av året', value: '01.07.2024' },
        ];

        return (
            <div>
                <InputGroup label="Dato" labelId={Standard?.args?.labelId}>
                    <Datepicker
                        {...args}
                        value={date}
                        onChange={handleDateChange}
                    />
                </InputGroup>

                <div style={{ marginTop: '20px' }}>
                    <div>Kontroller datepicker eksternt:</div>
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            marginTop: '10px',
                        }}
                    >
                        {predefinedDates.map((presetDate, index) => (
                            <SecondaryButton
                                key={index}
                                onClick={() => {
                                    const newValue =
                                        typeof presetDate.value === 'function'
                                            ? presetDate.value()
                                            : presetDate.value;
                                    setDate(newValue);
                                    setLastUpdateSource('ekstern');
                                }}
                            >
                                {presetDate.label}
                            </SecondaryButton>
                        ))}
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <div>Manuell ekstern input:</div>
                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                maxWidth: '200px',
                                marginTop: '10px',
                            }}
                        >
                            <Input
                                type="text"
                                value={date}
                                onChange={e => {
                                    setDate(e.target.value);
                                    setLastUpdateSource('manuell');
                                }}
                                placeholder="dd.mm.åååå"
                            />
                        </div>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <div>Nåværende tilstand:</div>
                        <div>Dato: {date}</div>
                        <div>Sist oppdatert av: {lastUpdateSource}</div>
                    </div>
                </div>
            </div>
        );
    },
};
