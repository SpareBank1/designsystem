Hold det kort og konsist! Det skal være reelle tips/informasjon til brukeren, ikke informasjon vi ønsker å forklare her
fordi vi ikke finner noe annet sted å gjøre det. For mye tekst kan føre til at komponenten mister sin verdi.

Det finnes fire forskjellige typer:

1.  Tips
2.  Info
3.  Suksess
4.  Error

```jsx
const {
    InfoMessageList,
    InfoMessageListItem,
} = require('../../packages/ffe-message-box-react/src');

<React.Fragment>
    <Grid>
        <GridRow>
            <GridCol md={6}>
                <TipsMessage title="Overskrift">
                    Brødtekst som beskriver i mer detalj
                </TipsMessage>
            </GridCol>
            <GridCol md={6}>
                <TipsMessage title="Overskrift">
                    <InfoMessageList>
                        <InfoMessageListItem>Punkt én</InfoMessageListItem>
                        <InfoMessageListItem>Punkt to</InfoMessageListItem>
                    </InfoMessageList>
                </TipsMessage>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol md={6}>
                <InfoMessage title="Overskrift">
                    Brødtekst som beskriver i mer detalj
                </InfoMessage>
            </GridCol>
            <GridCol md={6}>
                <InfoMessage title="Overskrift">
                    <InfoMessageList>
                        <InfoMessageListItem>Punkt én</InfoMessageListItem>
                        <InfoMessageListItem>Punkt to</InfoMessageListItem>
                    </InfoMessageList>
                </InfoMessage>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol md={6}>
                <SuccessMessage title="Overskrift">
                    Brødtekst som beskriver i mer detalj hva som har skjedd
                </SuccessMessage>
            </GridCol>
            <GridCol md={6}>
                <SuccessMessage title="Overskrift">
                    <InfoMessageList>
                        <InfoMessageListItem>Punkt én</InfoMessageListItem>
                        <InfoMessageListItem>Punkt to</InfoMessageListItem>
                    </InfoMessageList>
                </SuccessMessage>
            </GridCol>
        </GridRow>
        <GridRow>
            <GridCol md={6}>
                <ErrorMessage title="Overskrift">
                    Brødtekst som beskriver feilsituasjonen i mer detalj
                </ErrorMessage>
            </GridCol>
            <GridCol md={6}>
                <ErrorMessage title="Overskrift">
                    <InfoMessageList>
                        <InfoMessageListItem>Feil én</InfoMessageListItem>
                        <InfoMessageListItem>Feil to</InfoMessageListItem>
                    </InfoMessageList>
                </ErrorMessage>
            </GridCol>
        </GridRow>
    </Grid>
</React.Fragment>;
```
