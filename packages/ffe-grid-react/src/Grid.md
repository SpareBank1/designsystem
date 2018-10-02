Gridet består av tre komponenter - `<Grid />`, `<GridRow />` og `<GridCol />` - grid, rad og kolonne.

Det kan være mange grids per side, men man kan ikke ha grids inni andre grids. `Grid`-komponenten brukes til å lage layout på side-nivå.

Det finnes en rekke modifiers på alle tre komponentene som lar deg manipulere hvor innholdet skal plassere seg i en
kolonne. Ta en titt på prop-types for å finne disse.

```js
<Grid>
    <GridRow>
        <GridCol sm="6">Litt innhold til venstre</GridCol>
        <GridCol sm="6">Litt innhold til høyre</GridCol>
    </GridRow>
</Grid>
```
