import { Wave } from '@sb1/ffe-core-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
<>
    <Grid>
        <GridRow>
            <GridCol sm="6">Litt innhold til venstre</GridCol>
            <GridCol sm="6">Litt innhold til høyre</GridCol>
        </GridRow>
    </Grid>
    <Wave waveHeight='small' color='vann-30' darkmodeColor='natt'>
        <Grid>
            <GridRow>
                <GridCol sm="6">Litt innhold til venstre</GridCol>
                <GridCol sm="6">Litt innhold til høyre</GridCol>
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
