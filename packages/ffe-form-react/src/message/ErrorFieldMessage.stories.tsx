import React from 'react';
import { ErrorFieldMessage } from './ErrorFieldMessage';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ErrorFieldMessage> = {
    title: 'components/form/ErrorFieldMessage',
    component: ErrorFieldMessage,
};
export default meta;

type Story = StoryObj<typeof ErrorFieldMessage>;

export const Standard: Story = {
    args: {
        children: 'Noe er feil her',
    },
    render: args => <ErrorFieldMessage {...args} />,
};
