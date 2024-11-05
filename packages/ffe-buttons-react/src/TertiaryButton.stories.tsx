import React from 'react';
import { TertiaryButton } from './TertiaryButton';
import type { StoryObj, Meta } from '@storybook/react';

const Custom: React.FC<React.ComponentProps<'a'>> = props => (
    <a {...props}>
        {`Custom `}
        {props.children}
    </a>
);

const meta: Meta<typeof TertiaryButton<any>> = {
    title: 'Komponenter/Buttons/TertiaryButton',
    component: TertiaryButton,
    argTypes: {
        as: {
            options: ['a', 'button', 'custom'],
            mapping: {
                '': 'button',
                a: 'a',
                button: 'button',
                custom: Custom,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof TertiaryButton<any>>;

export const Standard: Story = {
    args: {
        as: 'button',
    },
    render: args => <TertiaryButton {...args}>Tertiærknapp</TertiaryButton>,
};
