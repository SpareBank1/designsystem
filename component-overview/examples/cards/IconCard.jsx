import { IconCard } from '@sb1/ffe-cards-react';
import Symbol from "@sb1/ffe-symbols-react";

<IconCard href="https://design.sparebank1.no" icon={<Symbol icon="savings" />}>
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>Kortnavn</CardName>
            <Title>Tittel</Title>
            <Subtext>En liten undertekst</Subtext>
            <Text>Her kan man ha tekst</Text>
        </>
    )}
</IconCard>
