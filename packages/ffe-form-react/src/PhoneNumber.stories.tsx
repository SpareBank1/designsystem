import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { PhoneNumber } from './PhoneNumber';

const meta: Meta<typeof PhoneNumber> = {
    title: 'components/form/PhoneNumber',
    component: PhoneNumber,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof PhoneNumber>;

export const Standard: Story = {
    args: {
        numberInputProps: {},
        numberFieldMessage: '',
        countryCodeFieldMessage: '',
        countryCodeAndNumberFieldMessage: '',
        extraMargin: false,
        isMobileNumber: true,
        locale: 'nb',
    },
    render: args => <PhoneNumber {...args} />,
};
