import React, { useState } from 'react';
import { Collapse } from './Collapse';
import type { StoryObj, Meta } from '@storybook/react';
import { ExpandButton } from '@sb1/ffe-buttons-react';

const meta: Meta<typeof Collapse> = {
    title: 'components/collapse/Collapse',
    component: Collapse,
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Collapse>;

export const Standard: Story = {
    args: {},
    render: function Render() {
        const [isOpen, setOpen] = useState(false);

        return (
            <>
                <ExpandButton
                    isExpanded={isOpen}
                    onClick={() => setOpen(!isOpen)}
                >
                    {isOpen ? 'Collapse' : 'Expand'}
                </ExpandButton>
                <Collapse isOpen={isOpen}>
                    <div>
                        <p>Hello world</p>
                        <p>Hello world</p>
                    </div>
                </Collapse>
            </>
        );
    },
};
