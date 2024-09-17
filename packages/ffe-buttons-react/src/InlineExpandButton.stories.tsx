import React, { useState, useId } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InlineExpandButton } from './InlineExpandButton';
import { Collapse } from '@sb1/ffe-collapse-react';
import { Paragraph } from '@sb1/ffe-core-react';

const meta: Meta<typeof InlineExpandButton> = {
    title: 'components/buttons/InlineExpandButton',
    component: InlineExpandButton,
    tags: ['autodocs'],
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof InlineExpandButton>;

export const Standard: Story = {
    args: {
        isExpanded: false,
        showMoreText: 'Vis mer',
        showLessText: 'Vis mindre',
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
                        {isExpanded ? args.showLessText : args.showMoreText}
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
