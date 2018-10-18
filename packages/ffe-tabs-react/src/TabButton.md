TabButton er et alternativ til `Tab` - Laget for fanefunksjonalitet, men utformet som frittstående knapper.

```js
<TabButton>Dette er en tab button</TabButton>
```

Aktiv/valgt tab button kan vises ved å sende inn `selected`:

```js
<TabButton selected={true}>Dette er en valgt tab button</TabButton>
```

`ghost` eller `condensed` kan sendes inn for å rendre henholdsvis en transparent eller kompakt tab:

```js
const { Grid, GridRow, GridCol } = require('../../ffe-grid-react/lib');

<Grid>
    <GridRow background="sand" topPadding={true}>
        <GridCol sm={12}>
            <div>
                <TabButton ghost={true} condensed={true}>
                    Dette er en transparent og kompakt tab button
                </TabButton>
            </div>
        </GridCol>
    </GridRow>
</Grid>;
```

I tillegg kan man sende inn egendefinerte props for å legge til clickhandlere andre attributter:

```js
<TabButton
    onClick={() => {
        alert('Hei');
    }}
    data-analytics-track="logMe"
>
    Dette er en tab button
</TabButton>
```

Variant _dark_ for interne løsninger med mørk bakgrunn.

```js { "props": { "className": "sb1ds-example-dark" } }
const { Grid, GridRow, GridCol } = require('../../ffe-grid-react/lib');

<div>
    <TabButton dark={true} condensed={true}>
        Dette er en transparent og kompakt tab button
    </TabButton>
</div>

```
