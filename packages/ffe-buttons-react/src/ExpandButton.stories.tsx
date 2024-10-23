import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { ExpandButton } from './ExpandButton';

const meta: Meta<typeof ExpandButton> = {
    title: 'components/buttons/ExpandButton',
    component: ExpandButton,
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof ExpandButton>;

export const Standard: Story = {
    args: {
        isExpanded: false,
        as: 'button',
    },
    render: function Render(args) {
        const [isExpanded, setExpanded] = useState(args.isExpanded);

        return (
            <ExpandButton
                {...args}
                isExpanded={isExpanded}
                onClick={() => setExpanded(!isExpanded)}
            >
                Vis mer
            </ExpandButton>
        );
    },
};
