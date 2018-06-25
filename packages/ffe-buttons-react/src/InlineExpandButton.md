```js
const { Fragment } = require('react');
const { Collapse } = require('react-collapse');
const Paragraph = require('../../ffe-core-react/lib/typography/Paragraph')
    .default;

initialState = { isExpanded: false };

<Fragment>
    <Paragraph>
        Jeg samtykker til at selskapene i SpareBank 1 deler og benytter
        opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.
        <InlineExpandButton
            aria-controls="inline-expand-example-details"
            aria-expanded={state.isExpanded}
            isExpanded={state.isExpanded}
            onClick={() => setState({ isExpanded: !state.isExpanded })}
        >
            {state.isExpanded ? 'Vis mindre' : 'Vis mer'}
        </InlineExpandButton>
    </Paragraph>

    <Collapse
        id="inline-expand-example-details"
        isOpened={state.isExpanded}
        role="region"
    >
        <Paragraph>
            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter
            opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.
            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter
            opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.
        </Paragraph>
        <Paragraph>
            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter
            opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.
            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter
            opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.
        </Paragraph>
        <Paragraph>
            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter
            opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.
            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter
            opplysningene om meg, slik at jeg kan få bedre og relevante tilbud.
        </Paragraph>
    </Collapse>
</Fragment>;
```
