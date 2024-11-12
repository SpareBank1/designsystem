import React, { useState } from 'react';
import { Datepicker } from './Datepicker';
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
        maxDate: '30.12.2024',
        minDate: '01.01.2020',
    },
    render: function Render({ value, onChange, ...args }) {
        //const [date, setDate] = useState('05.04.2021');
        const [date, setDate] = useState('');
        return (
            <InputGroup label="Dato">
                <Datepicker
                    {...args}
                    value={date}
                    onChange={onChange ?? setDate}
                />
            </InputGroup>
        );
    },
};
