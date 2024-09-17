import React from 'react';
import { TaskButton } from './TaskButton';
import type { StoryObj, Meta } from '@storybook/react';
import { Icon } from '@sb1/ffe-icons-react';
import addIcon from '@sb1/ffe-icons/icons/open/300/md/add.svg';

const meta: Meta<typeof TaskButton> = {
    title: 'components/buttons/TaskButton',
    component: TaskButton,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TaskButton>;

export const Standard: Story = {
    args: {},
    render: function Render() {
        return (
            <>
                <TaskButton icon={<Icon fileUrl={addIcon} />}>
                    Legg til bruker
                </TaskButton>
            </>
        );
    },
};
