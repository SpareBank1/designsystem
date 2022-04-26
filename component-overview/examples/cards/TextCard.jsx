import { TextCard } from '@sb1/ffe-cards-react';

<TextCard element="div">
    {({ CardName, Title, Subtext, Text }) => (
        <>
            <CardName>Kortnavn</CardName>
            <Title>Tittel</Title>
            <Subtext element="span">Subtext er grå</Subtext>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </Text>
        </>
    )}
</TextCard>
