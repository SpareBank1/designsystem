import React from 'react';
import { ShortcutButton } from './ShortcutButton';
import type { StoryObj, Meta } from '@storybook/react';

const Custom: React.FC<React.ComponentProps<'a'>> = props => (
    <a {...props}>
        {`Custom `}
        {props.children}
    </a>
);

const meta: Meta<typeof ShortcutButton<any>> = {
    title: 'Komponenter/Buttons/ShortcutButton',
    component: ShortcutButton,
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

type Story = StoryObj<typeof ShortcutButton<any>>;

export const Standard: Story = {
    args: {
        as: 'a',
    },
    render: args => <ShortcutButton {...args}>Snarvei</ShortcutButton>,
};
