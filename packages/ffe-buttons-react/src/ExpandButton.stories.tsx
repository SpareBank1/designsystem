import React, { useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { ExpandButton } from './ExpandButton';

const meta: Meta<typeof ExpandButton> = {
    title: 'Komponenter/Buttons/ExpandButton',
    component: ExpandButton,
    argTypes: {
        size: {
            options: ['lg', 'md', 'sm'],
            control: { type: 'radio' },
            description: "Størrelse på knappen, 'md' default",
        },
    },
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
            <div className="ffe-button-display-group ffe-button-display-group--center">
                <ExpandButton
                    {...args}
                    isExpanded={isExpanded}
                    onClick={() => setExpanded(!isExpanded)}
                >
                    Vis mer
                </ExpandButton>
            </div>
        );
    },
};

export const DifferentSizes: Story = {
    args: {
        isExpanded: false,
        as: 'button',
    },
    render: function Render(args) {
        const [isExpandedLg, setExpandedLg] = useState(args.isExpanded);
        const [isExpandedMd, setExpandedMd] = useState(args.isExpanded);
        const [isExpandedSm, setExpandedSm] = useState(args.isExpanded);

        return (
            <div className="ffe-button-display-group ffe-button-display-group--center">
                <div>
                    <ExpandButton
                        {...args}
                        isExpanded={isExpandedLg}
                        onClick={() => setExpandedLg(!isExpandedLg)}
                        size={'lg'}
                    >
                        Vis mer
                    </ExpandButton>
                </div>
                <div>
                    <ExpandButton
                        {...args}
                        isExpanded={isExpandedMd}
                        onClick={() => setExpandedMd(!isExpandedMd)}
                    >
                        Vis mer
                    </ExpandButton>
                </div>
                <div>
                    <ExpandButton
                        {...args}
                        isExpanded={isExpandedSm}
                        onClick={() => setExpandedSm(!isExpandedSm)}
                        size={'sm'}
                    >
                        Vis mer
                    </ExpandButton>
                </div>
            </div>
        );
    },
};
