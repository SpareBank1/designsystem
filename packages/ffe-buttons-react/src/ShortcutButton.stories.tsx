import React from 'react';
import { ButtonGroup } from './ButtonGroup';
import { ShortcutButton } from './ShortcutButton';
import type { StoryObj, Meta } from '@storybook/react';

const meta: Meta<typeof ShortcutButton> = {
    title: 'components/buttons/ShortcutButton',
    component: ShortcutButton,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof ShortcutButton>;

export const Standard: Story = {
    args: {
        ariaLabel: 'Snarveiknapp',
    },
    render: args => (
        <ButtonGroup>
            <ShortcutButton {...args} as="a" href="#shortcutbutton">
                Snarvei
            </ShortcutButton>
        </ButtonGroup>
    ),
};
