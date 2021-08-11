Systemmeldinger skal kun benyttes til viktige, men midlertidige meldinger. Disse meldingene plasseres direkte under headeren, og det skal helst kun brukes 1 per side.

Bruk systemmelding:

✅ Der meldingen skal vises i en gitt tidsperiode

✅ Når det skal brukes til informasjon, som ikke krever en handling fra bruker.

❌ Ikke bruk der det ikke gir mening at meldingen er rett under header.

❌ Ikke bruk om der det skal vises mange meldinger samtidig.

```jsx
<React.Fragment>
    <SystemInfoMessage>
        Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.
    </SystemInfoMessage>
    <SystemNewsMessage>
        Kontoret holdes stengt tilogmed fredag kl 14.
    </SystemNewsMessage>
    <SystemSuccessMessage>Pengene er overført!</SystemSuccessMessage>
    <SystemErrorMessage>
        Noen av systemene våre er dessverre utilgjengelige akkurat nå.
    </SystemErrorMessage>
</React.Fragment>
```
