Vi har mange ikoner.

```jsx
const allIcons = require('.');
const { Grid, GridRow, GridCol } = require('../ffe-grid-react/lib');

<Grid>
    <GridRow>
        {Object.entries(allIcons).map(([name, Icon]) => (
            <GridCol key={name} sm="6" md="4" lg="3" center={true}>
                <Icon />
                <p>{name}</p>
            </GridCol>
        ))}
    </GridRow>
</Grid>;
```
