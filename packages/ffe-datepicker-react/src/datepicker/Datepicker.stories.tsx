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
        maxDate: '28.04.2017',
        minDate: '01.03.2016',
    },
    render: function Render({ value, onChange, ...args }) {
        const [date, setDate] = useState('03.03.2016');
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
