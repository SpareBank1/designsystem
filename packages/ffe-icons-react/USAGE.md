```jsx
const InfoIkon = require('../ffe-icons-react/lib/info-ikon').default;

<ContextInfoMessage icon={<InfoIkon />}>
    Denne seksjonen er ikke skrevet enda
</ContextInfoMessage>;
```

Under ser du alle ikonene vi har i designsystemet.

```jsx
const allIcons = require('.');
const { Grid, GridRow, GridCol } = require('../ffe-grid-react/lib');

<Grid>
    <GridRow>
        {Object.entries(allIcons).map(([name, Icon]) => (
            <GridCol key={name} sm="6" md="4" lg="3" center={true}>
                <Icon className="sb1ds-icon" />
                <p>{name}</p>
            </GridCol>
        ))}
    </GridRow>
</Grid>;
```
