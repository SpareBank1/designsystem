Gir side eller produktspesifikk informasjon av ikke kritisk art

Kommer i fire forskjellige versjoner - info, tips, suksess og feil.
Alle har støtte for å kunne sende inn et ikon om designet tilsier det

```js
const Icon = require('ffe-icons-react/info-ikon');
const ContextInfoMessage = require('./ContextInfoMessage');
<ContextInfoMessage>
    Nå har det kommet noe nytt og spennende fra SpareBank 1!
</ContextInfoMessage>
<ContextInfoMessage icon={<Icon />}>
    Nå har det kommet noe nytt og spennende fra SpareBank 1!
</ContextInfoMessage>
```

```js
const Icon = require('ffe-icons-react/hake-ikon');
const ContextSuccessMessage = require('./ContextSuccessMessage');
<ContextSuccessMessage>
    Betalingen ble registrert!
</ContextSuccessMessage>
<ContextSuccessMessage icon={<Icon />}>
    Betalingen ble registrert!
</ContextSuccessMessage>
```

```js
const Icon = require('ffe-icons-react/lyspare-ikon');
const ContextTipMessage = require('./ContextTipMessage');
<ContextTipMessage>
    Visste du at du kan få en skattefordel ved sparing i IPS?
</ContextTipMessage>
<ContextTipMessage icon={<Icon />}>
    Visste du at du kan få en skattefordel ved sparing i IPS?
</ContextTipMessage>
```

```js
const Icon = require('ffe-icons-react/utropstegn-ikon');
const ContextErrorMessage = require('./ContextErrorMessage');
<ContextErrorMessage>
    Dette gikk ikke som forventet i det hele tatt!
</ContextErrorMessage>
<ContextErrorMessage icon={<Icon />}>
    Dette gikk ikke som forventet i det hele tatt!
</ContextErrorMessage>
```

De har støtte for å legge til en tittel:

```js
const ContextInfoMessage = require('./ContextInfoMessage');
<ContextInfoMessage heading="Til info">
    Nå har det kommet noe nytt og spennende fra SpareBank 1!
</ContextInfoMessage>
```

De har støtte for å bli lukket:

```js
const ContextInfoMessage = require('./ContextInfoMessage');
<ContextInfoMessage showCloseButton={true}>
    Trykk på lukk-knappen
</ContextInfoMessage>
```

For konsumenter som trenger et mer kompakt design, er det også støtte for det:

```js
const ContextInfoMessage = require('./ContextInfoMessage');
<ContextInfoMessage compact={true}>
    Nå har det kommet noe nytt og spennende fra SpareBank 1!
</ContextInfoMessage>
```
