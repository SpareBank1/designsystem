# Grid

Vi bruker et grid til å styre layouten på sidene våre. På små skjermer er gridet på 4 kolonner,
på mellomstore skjermer 6 kolonner og på store skjermer 12 kolonner.

Gridet består av tre komponenter - `<Grid />`, `<GridRow />` og `<GridCol />` - grid, rad og kolonne.
Det kan være mange grids per side, men man kan ikke ha grids inni andre grids.

```js
<Grid>
    <GridRow>
        <GridCol sm="6">Litt innhold til venstre</GridCol>
        <GridCol sm="6">Litt innhold til høyre</GridCol>
    </GridRow>
</Grid>
```

Du kan la kolonner være bredere på små skjermer og smalere på mindre skjermer:

```js
<Grid>
    <GridRow>
        <GridCol sm="6" md="4" lg="3">
            Litt innhold
        </GridCol>
        <GridCol sm="6" md="4" lg="3">
            Litt innhold
        </GridCol>
        <GridCol sm="6" md="4" lg="3">
            Litt innhold
        </GridCol>
        <GridCol sm="6" md="4" lg="3">
            Litt innhold
        </GridCol>
    </GridRow>
</Grid>
```

En rad kan ha mange forskjellige bakgrunnsfarger:

```js
const backgroundColors = [
    'blue-ice',
    'blue-pale',
    'green-mint',
    'grey-cloud',
    'sand',
    'grey-warm',
    'orange-salmon',
    'red',
    'blue-sky',
];
initialState = { selected: backgroundColors[0] };
<Grid>
    <GridRow>
        <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
            <p className="ffe-body-paragraph">
                Du kan velge bakgrunnsfarge på grid-raden under her:
            </p>
            <select
                className="ffe-dropdown"
                onChange={e => setState({ selected: e.target.value })}
                value={state.selected}
            >
                {backgroundColors.map(name => (
                    <option value={name}>{name}</option>
                ))}
            </select>
        </GridCol>
    </GridRow>
    <GridRow background={state.selected}>
        <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed est sit amet enim pretium finibus in id nibh. In orci massa,
                ultricies imperdiet laoreet et, rhoncus ut est.
            </p>
        </GridCol>
    </GridRow>
</Grid>;
```

En kolonne kan også ha bakgrunnsfarger. De vil da være utfallende, slik at selve innholdet vil forholde seg til griden.

```js
const backgroundColors = [
    'blue-ice',
    'blue-pale',
    'green-mint',
    'grey-cloud',
    'sand',
    'grey-warm',
    'orange-salmon',
    'red',
    'blue-sky',
];
initialState = { selected: backgroundColors[0] };

<Grid>
    <GridRow>
        <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
            <p className="ffe-body-paragraph">
                Du kan velge bakgrunnsfarge på grid-kolonnen under her:
            </p>
            <select
                className="ffe-dropdown"
                onChange={e => setState({ selected: e.target.value })}
                value={state.selected}
            >
                {backgroundColors.map(name => (
                    <option value={name}>{name}</option>
                ))}
            </select>
        </GridCol>
    </GridRow>
    <GridRow>
        <GridCol
            sm={12}
            lg={{ cols: 6, offset: 3 }}
            background={state.selected}
            noBottomPadding={true}
        >
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sed est sit amet enim pretium finibus in id nibh. In orci massa,
                ultricies imperdiet laoreet et, rhoncus ut est. Integer nec
                magna ultricies, commodo urna ut, bibendum turpis. Curabitur nec
                ex sed lacus bibendum sollicitudin.
            </p>
        </GridCol>
    </GridRow>
    <GridRow>
        <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
            Merk at innholdet både over og under er i linje med grid-et.
        </GridCol>
    </GridRow>
</Grid>;
```

Det finnes en rekke modifiers på alle tre komponentene som lar deg manipulere hvor innholdet skal plassere seg i en
kolonne. Ta en titt på prop-types for å finne disse.
