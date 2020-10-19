`ErrorMessage` skal brukes når noe har gått feil. Eksempler kan være valideringsfeil, eller hvis noe ikke gikk som
forventet.

Vær oppmerksom på at alle feilmeldinger automatisk får role="alert", dette gjør at en skjermleser automatisk vil lese opp innholdet i meldingen med en gang meldingen vises. Dersom meldingen er tilstede ved initiell sidelasting leses meldingen opp like etter sidetittel. Dette kan slås av, se eksempelet under.

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

Slå av alert:

```js
const { ErrorMessage } = require('.');

<ErrorMessage title="Fikk ikke kalkulert pris" alert={false}>
    <p className="ffe-body-paragraph">
        Det ser ut til at vi har litt problemer med priskalkuleringstjenestene
        våre akkurat nå. Hvis problemet vedvarer, kan du ta kontakt med
        kundesupport, så hjelper vi deg.
    </p>
</ErrorMessage>;
```
