```jsx
const { InfoIkon } = require('../../packages/ffe-icons-react/lib');

<ContextInfoMessage icon={<InfoIkon />}>
    Denne seksjonen er ikke ferdig skrevet enda
</ContextInfoMessage>;
```

Kommer i samme variasjoner av fargedrakt som [Meldinger, bokser](#meldinger-bokser).
Kontekstuelle meldinger har i tillegg flere variasjoner innad i samme type melding.

```jsx
const { InfoIkon } = require('../../packages/ffe-icons-react/lib');

<React.Fragment>
    <Grid>
        <GridRow>
            <GridCol md={6}>
                <ContextInfoMessage>Standard</ContextInfoMessage>
            </GridCol>
            <GridCol md={6}>
                <ContextInfoMessage compact={true}>
                    Kompakt variant
                </ContextInfoMessage>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol md={6}>
                <ContextInfoMessage header="Til info">
                    Med header
                </ContextInfoMessage>
            </GridCol>
            <GridCol md={6}>
                <ContextInfoMessage icon={<InfoIkon />}>
                    Med ikon
                </ContextInfoMessage>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol>
                <ContextInfoMessage showCloseButton={true}>
                    Lukkbar
                </ContextInfoMessage>
            </GridCol>
        </GridRow>
    </Grid>
</React.Fragment>;
```
