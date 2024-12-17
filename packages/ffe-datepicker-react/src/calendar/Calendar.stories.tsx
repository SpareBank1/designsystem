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
        maxDate: null,
        minDate: null,
        onDatePicked: (date: string) => null,
        selectedDate: '17.12.2024',
        focusOnMount: false,
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
