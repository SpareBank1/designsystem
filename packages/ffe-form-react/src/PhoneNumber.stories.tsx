import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { PhoneNumber } from './PhoneNumber';

const meta: Meta<typeof PhoneNumber> = {
    title: 'components/form/PhoneNumber',
    component: PhoneNumber,
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

export const ErrorCountryCode: Story = {
    args: {
        ...Standard.args,
        countryCodeFieldMessage: 'Dette feltet er påkrevd',
    },
    render: args => <PhoneNumber {...args} />,
};

export const ErrorNumber: Story = {
    args: {
        ...Standard.args,
        numberFieldMessage: 'Dette feltet er påkrevd',
    },
    render: args => <PhoneNumber {...args} />,
};

export const ErrorBoth: Story = {
    args: {
        ...Standard.args,
        countryCodeAndNumberFieldMessage:
            'Både landkode og telefonnummer feltene er påkrevd',
    },
    render: args => <PhoneNumber {...args} />,
};
