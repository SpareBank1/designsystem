Vi bruker ikoner for å skape bedre navigasjon og for å tydeliggjøre hvilket produkt og tjeneste vi refererer til.
Ikonene skal hjelpe brukeren med å raskt identifisere og skille mellom ulikt innhold slik at de skaper verdi
for brukeren. De er også bærere av SpareBank 1s visuelle identitet. Ikonene skal være tydelige i sin utforming.
De skal oppleves som relevante og informative i den konteksten de presenteres og dermed bidra til at brukeren forstår innholdet raskere.

Under ser du alle ikonene vi har i designsystemet.

```jsx
const allIcons = require('../../packages/ffe-icons-react/lib');
const includedIcons = Object.entries(allIcons).filter(
    ([name]) => !name.match(/^Draft/),
);

<Grid>
    <GridRow>
        {includedIcons.map(([name, Icon]) => {
            return (
                <GridCol key={name} sm="6" md="4" lg="3" center={true}>
                    <Icon className="sb1ds-icon" />
                    <p>{name}</p>
                </GridCol>
            );
        })}
    </GridRow>
</Grid>;
```
