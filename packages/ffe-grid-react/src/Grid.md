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

Merk at designet for layout skal være basert på 4 kolonner på `sm` skjermer, 6 på `md` og 12 på `lg` mens i APIet til `GridCol` sendes det inn
tall fra 0-12 for alle størrelsene. I praksis betyr det at man selv må konvertere fra 12 kolonner til riktig antall på `sm` og `md`. For
`sm` innebærer det at hver kolonne har bredde 3, slik at man må bruke multiplum av 3 for alle verdier som sendes inn til `cols` eller `offset`
propertyene. For `md` har hver kolonne bredde 2 og man må bruke multiplum av 2.

Riktig, oppgitte verdier er multiplum av 3 for `sm` og 2 for `md`:

```jsx static
<Grid>
    <GridRow>
        <GridCol sm={{ cols: 6, offset: 3 }} md={{ cols: 4, offset: 4 }} />
    </GridRow>
</Grid>
```

Galt:

```jsx static
<Grid>
    <GridRow>
        <GridCol sm={{ cols: 2, offset: 3 }} md={{ cols: 5, offset: 4 }} />
    </GridRow>
</Grid>
```

Det blir varslet om dette til `console.error` i dev-versjonen av FFE, men det er ingen varsler om man bygger prod-versjonen av koden.
Selvom det fungerer å bruke andre verdier er det ikke meningen at man skal gjøre, og side-layout skal heller ikke være basert på at man
må gjøre det annerledes.

Når man bruker `<InlineGrid>` til å style komponenter og ikke jobber med layout på side-nivå kan man bruke alle 12 verdiene.
