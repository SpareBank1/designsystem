import { ContextErrorMessage } from '@sb1/ffe-context-message-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';

<Grid>
    <GridRow background="frost-30" style={{ paddingTop: '8px' }}>
        <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
            <ContextErrorMessage onColoredBg={true}>
                Dette gikk ikke som forventet i det hele tatt!
            </ContextErrorMessage>
        </GridCol>
    </GridRow>
</Grid>;
