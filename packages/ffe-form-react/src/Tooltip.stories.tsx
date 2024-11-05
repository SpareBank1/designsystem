import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
    title: 'Komponenter/Form/Tooltip',
    component: Tooltip,
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Standard: Story = {
    args: {
        children: 'Dette er lurt å tenke på',
    },
    render: function Render(args) {
        return <Tooltip {...args} />;
    },
};

export const AriaControls: Story = {
    args: {
        children: 'Dette er lurt å tenke på',
    },
    render: function Render(args) {
        const contentId = 'content-id';
        const [open, setOpen] = useState(false);

        return (
            <>
                <Tooltip
                    {...args}
                    aria-controls={contentId}
                    onClick={() => setOpen(!open)}
                />
                <div hidden={!open} id={contentId}>
                    Husk at Tooltip alltid skal være skjult ved default, men du
                    kan styre visningen gjennom en onClick om du vil!
                </div>
            </>
        );
    },
};
