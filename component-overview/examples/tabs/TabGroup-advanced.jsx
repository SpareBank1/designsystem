import { useState } from 'react';
import { Tab, TabGroup } from '@sb1/ffe-tabs-react';
import { HusIkon, BilIkon } from '@sb1/ffe-icons-react';
import { IconCard } from '@sb1/ffe-cards-react';

() => {
    const displayNone = {
        display: 'none',
    };

    const spacing = {
        marginTop: '8px',
    };

    const loan = { house: 'house', car: 'car' };
    const [activeTabId, setActiveTabId] = useState(loan.house);

    return (
        <>
            <TabGroup>
                <Tab
                    selected={activeTabId === loan.house}
                    onClick={() => setActiveTabId(loan.house)}
                    aria-controls={loan.house}
                >
                    Huslån
                </Tab>

                <Tab
                    selected={activeTabId === loan.car}
                    onClick={() => setActiveTabId(loan.car)}
                    aria-controls={loan.car}
                >
                    Billån
                </Tab>
            </TabGroup>

            <IconCard
                icon={<HusIkon />}
                id={loan.house}
                style={activeTabId === loan.house ? spacing : displayNone}
                role="tabpanel"
            >
                {({ Title, Subtext }) => (
                    <>
                        <Title>Huslån</Title>
                        <Subtext>Ta opp huslån</Subtext>
                    </>
                )}
            </IconCard>

            <IconCard
                icon={<BilIkon />}
                id={loan.car}
                style={activeTabId === loan.car ? spacing : displayNone}
                role="tabpanel"
            >
                {({ Title, Subtext }) => (
                    <>
                        <Title>Billån</Title>
                        <Subtext>Ta opp billån</Subtext>
                    </>
                )}
            </IconCard>
        </>
    );
};
