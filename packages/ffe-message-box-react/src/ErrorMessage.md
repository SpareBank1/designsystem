`ErrorMessage` skal brukes når noe har gått feil. Eksempler kan være valideringsfeil, eller hvis noe ikke gikk som
forventet.

```js
const { ErrorMessage } = require('.');

<ErrorMessage title="Fikk ikke kalkulert pris">
    <p className="ffe-body-paragraph">
        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene
        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med
        kundesupport, så hjelper vi deg.
    </p>
</ErrorMessage>;
```
