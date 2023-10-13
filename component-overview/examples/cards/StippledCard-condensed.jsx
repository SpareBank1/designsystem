import { StippledCard } from '@sb1/ffe-cards-react';
import Symbol from '@sb1/ffe-symbols-react';

<StippledCard href="https://design.sparebank1.no" img={{ type: 'icon', element: <Symbol ariaLabel={null}>monitoring</Symbol> } } condensed={true}>
    {({ Title, Subtext }) => (
        <>
            <Title>Sparekonto voksen 25</Title>
            <Subtext>7 004,00</Subtext>
        </>
    )}
</StippledCard>
