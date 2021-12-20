import { SystemInfoMessage } from '@sb1/ffe-system-message-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';

<Grid>
    <GridRow background="frost-30">
        <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
            <SystemInfoMessage onColoredBg={true}>
                Mobilbanken vil være utilgjengelig førstkommende fredag kl
                19-20.
            </SystemInfoMessage>
        </GridCol>
    </GridRow>
</Grid>;
