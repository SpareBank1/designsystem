import { IconCard } from '@sb1/ffe-cards-react';
import Symbol from "@sb1/ffe-symbols-react";

<IconCard href="https://design.sparebank1.no" icon={<Symbol icon="savings" />} condensed={true}>
    {({ Title, Subtext }) => (
        <>
            <Title>Sparekonto voksen 25</Title>
            <Subtext>7 004,00</Subtext>
        </>
    )}
</IconCard>
