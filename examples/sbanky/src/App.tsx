import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { ButtonsDemo } from './components/ButtonsDemo';
import { Paragraph, Wave } from '@sb1/ffe-core-react';
import { ContextMessage } from '@sb1/ffe-messages-react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

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
            <SbankyWave />
            <GridRow>
                <GridCol md={{ cols: 12 }} lg={{ cols: 12 }}>
                    <Paragraph>Paragraph component, er fonten med?</Paragraph>
                </GridCol>
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
                <GridCol md={{ cols: 12 }} lg={{ cols: 12 }}>
                    <Accordion headingLevel={2}>
                        <AccordionItem heading="Tittel">
                            Skjult innhold
                        </AccordionItem>
                        <AccordionItem heading={<span>Enda en tittel</span>}>
                            Mer skjult innhold
                        </AccordionItem>
                        <AccordionItem heading="En siste tittel">
                            Enda mer innhold
                        </AccordionItem>
                    </Accordion>
                </GridCol>
            </GridRow>
        </Grid>
    );
};

export default App;
