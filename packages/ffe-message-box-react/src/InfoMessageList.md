Meldingsbokser kan inneholde lister. For å få riktig utseende, skal man bruke disse komponentene:

```js
const { InfoMessage, InfoMessageList, InfoMessageListItem } = require('.');

<InfoMessage title="Viktige ting å huske på">
    <InfoMessageList>
        <InfoMessageListItem>
            SpareBank 1 gir deg full oversikt
        </InfoMessageListItem>
        <InfoMessageListItem>
            Ikke vær redd for å ta kontakt
        </InfoMessageListItem>
    </InfoMessageList>
</InfoMessage>;
```
