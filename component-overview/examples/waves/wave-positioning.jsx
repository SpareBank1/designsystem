import { Wave } from '@sb1/ffe-core-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
<>
    <Grid>
        <GridRow>
            <GridCol sm="6">Litt innhold til venstre</GridCol>
            <GridCol sm="6">Litt innhold til høyre</GridCol>
        </GridRow>
    </Grid>
    <Wave color='vann-30' darkmodeColor='natt'>
        <Grid>
            <GridRow>
                <GridCol sm={{ cols: 5, offset: 2 }}>Litt innhold</GridCol>
                <GridCol sm={{ cols: 5, offset: 0 }}>Litt annet innhold</GridCol>
            </GridRow>
        </Grid>
    </Wave>
    <Grid>
        <GridRow background="vann-30">
            <GridCol sm="6">Litt innhold til venstre</GridCol>
            <GridCol sm="6">Litt innhold til høyre</GridCol>
        </GridRow>
    </Grid>
   
</>
