import { InfoMessage } from '@sb1/ffe-message-box-react';
import { Paragraph } from '@sb1/ffe-core-react';
import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';

<Grid>
    <GridRow background="frost-30">
        <GridCol sm={12} lg={{ cols: 6, offset: 3 }}>
            <InfoMessage title="Du har ingen kort" onColoredBg={true}>
                <Paragraph>
                    Denne tjenesten er kun tilgjengelig for deg med et debitkort
                    eller kredittkort fra SpareBank 1.
                </Paragraph>
            </InfoMessage>
        </GridCol>
    </GridRow>
</Grid>;
