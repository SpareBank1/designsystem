import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';

<Grid>
    <GridRow>
        <GridCol sm="6" md="6" lg="3" background="frost-30">
            Litt innhold
        </GridCol>
        <GridCol sm="6" md="6" lg="3" background="frost-30" centerText={true}>
            Sentrert tekst
        </GridCol>
        <GridCol sm="6" md="6" lg="3" background="frost-30" center={true}>
            Sentrert innhold
        </GridCol>
        <GridCol sm="6" md="6" lg="3" background="frost-30">
            Litt mer innhold. Legger til en haug av brødtekst som strekker kolonnen i høyden, for å illustrere hvordan kolonnen til venstre sentreres horisontalt og vertikalt når høyden på alle kolonner øker.
        </GridCol>
        <GridCol sm="0" md="4" lg="3" background="frost-30">
            Denne skjules på mobil
        </GridCol>
        <GridCol sm="6" md="0" lg="3" background="frost-30">
            Denne skjules på tablet
        </GridCol>
        <GridCol sm="6" md="4" lg="0" background="frost-30">
            Denne skjules på desktop
        </GridCol>
        <GridCol background="frost-30">
            Denne har ingen størrelse angitt og tar derfor full bredde på alle skjermstørrelser
        </GridCol>
    </GridRow>
</Grid>
