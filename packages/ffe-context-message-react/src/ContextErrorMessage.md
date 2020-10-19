Vær oppmerksom på at alle feilmeldinger automatisk får role="alert", dette gjør at en skjermleser automatisk vil lese opp innholdet i meldingen med en gang meldingen vises. Dersom meldingen er tilstede ved initiell sidelasting leses meldingen opp like etter sidetittel. Dette kan slås av, se eksempelet under.

```js
<ContextErrorMessage>
    Dette gikk ikke som forventet i det hele tatt!
</ContextErrorMessage>
```

```js
const { UtropstegnIkon } = require('@sb1/ffe-icons-react');

<ContextErrorMessage icon={<UtropstegnIkon />}>
    Dette gikk ikke som forventet i det hele tatt!
</ContextErrorMessage>;
```

```js
<ContextErrorMessage header="Opps...">
    Dette gikk ikke som forventet i det hele tatt!
</ContextErrorMessage>
```

```js
<ContextErrorMessage compact={true}>
    Det skjedde en liten feil
</ContextErrorMessage>
```

```js
<ContextErrorMessage showCloseButton={true}>
    Jeg kan også lukkes
</ContextErrorMessage>
```

```js
<ContextErrorMessage alert={false}>Slår av alert.</ContextErrorMessage>
```
