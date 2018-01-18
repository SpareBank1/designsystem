`InfoMessage` brukes til å vise relevant informasjon og objektive fakta om konteksten.

```js
const { InfoMessage } = require('.');

<InfoMessage title="Du har ingen kort">
    <p className="ffe-body-paragraph">
        Denne tjenesten er kun tilgjengelig for deg med et debitkort eller
        kredittkort fra SpareBank 1.
    </p>
</InfoMessage>;
```
