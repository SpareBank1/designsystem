import React, { useState } from 'react';
import { Collapse } from './Collapse';
import type { StoryObj, Meta } from '@storybook/react';
import { ExpandButton } from '@sb1/ffe-buttons-react';

const meta: Meta<typeof Collapse> = {
    title: 'Komponenter/Collapse/Collapse',
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
                <div className="ffe-button-display-group ffe-button-display-group--center">
                    <ExpandButton
                        isExpanded={isOpen}
                        onClick={() => setOpen(!isOpen)}
                    >
                        {isOpen ? 'Collapse' : 'Expand'}
                    </ExpandButton>
                </div>
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
