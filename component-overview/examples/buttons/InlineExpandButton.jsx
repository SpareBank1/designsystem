import { useState } from 'react';
import { InlineExpandButton } from '@sb1/ffe-buttons-react';
import Collapse from '@sb1/ffe-collapse-react';
import { Paragraph } from '@sb1/ffe-core-react';

() => {
    const [isExpanded, setExpanded] = useState(false);
    return (
        <>
            <Paragraph>
                Jeg samtykker til at selskapene i SpareBank 1 deler og benytter
                opplysningene om meg, slik at jeg kan få bedre og relevante
                tilbud.
                <InlineExpandButton
                    aria-controls="inline-expand-example-details"
                    aria-expanded={isExpanded}
                    isExpanded={isExpanded}
                    onClick={() => setExpanded(!isExpanded)}
                >
                    {isExpanded ? 'Vis mindre' : 'Vis mer'}
                </InlineExpandButton>
            </Paragraph>

            <Collapse
                id="inline-expand-example-details"
                isOpen={isExpanded}
                role="region"
            >
                <div>
                    <Paragraph>
                        Jeg samtykker til at selskapene i SpareBank 1 deler og
                        benytter opplysningene om meg, slik at jeg kan få bedre
                        og relevante tilbud. Jeg samtykker til at selskapene i
                        SpareBank 1 deler og benytter opplysningene om meg, slik
                        at jeg kan få bedre og relevante tilbud.
                    </Paragraph>
                    <Paragraph>
                        Jeg samtykker til at selskapene i SpareBank 1 deler og
                        benytter opplysningene om meg, slik at jeg kan få bedre
                        og relevante tilbud. Jeg samtykker til at selskapene i
                        SpareBank 1 deler og benytter opplysningene om meg, slik
                        at jeg kan få bedre og relevante tilbud.
                    </Paragraph>
                    <Paragraph>
                        Jeg samtykker til at selskapene i SpareBank 1 deler og
                        benytter opplysningene om meg, slik at jeg kan få bedre
                        og relevante tilbud. Jeg samtykker til at selskapene i
                        SpareBank 1 deler og benytter opplysningene om meg, slik
                        at jeg kan få bedre og relevante tilbud.
                    </Paragraph>
                </div>
            </Collapse>
        </>
    );
}
