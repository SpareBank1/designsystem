import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';

<InlineGrid>
    <GridRow>
        <GridCol sm="12" md="6" background="sand-30">
            Litt innhold til venstre
        </GridCol>
        <GridCol sm="12" md="6">
            <InlineGrid>
                <GridRow>
                    <GridCol sm="6" background="frost-30">
                        Grid inni grid - venstre
                    </GridCol>
                    <GridCol sm="6" background="syrin-30">
                        Grid inni grid - høyre
                    </GridCol>
                </GridRow>
            </InlineGrid>
        </GridCol>
    </GridRow>
</InlineGrid>
