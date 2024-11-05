import React from 'react';
import { SuccessFieldMessage } from './SuccessFieldMessage';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof SuccessFieldMessage> = {
    title: 'Komponenter/Form/SuccessFieldMessage',
    component: SuccessFieldMessage,
};
export default meta;

type Story = StoryObj<typeof SuccessFieldMessage>;

export const Standard: Story = {
    args: {
        children: 'Noe gikk bra her',
    },
    render: args => <SuccessFieldMessage {...args} />,
};
