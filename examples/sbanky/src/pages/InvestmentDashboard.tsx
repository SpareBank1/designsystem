import { Grid, GridRow, GridCol } from '@sb1/ffe-grid-react';
import { Heading1, Heading2 } from '@sb1/ffe-core-react';
import { Accordion, AccordionItem } from '@sb1/ffe-accordion-react';

const funds = [
    {
        id: 'norge',
        title: 'SB1 Norge',
        description: 'Norsk aksjefond som investerer i børsnoterte selskaper',
        allocation: {
            stocks: 95,
            bonds: 0,
            cash: 5
        },
        performance: {
            year1: 12.5,
            year3: 35.2,
            year5: 62.1
        }
    },
    {
        id: 'obligasjon',
        title: 'SB1 Obligasjon',
        description: 'Norsk obligasjonsfond med lav til moderat risiko',
        allocation: {
            stocks: 0,
            bonds: 90,
            cash: 10
        },
        performance: {
            year1: 3.2,
            year3: 9.8,
            year5: 15.4
        }
    },
    {
        id: 'global',
        title: 'SB1 Global',
        description: 'Globalt aksjefond med bred internasjonal eksponering',
        allocation: {
            stocks: 92,
            bonds: 3,
            cash: 5
        },
        performance: {
            year1: 15.8,
            year3: 42.3,
            year5: 78.6
        }
    }
];

export const InvestmentDashboard = () => {
    return (
        <Grid>
            <GridRow>
                <GridCol sm={12}>
                    <Heading1>Investeringsoversikt</Heading1>
                </GridCol>
            </GridRow>

            <GridRow>
                <GridCol sm={12}>
                    <div className="mb-8">
                        <Heading2>Dine fond</Heading2>
                        <Accordion headingLevel={3}>
                            {funds.map((fund) => (
                                <AccordionItem key={fund.id} heading={fund.title}>
                                    <div className="p-4">
                                        <h3 className="ffe-h5 mb-4">{fund.description}</h3>
                                        
                                        <div className="mb-4">
                                            <h4 className="ffe-h6">Aktivafordeling</h4>
                                            <div className="grid grid-cols-3 gap-4 mt-2">
                                                <div>
                                                    <div className="font-bold">Aksjer</div>
                                                    <div>{fund.allocation.stocks}%</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Obligasjoner</div>
                                                    <div>{fund.allocation.bonds}%</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Kontanter</div>
                                                    <div>{fund.allocation.cash}%</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="ffe-h6">Historisk avkastning</h4>
                                            <div className="grid grid-cols-3 gap-4 mt-2">
                                                <div>
                                                    <div className="font-bold">1 år</div>
                                                    <div>{fund.performance.year1}%</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">3 år</div>
                                                    <div>{fund.performance.year3}%</div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">5 år</div>
                                                    <div>{fund.performance.year5}%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </GridCol>
            </GridRow>
        </Grid>
    );
};
