Meldingsbokser inneholder reelle tips eller informasjon til brukere. Disse holdes konsise, og ikke brukes til å forklare ting "man ikke finner noe annet sted til".

Bruk Meldingsbokser når:

✅ Du trenger å informere kort om ett tema

✅ Du trenger å utheve noe informasjon fra enn større sammenheng.

✅ Du har innhold som skal utheves, men som er selvforklarende uten kontekst.

```jsx
<React.Fragment>
    <div className="sb1ds-example--grid__col-2">
        <TipsMessage title="Kjøre bil i utlandet?">
            <p className="ffe-body-paragraph">
                Dersom du skal ha med bilen til utlandet, anbefaler vi at du har
                med deg grønt kort. Grønt kort er et internasjonalt
                forsikringsbevis som viser at du har en gyldig
                ansvarsforsikring.
            </p>
        </TipsMessage>
        <InfoMessage title="Ingen transaksjoner">
            <p className="ffe-body-paragraph">
                Fant ingen transaksoner å vise for den valgte perioden.
            </p>
        </InfoMessage>
        <SuccessMessage title="Overskrift">
            <p className="ffe-body-paragraph">
                Brødtekst som beskriver i mer detalj hva som har skjedd
            </p>
        </SuccessMessage>
        <ErrorMessage title="Overskrift">
            <p className="ffe-body-paragraph">
                Brødtekst som beskriver feilsituasjonen i mer detalj
            </p>
        </ErrorMessage>
    </div>
</React.Fragment>
```

#### Med liste

```jsx
const {
    InfoMessageList,
    InfoMessageListItem,
} = require('../../packages/ffe-message-box-react/src');

<React.Fragment>
    <div className="sb1ds-example--grid__col-2">
        <TipsMessage title="Overskrift">
            <InfoMessageList>
                <InfoMessageListItem>Punkt én</InfoMessageListItem>
                <InfoMessageListItem>Punkt to</InfoMessageListItem>
            </InfoMessageList>
        </TipsMessage>
        <InfoMessage title="Overskrift">
            <InfoMessageList>
                <InfoMessageListItem>Punkt én</InfoMessageListItem>
                <InfoMessageListItem>Punkt to</InfoMessageListItem>
            </InfoMessageList>
        </InfoMessage>
    </div>
</React.Fragment>;
```
