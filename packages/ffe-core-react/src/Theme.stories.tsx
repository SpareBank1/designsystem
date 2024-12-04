import React from 'react';
import { Theme } from './Theme';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof Theme> = {
    title: 'Komponenter/Core/Theme',
    component: Theme,
};
export default meta;

type Story = StoryObj<typeof Theme>;

export const Standard: Story = {
    args: {},
    render: args => <Theme {...args} />,
};
