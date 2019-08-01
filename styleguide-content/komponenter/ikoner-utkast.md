```jsx
const allIcons = require('../../packages/ffe-icons-react/lib');
const draftIcons = Object.entries(allIcons).filter(([name]) =>
    name.match(/^Draft/),
);

if (draftIcons.length === 0) {
    return <p>Ingen nye ikoner</p>;
}

return (
    <Grid>
        <GridRow>
            {draftIcons.map(([name, Icon]) => {
                return (
                    <GridCol key={name} sm="6" md="4" lg="3" center={true}>
                        <Icon className="sb1ds-icon" />
                        <p>{name}</p>
                    </GridCol>
                );
            })}
        </GridRow>
    </Grid>
);
```
