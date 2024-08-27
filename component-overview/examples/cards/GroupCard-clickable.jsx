import {
    GroupCard,
    GroupCardElement,
    GroupCardFooter,
    GroupCardTitle,
} from '@sb1/ffe-cards-react';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';

() => {
    return (
        <GroupCard>
            <GroupCardTitle>
                <Heading2 lookLike={5}>Tittel på gruppe</Heading2>
            </GroupCardTitle>
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
            <GroupCardFooter>
                {({ CardAction }) => (
                    <CardAction href="https://design.sparebank1.no">
                        Vis mer
                    </CardAction>
                )}
            </GroupCardFooter>
        </GroupCard>
    );
};
