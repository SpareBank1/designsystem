import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { ButtonPair } from './components/button-pair.tsx/ButtonPair';
import { Paragraph, Wave } from '@sb1/ffe-core-react';
import { ContextMessage } from '@sb1/ffe-messages-react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';
import SidebarMenu from './components/sidebar-menu/SidebarMenu';

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
            <GridRow>
                <GridCol sm={12} md={3} lg={4}>
                    <SidebarMenu />
                </GridCol>
                <GridCol sm={12} md={6} lg={8}>
                    <SbankyWave />
                    <GridRow>
                        <GridCol md={12} lg={12}>
                            <Paragraph
                                style={{ color: '#fff', padding: '10px' }}
                            >
                                Paragraph component, er fonten med?
                            </Paragraph>
                        </GridCol>
                        <GridCol md={12} lg={12}>
                            <ContextMessage
                                closeButton={true}
                                header="Meldingstittel"
                                type="info"
                            >
                                Kontekstuelle meldinger er informasjon som skal
                                gis i en kontekst
                            </ContextMessage>
                        </GridCol>
                        <GridCol md={12} lg={12}>
                            <ButtonPair
                                onPrimaryClick={() =>
                                    console.log('Primary clicked')
                                }
                                onSecondaryClick={() =>
                                    console.log('Secondary clicked')
                                }
                            />
                        </GridCol>
                        <GridCol md={12} lg={12}>
                            <Accordion headingLevel={2}>
                                <AccordionItem heading="Tittel">
                                    Skjult innhold
                                </AccordionItem>
                                <AccordionItem
                                    heading={<span>Enda en tittel</span>}
                                >
                                    Mer skjult innhold
                                </AccordionItem>
                                <AccordionItem heading="En siste tittel">
                                    Enda mer innhold
                                </AccordionItem>
                            </Accordion>
                        </GridCol>
                    </GridRow>
                </GridCol>
            </GridRow>
        </Grid>
    );
};

export default App;
