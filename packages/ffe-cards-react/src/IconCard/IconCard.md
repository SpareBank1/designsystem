Ikonkort er kort med en gitt maksbredde og et venstrestilt ikon.
Den tilbyr alle underkomponenter (CardName, Title, Subtext og Text) og plasserer dem i
gitt rekkefølge nedover i kortet, med teksten venstrestilt, til høyre for ikonet.

```jsx
const { GrafOppIkon } = require('../../../ffe-icons-react');

<IconCard icon={<GrafOppIkon />}>
    {({ CardName, Title, Subtext, Text }) => (
        <React.Fragment>
            <CardName>Kortnavn</CardName>
            <Title>Tittel</Title>
            <Subtext>En liten undertekst</Subtext>
            <Text>Her kan man ha tekst</Text>
        </React.Fragment>
    )}
</IconCard>;
```

Kortet har to modifiers: condensed og greyCharcoal

```jsx
const { SparegrisIkon, KryssSirkelIkon } = require('../../../ffe-icons-react');

<React.Fragment>
    <IconCard icon={<SparegrisIkon />} condensed={true}>
        {({ Title, Subtext }) => (
            <React.Fragment>
                <Title>Sparekonto voksen 25</Title>
                <Subtext>7 004,00</Subtext>
            </React.Fragment>
        )}
    </IconCard>
    <IconCard
        icon={<KryssSirkelIkon style={{ transform: 'rotate(45deg)' }} />}
        greyCharcoal={true}
        condensed={true}
    >
        {({ Title, Subtext }) => (
            <React.Fragment>
                <Title>Start ny sparing</Title>
                <Subtext>Det er mange måter å spare på</Subtext>
            </React.Fragment>
        )}
    </IconCard>
</React.Fragment>;
```
