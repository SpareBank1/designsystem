import React from 'react';
import { Calendar } from './Calendar';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Calendar> = {
    title: 'components/datepicker/Calendar',
    component: Calendar,
    tags: ['autodocs'],
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
        selectedDate: null,
        focusOnMount: false,
    },
    render: args => <Calendar {...args} />,
};
