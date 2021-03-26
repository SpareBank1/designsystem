import { IconCard } from '@sb1/ffe-cards-react';
import { SparegrisIkon } from '@sb1/ffe-icons-react';

<IconCard icon={<SparegrisIkon />} condensed={true}>
    {({ Title, Subtext }) => (
        <>
            <Title>Sparekonto voksen 25</Title>
            <Subtext>7 004,00</Subtext>
        </>
    )}
</IconCard>
