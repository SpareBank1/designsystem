import React, { useState } from 'react';
import { Calendar } from './Calendar';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Calendar> = {
    title: 'Komponenter/Datepicker/Calendar',
    component: Calendar,
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Standard: Story = {
    args: {
        calendarClassName: undefined,
        escKeyHandler: () => null,
        locale: 'nb',
        onDatePicked: (date: string) => null,
        selectedDate: '17.12.2024',
        focusOnMount: false,
        minDate: '01.01.2020',
        maxDate: '31.12.2030',
    },
    render: function Render(args) {
        const [selectedDate, setSelectedDate] = useState<
            string | null | undefined
        >(args.selectedDate);
        return (
            <Calendar
                {...args}
                selectedDate={selectedDate}
                onDatePicked={setSelectedDate}
            />
        );
    },
};

export const WithDropdownCaption: Story = {
    args: {
        ...Standard.args,
        dropdownCaption: true,
        selectedDate: '15.05.2025',
        minDate: '01.01.2020',
        maxDate: '31.12.2030',
    },
    render: function Render(args) {
        const [selectedDate, setSelectedDate] = useState<
            string | null | undefined
        >(args.selectedDate);
        
        return (
            <div>
                <h3>Kalender med nedtrekksliste for måned og år</h3>
                <p>
                    Denne kalenderen viser måned og år som nedtrekkslister, slik at brukeren enkelt kan navigere til ønsket dato
                    uten å klikke gjennom flere måneder. Spesielt nyttig når man ønsker å velge datoer langt frem eller tilbake i tid.
                </p>
                <div style={{ marginTop: '20px' }}>
                    <Calendar
                        {...args}
                        selectedDate={selectedDate}
                        onDatePicked={(date) => {
                            setSelectedDate(date);
                            console.log('Valgt dato:', date);
                        }}
                    />
                </div>
                {selectedDate && (
                    <p style={{ marginTop: '12px' }}>
                        <strong>Valgt dato:</strong> {selectedDate}
                    </p>
                )}
            </div>
        );
    },
};
