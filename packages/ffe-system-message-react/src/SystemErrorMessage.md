Vær oppmerksom på at alle feilmeldinger automatisk får role="alert", dette gjør at en skjermleser automatisk vil lese opp innholdet i meldingen med en gang meldingen vises. Dersom meldingen er tilstede ved initiell sidelasting leses meldingen opp like etter sidetittel. Dette kan slås av, se eksempelet under.

```js
<SystemErrorMessage>
    Noen av systemene våre er dessverre utilgjengelige akkurat nå.
</SystemErrorMessage>
```

Slår av alert:

```js
<SystemErrorMessage alert={false}>
    Noen av systemene våre er dessverre utilgjengelige akkurat nå.
</SystemErrorMessage>
```
