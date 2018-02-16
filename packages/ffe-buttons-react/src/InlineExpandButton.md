Noen ganger vil vi gi brukerne mulighet til å lese mer om ett tema som ikke alle
er interesserte i, eller hvor innholdet hadde blitt overveldende om alt ble
presentert på én gang. Et eksempel er tekstene der vi forklarer samtykker.
Informasjonen er viktig og vi vil at brukeren skal lese den, men om vi hadde vist
alt med én gang hadde det blitt for voldsomt.

I sånne situasjoner kan vi bruke en _inline expand_.

```js
const { Fragment } = require('react');
const { Collapse } = require('react-collapse');
const Paragraph = require('../../ffe-core-react/lib/typography/Paragraph').default;

initialState = { isExpanded: false };

<Fragment>
    <Paragraph>
        Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene
        om meg, slik at jeg kan få bedre og relevante tilbud.
        <InlineExpandButton
            isExpanded={state.isExpanded}
            onClick={() => setState({ isExpanded: !state.isExpanded })}
        >
            {state.isExpanded ? 'Vis mindre' : 'Vis mer'}
        </InlineExpandButton>
    </Paragraph>

    <Collapse isOpened={state.isExpanded}>
        <Paragraph>
            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene
            om meg, slik at jeg kan få bedre og relevante tilbud. Jeg samtykker til at
            selskapene i SpareBank 1 deler og benytter opplysningene om meg, slik at
            jeg kan få bedre og relevante tilbud.
        </Paragraph>
        <Paragraph>
            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene
            om meg, slik at jeg kan få bedre og relevante tilbud. Jeg samtykker til at
            selskapene i SpareBank 1 deler og benytter opplysningene om meg, slik at
            jeg kan få bedre og relevante tilbud.
        </Paragraph>
        <Paragraph>
            Jeg samtykker til at selskapene i SpareBank 1 deler og benytter opplysningene
            om meg, slik at jeg kan få bedre og relevante tilbud. Jeg samtykker til at
            selskapene i SpareBank 1 deler og benytter opplysningene om meg, slik at
            jeg kan få bedre og relevante tilbud.
        </Paragraph>
    </Collapse>
</Fragment>
```