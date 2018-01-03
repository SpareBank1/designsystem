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
        <GridCol sm="6" md="4" lg="3">Litt innhold</GridCol>
        <GridCol sm="6" md="4" lg="3">Litt innhold</GridCol>
        <GridCol sm="6" md="4" lg="3">Litt innhold</GridCol>
        <GridCol sm="6" md="4" lg="3">Litt innhold</GridCol>
    </GridRow>
</Grid>
```

En rad kan ha mange forskjellige bakgrunnsfarger:

```js
const backgroundColors = [
    'blue-cobalt',
    'blue-ice',
    'blue-pale',
    'blue-royal',
    'green-mint',
    'grey-cloud',
    'purple-magenta',
    'sand',
];
<Grid>
    {backgroundColors.map((color, idx) => (
        <GridRow key={idx} background={color}>
            <GridCol sm="12">Litt innhold</GridCol>
        </GridRow>
    ))}
</Grid>
```

Det finnes en rekke modifiers på alle tre komponentene som lar deg manipulere hvor innholdet skal plassere seg i en
kolonne. Ta en titt på prop-types for å finne disse.