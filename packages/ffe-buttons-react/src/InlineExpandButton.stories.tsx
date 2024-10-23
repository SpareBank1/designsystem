import React, { useState, useId } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InlineExpandButton } from './InlineExpandButton';
import { Collapse } from '@sb1/ffe-collapse-react';
import { Paragraph } from '@sb1/ffe-core-react';

const Custom: React.FC<React.ComponentProps<'a'>> = props => (
    <a {...props}>
        {`Custom `}
        {props.children}
    </a>
);

const meta: Meta<typeof InlineExpandButton<any>> = {
    title: 'components/buttons/InlineExpandButton',
    component: InlineExpandButton,
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

type Story = StoryObj<typeof InlineExpandButton<any>>;

export const Standard: Story = {
    args: {
        as: 'button',
        isExpanded: false,
    },
    render: function Render(args) {
        const collapseId = useId();
        const [isExpanded, setExpanded] = useState(args.isExpanded);

        return (
            <>
                <Paragraph>
                    Jeg samtykker til at selskapene i SpareBank 1 deler og
                    benytter opplysningene om meg, slik at jeg kan få bedre og
                    relevante tilbud.
                    <InlineExpandButton
                        {...args}
                        aria-controls={collapseId}
                        aria-expanded={isExpanded}
                        isExpanded={isExpanded}
                        onClick={() => setExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'Vis mer' : 'Vis mindre'}
                    </InlineExpandButton>
                </Paragraph>

                <Collapse id={collapseId} isOpen={isExpanded} role="region">
                    <div>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                        <Paragraph>
                            Jeg samtykker til at selskapene i SpareBank 1 deler
                            og benytter opplysningene om meg, slik at jeg kan få
                            bedre og relevante tilbud. Jeg samtykker til at
                            selskapene i SpareBank 1 deler og benytter
                            opplysningene om meg, slik at jeg kan få bedre og
                            relevante tilbud.
                        </Paragraph>
                    </div>
                </Collapse>
            </>
        );
    },
};
