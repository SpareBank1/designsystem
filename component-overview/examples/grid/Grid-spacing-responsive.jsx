import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';

<>
    <h3 className='ffe-h3'>Progressivt økende spacing</h3>
    <Grid gap="none" sm={{ gap: 'sm' }} md={{ gap: 'md' }} lg={{ gap: 'lg' }}>
        <GridRow sm={{ margin: 'sm', padding: 'sm' }} md={{ margin: 'md', padding: 'md' }} lg={{ margin: 'lg', padding: 'lg' }} background="frost-30">
            <GridCol sm="6" md="4" lg="3" background="syrin-30">
                Litt innhold
            </GridCol>
            <GridCol sm="6" md="4" lg="3" background="syrin-30">
                Litt innhold
            </GridCol>
            <GridCol sm="6" md="4" lg="3" background="syrin-30">
                Litt innhold
            </GridCol>
            <GridCol sm="6" md="4" lg="3" background="syrin-30">
                Litt innhold
            </GridCol>
        </GridRow>
    </Grid>

    <h3 className='ffe-h3'>2xs som default, lg på store skjermer</h3>
    <Grid gap="2xs" lg={{ gap: 'lg' }}>
        <GridRow margin="2xs" padding="2xs" lg={{ margin: 'lg', padding: 'lg' }} background="vann-30">
            <GridCol sm="6" md="4" lg="3" background="sand">
                Litt innhold
            </GridCol>
            <GridCol sm="6" md="4" lg="3" background="sand">
                Litt innhold
            </GridCol>
            <GridCol sm="6" md="4" lg="3" background="sand">
                Litt innhold
            </GridCol>
            <GridCol sm="6" md="4" lg="3" background="sand">
                Litt innhold
            </GridCol>
        </GridRow>
    </Grid>

    <h3 className='ffe-h3'>Uten responsive modifiere</h3>
    <Grid gap="md">
        <GridRow margin="5xl" padding="2xl" background="vann">
            <GridCol sm="6" md="4" lg="3" background="fjell">
                Litt innhold
            </GridCol>
            <GridCol sm="6" md="4" lg="3" background="fjell">
                Litt innhold
            </GridCol>
            <GridCol sm="6" md="4" lg="3" background="fjell">
                Litt innhold
            </GridCol>
            <GridCol sm="6" md="4" lg="3" background="fjell">
                Litt innhold
            </GridCol>
        </GridRow>
    </Grid>
</>
