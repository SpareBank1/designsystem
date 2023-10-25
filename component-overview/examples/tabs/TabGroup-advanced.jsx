import { useState } from 'react';
import { Tab, TabGroup } from '@sb1/ffe-tabs-react';
import Symbol from '@sb1/ffe-symbols-react';
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
                icon={<Symbol ariaLabel="hus">house</Symbol>}
                id={loan.house}
                style={activeTabId === loan.house ? spacing : displayNone}
            >
                {({ Title, Subtext }) => (
                    <>
                        <Title>Huslån</Title>
                        <Subtext>Ta opp huslån</Subtext>
                    </>
                )}
            </IconCard>

            <IconCard
                icon={<Symbol ariaLabel="bil">directions_car</Symbol>}
                id={loan.car}
                style={activeTabId === loan.car ? spacing : displayNone}
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
}
