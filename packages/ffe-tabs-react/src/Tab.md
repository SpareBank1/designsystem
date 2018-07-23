Tab er en komponent for å lage knapper med fane-funksjonalitet - gruppering av innhold der én gruppe er synlig og de øvrige er skjult.

```js
<Tab>Dette er en fane</Tab>
```

Aktiv/valgt fane kan vises ved å sende inn `selected`:

```js
<Tab selected={true}>Dette er en valgt fane</Tab>
```

`condensed` kan sendes inn for å rendre en kompakt fane:

```js
const { Grid, GridRow, GridCol } = require('../../ffe-grid-react/lib');

<Grid>
    <GridRow>
        <GridCol sm={12}>
            <div>
                <Tab condensed={true}>Dette er en kompakt fane</Tab>
            </div>
        </GridCol>
    </GridRow>
</Grid>;
```

I tillegg kan man sende inn egendefinerte props for å legge til clickhandlere og andre attributter:

```js
<Tab
    onClick={() => {
        alert('Hei');
    }}
    data-analytics-track="logMe"
>
    Dette er en fane
</Tab>
```
