import { StippledCard } from '@sb1/ffe-cards-react';
import { GrafOppIkon } from '@sb1/ffe-icons-react';

<StippledCard href="https://design.sparebank1.no" img={{ type: 'icon', element: <GrafOppIkon  /> } } condensed={true}>
    {({ Title, Subtext }) => (
        <>
            <Title>Sparekonto voksen 25</Title>
            <Subtext>7 004,00</Subtext>
        </>
    )}
</StippledCard>
