import React from 'react';
import { PrimaryButton, SecondaryButton } from '@sb1/ffe-buttons-react';
import { Grid, GridCol, GridRow } from '@sb1/ffe-grid-react';

interface ButtonsDemoProps {
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
}

export const ButtonsDemo: React.FC<ButtonsDemoProps> = ({
    onPrimaryClick,
    onSecondaryClick,
}) => {
    return (
        <Grid>
            <GridRow>
                <GridCol md={{ cols: 6 }} lg={{ cols: 6 }}>
                    <PrimaryButton onClick={onPrimaryClick}>
                        Primary Action
                    </PrimaryButton>
                </GridCol>
                <GridCol md={{ cols: 6 }} lg={{ cols: 6 }}>
                    <SecondaryButton onClick={onSecondaryClick}>
                        Secondary Action
                    </SecondaryButton>
                </GridCol>
            </GridRow>
        </Grid>
    );
};
