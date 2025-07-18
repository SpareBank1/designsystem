import React from 'react';
import { BackButton } from './BackButton';
import type { StoryObj, Meta } from '@storybook/react';

const Custom: React.FC<React.ComponentProps<'a'>> = props => (
    <a {...props}>
        {`Custom `}
        {props.children}
    </a>
);

const meta: Meta<typeof BackButton<any>> = {
    title: 'Komponenter/Buttons/BackButton',
    component: BackButton,
    argTypes: {
        as: {
            options: ['a', 'button', 'custom'],
            mapping: {
                '': 'a',
                a: 'a',
                button: 'button',
                custom: Custom,
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof BackButton<any>>;

export const Standard: Story = {
    args: {
        as: 'a',
        href: 'https://www.sparebank1.no/nb/bank/privat.html',
    },
    render: args => <BackButton {...args}>Tilbake</BackButton>,
};
