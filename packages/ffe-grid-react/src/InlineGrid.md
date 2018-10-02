`InlineGrid` er et alternativ til `Grid`, men uten noen form for spacing i grid, rader eller kolonner. `<InlineGrid />` er i struktur identisk med `<Grid />` - den tar i mot de samme modifierne, bruker samme props (minus `condensed` og `topPadding`) og bygger rader og kolonner med `<GridRow />` og `<GridCol />`.

`InlineGrid` kan nøstes, i motsetning til `Grid`. Med andre ord kan man ha flere grids inni hverandre. Denne komponenten er ideell til å lage layout på lavere nivå, som i komponenter, skjemaer, widgeter og lignende.

```js
<InlineGrid>
    <GridRow>
        <GridCol sm="6">Litt innhold til venstre</GridCol>
        <GridCol sm="6">Litt innhold til høyre</GridCol>
    </GridRow>
</InlineGrid>
```

```js
<InlineGrid>
    <GridRow>
        <GridCol sm="12" md="6" background="grey-warm">
            Litt innhold til venstre
        </GridCol>
        <GridCol sm="12" md="6">
            <InlineGrid>
                <GridRow>
                    <GridCol sm="6" background="blue-ice">
                        Grid inni grid - venstre
                    </GridCol>
                    <GridCol sm="6" background="green-mint">
                        Grid inni grid - høyre
                    </GridCol>
                </GridRow>
            </InlineGrid>
        </GridCol>
    </GridRow>
</InlineGrid>
```
