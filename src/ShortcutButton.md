# Shortcut button

Snarveiknapp til handlinger som er relatert til det som er på siden du er inne på. Knappen er hvit (ikke transparent).
Snarveier skal bli brukt for å vise til brukeroppgaver man kan komme til raskt. Det er viktig å huske på at det er
brukeroppgaver som skal ligge her. Ikke snarveier til informasjon og så videre. Ved klikk på en snarvei blir bruker
tatt direkte til siden snarveien fører til. Ikonet (chevron) må hentes fra pakken ffe-icons, alternativt
ffe-icons-react.

```js
<ShortcutButton
    onClick={() => { alert('Hei!'); }}
>
    Klikk på meg!
</ShortcutButton>
```
