import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { ButtonsDemo } from './components/ButtonsDemo';
import { Wave } from '@sb1/ffe-core-react';
import { ContextMessage } from '@sb1/ffe-messages-react';

export const SbankyWave = () => (
    <div className="sbanky-wave-wrapper">
        <Wave
            className="sbanky-wave"
            color="frost-30"
            darkmodeColor="svart"
            bgColor="vann"
            bgDarkmodeColor="svart"
        />
    </div>
);

const App = () => {
    return (
        <Grid gap="lg" className="sbanky-home-grid">
            {/*<SbankyWave />*/}
            <GridRow>
                <GridCol md={{ cols: 12 }} lg={{ cols: 12 }}>
                    <ContextMessage
                        closeButton={true}
                        header="Meldingstittel"
                        type="info"
                    >
                        Kontekstuelle meldinger er informasjon som skal gis i en
                        kontekst
                    </ContextMessage>
                </GridCol>
                <GridCol md={{ cols: 12 }} lg={{ cols: 12 }}>
                    <ButtonsDemo
                        onPrimaryClick={() => console.log('Primary clicked')}
                        onSecondaryClick={() =>
                            console.log('Secondary clicked')
                        }
                    />
                </GridCol>
            </GridRow>
        </Grid>
    );
};

export default App;
