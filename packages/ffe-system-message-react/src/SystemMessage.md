Denne typen meldinger skal kun benyttes til kritiske systemmeldinger som skal eksponeres til brukeren. Kan lukkes.

Det finnes fire typer systemmeldinger:

```js
const SystemErrorMessage = require('./SystemErrorMessage');
<SystemErrorMessage>
  Noen av systemene våre er dessverre utilgjengelige akkurat nå.
</SystemErrorMessage>
```

```js
const SystemInfoMessage = require('./SystemInfoMessage');
<SystemInfoMessage>
  Mobilbanken vil være utilgjengelig førstkommende fredag kl 19-20.
</SystemInfoMessage>
```

```js
const SystemNewsMessage = require('./SystemNewsMessage');
<SystemNewsMessage>
  Velkommen til ny betaversjon av SpareBank 1!
</SystemNewsMessage>
```

```js
const SystemSuccessMessage = require('./SystemSuccessMessage');
<SystemSuccessMessage>
  Alle systemene våre funker!
</SystemSuccessMessage>
```

