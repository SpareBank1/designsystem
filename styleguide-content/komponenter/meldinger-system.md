Denne typen meldinger skal kun benyttes til viktige meldinger som skal eksponeres til brukeren, men som
er av midlertidig art.

Systemmeldingen plasseres direkte under headeren. Teksten venstrejusteres, og venstre marg følger det øvrige innholdet
på siden. Lukk-knappen høyrejusteres til å være på linje med høyre marg. Lukking av meldingen skal ikke forskyve
innholdet på siden. Meldingen plasseres med andre ord utenfor vanlig layout flow (absolutt posisjonering). Dersom
flere meldinger skal vises samtidig (frarådes) legges disse under hverandre som i listen under.

Det finnes fire typer:

1.  Info
2.  News
3.  Success
4.  Error

```jsx
<React.Fragment>
    <SystemInfoMessage>
        Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.
    </SystemInfoMessage>
    <SystemNewsMessage>
        Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.
    </SystemNewsMessage>
    <SystemSuccessMessage>
        Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.
    </SystemSuccessMessage>
    <SystemErrorMessage>
        Noen av systemene våre er dessverre utilgjengelige akkurat nå.
    </SystemErrorMessage>
</React.Fragment>
```
