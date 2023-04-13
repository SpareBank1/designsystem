import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';

<Grid>
    <GridRow>
        <GridCol>
            <h4>Eksempel med offset på alle skjermstørrelser</h4>
        </GridCol>
    </GridRow>
    <GridRow>
        <GridCol sm={{ cols: 6, offset: 2 }} md={{ cols: 4, offset: 4 }} lg={{ cols: 4, offset: 2 }}>
            <ul>
                <li>Små skjermer: 6 kolonner med 2 kolonner offset</li>
                <li>Medium skjermer: 4 kolonner med 4 kolonner offset</li>
                <li>Store skjermer: 4 kolonner med 2 kolonner offset</li>
            </ul>
        </GridCol>
    </GridRow>
    <GridRow>
        <GridCol>
            <h4>Eksempel med offset kun på store skjermer</h4>
        </GridCol>
    </GridRow>
    <GridRow>
        <GridCol sm={{ cols: 6 }} md={{ cols: 4 }} lg={{ cols: 4, offset: 2 }}>
            <ul>
                <li>Små skjermer: 6 kolonner, ingen offset</li>
                <li>Medium skjermer: 4 kolonner, ingen offset</li>
                <li>Store skjermer: 4 kolonner med 2 kolonner offset</li>
            </ul>
        </GridCol>
    </GridRow>
</Grid>
