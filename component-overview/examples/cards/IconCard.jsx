import { IconCard } from '@sb1/ffe-cards-react';
import { Icon } from '@sb1/ffe-icons-react';
import savingsIconXlarge from '@sb1/ffe-icons/icons/300/open/xl/savings.svg';

() => {
    return (
        <IconCard href="https://design.sparebank1.no" icon={<Icon fileUrl={savingsIconXlarge} size="xl" />}>
            {({ CardName, Title, Subtext, Text }) => (
                <>
                    <CardName>Kortnavn</CardName>
                    <Title>Tittel</Title>
                    <Subtext>En liten undertekst</Subtext>
                    <Text>Her kan man ha tekst</Text>
                </>
            )}
        </IconCard>

    )
}
