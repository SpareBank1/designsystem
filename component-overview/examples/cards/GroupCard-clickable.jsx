import { GroupCard } from '@sb1/ffe-cards-react/src/GroupCard/GroupCard';
import { GroupCardElement } from '@sb1/ffe-cards-react/es/GroupCard/GroupCardElement';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';

() => {
    return (
        <GroupCard shadow={true}>
            <GroupCardElement noPadding={true}>
                Øverste kort kan være uten padding hvis man ønsker
            </GroupCardElement>
            <GroupCardElement>
                {({ CardAction, CardName, Title, Subtext, Text }) => (
                    <>
                        <CardName>Kortnavn</CardName>
                        <Title>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke men hele kortet er klikkbart
                            </CardAction>
                        </Title>
                        <Subtext>En liten undertekst</Subtext>
                        <Text>Her kan man ha tekst</Text>
                    </>
                )}
            </GroupCardElement>
            <GroupCardElement>
                {({ CardAction }) => (
                    <>
                        <Heading2>
                            <CardAction as="button">Knapp</CardAction>
                        </Heading2>
                        <Paragraph>Hele kortet er klikkbart</Paragraph>
                    </>
                )}
            </GroupCardElement>
            <GroupCardElement>
                {({ CardAction }) => (
                    <>
                        <Heading2>
                            <CardAction href="https://design.sparebank1.no">
                                Lenke
                            </CardAction>
                        </Heading2>
                        <Paragraph>Hele kortet er klikkbart</Paragraph>
                    </>
                )}
            </GroupCardElement>
        </GroupCard>
    );
};
