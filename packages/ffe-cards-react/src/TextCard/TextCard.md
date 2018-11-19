Tekstkort er den enkleste korttypen. Den tilbyr alle underkomponenter (CardName, Title, Subtext og Text)
og plasserer dem i gitt rekkefølge nedover i kortet, med teksten midtstilt.

```jsx
<TextCard element="div">
    {({ CardName, Title, Subtext, Text }) => (
        <React.Fragment>
            <CardName>Kortnavn</CardName>
            <Title>Tittel</Title>
            <Subtext element="span">Subtext er grå</Subtext>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </Text>
        </React.Fragment>
    )}
</TextCard>
```
