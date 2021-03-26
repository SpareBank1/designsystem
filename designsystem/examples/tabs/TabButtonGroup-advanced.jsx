import { useState } from 'react';
import { TabButton, TabButtonGroup } from '@sb1/ffe-tabs-react';
import { HusIkon, BilIkon } from '@sb1/ffe-icons-react';
import { IconCard } from '@sb1/ffe-cards-react';

() => {
    const displayNone = {
        display: 'none',
    };

    const loan = { house: 'house', car: 'car' };
    const [activeTabId, setActiveTabId] = useState(loan.house);

    return (<>
        <TabButtonGroup>
            <TabButton
                selected={activeTabId === loan.house}
                onClick={() => setActiveTabId(loan.house)}
                aria-controls={loan.house}
            >
                Huslån
            </TabButton>

            <TabButton
                selected={activeTabId === loan.car}
                onClick={() => setActiveTabId(loan.car)}
                aria-controls={loan.car}
            >
                Billån
            </TabButton>
        </TabButtonGroup>

        <IconCard
            icon={<HusIkon />}
            id={loan.house}
            style={activeTabId === loan.house ? null : displayNone}
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
            style={activeTabId === loan.car ? null : displayNone}
        >
            {({ Title, Subtext }) => (
                <>
                    <Title>Billån</Title>
                    <Subtext>Ta opp billån</Subtext>
                </>
            )}
        </IconCard>
    </>);
}
