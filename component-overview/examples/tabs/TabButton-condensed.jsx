import { TabButton } from '@sb1/ffe-tabs-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';

<Grid>
    <GridRow background="sand" topPadding={true}>
        <GridCol sm={12}>
            <div>
                <TabButton ghost={true} condensed={true}>
                    Dette er en transparent og kompakt tab button
                </TabButton>
            </div>
        </GridCol>
    </GridRow>
</Grid>;
