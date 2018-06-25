Også kjent som _horizontal rule_, eller _thematic break_ i HTML-verden.

```js
const { Grid, GridRow, GridCol } = require('../../../ffe-grid-react/lib');

<Grid>
    <GridRow>
        <GridCol>
            <Paragraph>Noe over</Paragraph>
        </GridCol>
    </GridRow>
    <GridRow>
        <GridCol>
            <DividerLine />
        </GridCol>
    </GridRow>
    <GridRow>
        <GridCol>
            <Paragraph>Noe under</Paragraph>
        </GridCol>
    </GridRow>
</Grid>;
```
