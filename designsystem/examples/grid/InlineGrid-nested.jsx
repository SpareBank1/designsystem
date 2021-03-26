import { InlineGrid, GridRow, GridCol } from '@sb1/ffe-grid-react';

<InlineGrid>
    <GridRow>
        <GridCol sm="12" md="6" background="grey-warm">
            Litt innhold til venstre
        </GridCol>
        <GridCol sm="12" md="6">
            <InlineGrid>
                <GridRow>
                    <GridCol sm="6" background="blue-ice">
                        Grid inni grid - venstre
                    </GridCol>
                    <GridCol sm="6" background="green-mint">
                        Grid inni grid - høyre
                    </GridCol>
                </GridRow>
            </InlineGrid>
        </GridCol>
    </GridRow>
</InlineGrid>
