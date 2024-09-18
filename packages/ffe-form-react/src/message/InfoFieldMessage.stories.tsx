import React from 'react';
import { InfoFieldMessage } from './InfoFieldMessage';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof InfoFieldMessage> = {
    title: 'components/form/InfoFieldMessage',
    component: InfoFieldMessage,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof InfoFieldMessage>;

export const Standard: Story = {
    args: {
        children: 'Noe info her',
    },
    render: args => <InfoFieldMessage {...args} />,
};
