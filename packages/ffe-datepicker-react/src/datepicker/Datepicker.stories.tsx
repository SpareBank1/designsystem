import React, { useState } from 'react';
import { Datepicker } from './Datepicker';
import type { StoryObj, Meta } from '@storybook/react';
import { InputGroup } from '@sb1/ffe-form-react';

const meta: Meta<typeof Datepicker> = {
    title: 'components/datepicker/Datepicker',
    component: Datepicker,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Datepicker>;

export const Standard: Story = {
    args: {
        locale: 'nb',
        maxDate: '31.12.2016',
        minDate: '01.01.2016',
    },
    render: function Render({ value, onChange, ...args }) {
        const [date, setDate] = useState('01.01.2016');
        return (
            <InputGroup label="Dato">
                <Datepicker
                    {...args}
                    value={value ?? date}
                    onChange={onChange ?? setDate}
                />
            </InputGroup>
        );
    },
};
