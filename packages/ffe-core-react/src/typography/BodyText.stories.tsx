import React from 'react';
import { BodyText } from './BodyText';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof BodyText> = {
    title: 'Komponenter/Core/BodyText',
    component: BodyText,
};
export default meta;

type Story = StoryObj<typeof BodyText>;

export const Standard: Story = {
    args: {
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in sem posuere, fringilla augue et, egestas magna. Sed dapibus, libero quis rutrum pharetra, lectus tortor bibendum quam, quis placerat urna lorem malesuada elit. Maecenas justo lorem, accumsan in leo non, pellentesque facilisis magna.',
        as: 'p',
        className: 'custom-class',
    },
    render: args => <BodyText {...args} />,
};
