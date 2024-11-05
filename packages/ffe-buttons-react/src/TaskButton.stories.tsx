import React from 'react';
import { TaskButton } from './TaskButton';
import type { StoryObj, Meta } from '@storybook/react';
import { Icon } from '@sb1/ffe-icons-react';

const Custom: React.FC<React.ComponentProps<'a'>> = props => (
    <a {...props}>
        {`Custom `}
        {props.children}
    </a>
);

const meta: Meta<typeof TaskButton<any>> = {
    title: 'Komponenter/Buttons/TaskButton',
    component: TaskButton,
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

type Story = StoryObj<typeof TaskButton<any>>;

export const Standard: Story = {
    args: {
        as: 'button',
    },
    render: function Render(args) {
        return (
            <TaskButton
                icon={<Icon fileUrl="./icons/open/300/md/add.svg" {...args} />}
            >
                Legg til bruker
            </TaskButton>
        );
    },
};
